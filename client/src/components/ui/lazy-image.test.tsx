import { render } from '@testing-library/react';
import { screen, waitFor } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { LazyImage } from './lazy-image';

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
const mockObserve = vi.fn();
const mockDisconnect = vi.fn();

beforeEach(() => {
  mockIntersectionObserver.mockClear();
  mockObserve.mockClear();
  mockDisconnect.mockClear();

  mockIntersectionObserver.mockImplementation(_callback => {
    return {
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: vi.fn(),
    };
  });

  global.IntersectionObserver = mockIntersectionObserver;
});

describe('LazyImage', () => {
  it('renders placeholder initially', () => {
    render(
      <LazyImage
        src='https://example.com/image.jpg'
        alt='Test image'
        className='w-full h-64'
      />
    );

    // Should render placeholder (using document.querySelector since it has aria-hidden)
    const placeholderImg = document.querySelector('img[aria-hidden="true"]');
    expect(placeholderImg).toBeInTheDocument();
    expect(placeholderImg).toHaveAttribute('aria-hidden', 'true');
  });

  it('sets up intersection observer', () => {
    render(<LazyImage src='https://example.com/image.jpg' alt='Test image' />);

    expect(mockIntersectionObserver).toHaveBeenCalledTimes(1);
    expect(mockObserve).toHaveBeenCalledTimes(1);
  });

  it('loads actual image when in view', async () => {
    let intersectionCallback: ((entries: any[]) => void) | undefined;

    mockIntersectionObserver.mockImplementation(callback => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      };
    });

    render(<LazyImage src='https://example.com/image.jpg' alt='Test image' />);

    // Simulate intersection
    if (intersectionCallback) {
      intersectionCallback([{ isIntersecting: true }]);
    }

    await waitFor(() => {
      const actualImg = screen.getByAltText('Test image');
      expect(actualImg).toBeInTheDocument();
      expect(actualImg).toHaveAttribute('src', 'https://example.com/image.jpg');
    });
  });

  it('shows loading indicator when image is loading', async () => {
    let intersectionCallback: ((entries: any[]) => void) | undefined;

    mockIntersectionObserver.mockImplementation(callback => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      };
    });

    render(<LazyImage src='https://example.com/image.jpg' alt='Test image' />);

    // Simulate intersection
    if (intersectionCallback) {
      intersectionCallback([{ isIntersecting: true }]);
    }

    await waitFor(() => {
      // Should show loading spinner
      const loadingSpinner = document.querySelector('.animate-spin');
      expect(loadingSpinner).toBeInTheDocument();
    });
  });

  it('shows error state when image fails to load', async () => {
    let intersectionCallback: ((entries: any[]) => void) | undefined;

    mockIntersectionObserver.mockImplementation(callback => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      };
    });

    render(
      <LazyImage src='https://example.com/broken-image.jpg' alt='Test image' />
    );

    // Simulate intersection
    if (intersectionCallback) {
      intersectionCallback([{ isIntersecting: true }]);
    }

    await waitFor(() => {
      const actualImg = screen.getByAltText('Test image');
      expect(actualImg).toBeInTheDocument();
    });

    // Simulate image load error
    const actualImg = screen.getByAltText('Test image');
    actualImg.dispatchEvent(new Event('error'));

    await waitFor(() => {
      expect(screen.getByText('Failed to load image')).toBeInTheDocument();
    });
  });

  it('calls onLoad callback when image loads successfully', async () => {
    const onLoadMock = vi.fn();
    let intersectionCallback: ((entries: any[]) => void) | undefined;

    mockIntersectionObserver.mockImplementation(callback => {
      intersectionCallback = callback;
      return {
        observe: mockObserve,
        disconnect: mockDisconnect,
        unobserve: vi.fn(),
      };
    });

    render(
      <LazyImage
        src='https://example.com/image.jpg'
        alt='Test image'
        onLoad={onLoadMock}
      />
    );

    // Simulate intersection
    if (intersectionCallback) {
      intersectionCallback([{ isIntersecting: true }]);
    }

    await waitFor(() => {
      const actualImg = screen.getByAltText('Test image');
      expect(actualImg).toBeInTheDocument();
    });

    // Simulate successful load
    const actualImg = screen.getByAltText('Test image');
    actualImg.dispatchEvent(new Event('load'));

    expect(onLoadMock).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    const customClass = 'custom-image-class';

    render(
      <LazyImage
        src='https://example.com/image.jpg'
        alt='Test image'
        className={customClass}
      />
    );

    const container = document.querySelector(`.${customClass}`);
    expect(container).toBeInTheDocument();
  });

  it('uses custom threshold and rootMargin', () => {
    const customThreshold = 0.5;
    const customRootMargin = '100px';

    render(
      <LazyImage
        src='https://example.com/image.jpg'
        alt='Test image'
        threshold={customThreshold}
        rootMargin={customRootMargin}
      />
    );

    expect(mockIntersectionObserver).toHaveBeenCalledWith(
      expect.any(Function),
      {
        threshold: customThreshold,
        rootMargin: customRootMargin,
      }
    );
  });
});
