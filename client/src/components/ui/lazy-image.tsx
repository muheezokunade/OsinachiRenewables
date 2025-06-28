import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useDeviceType } from '@/hooks/use-mobile';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export function LazyImage({
  src,
  alt,
  placeholder,
  className,
  containerClassName,
  priority = false,
  ...props
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const { isMobile } = useDeviceType();

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Generate optimized image URL based on device type
  const getOptimizedSrc = (originalSrc: string) => {
    if (
      originalSrc.includes('pexels.com') ||
      originalSrc.includes('unsplash.com')
    ) {
      const width = isMobile ? 600 : 800;
      const height = isMobile ? 400 : 600;

      if (originalSrc.includes('pexels.com')) {
        return `${originalSrc}?auto=compress&w=${width}&h=${height}&fit=crop`;
      }

      if (originalSrc.includes('unsplash.com')) {
        return `${originalSrc}&w=${width}&h=${height}&fit=crop&auto=format`;
      }
    }

    return originalSrc;
  };

  return (
    <div
      ref={imgRef}
      className={cn(
        'relative overflow-hidden',
        isLoading && 'animate-pulse bg-gray-200',
        containerClassName
      )}
    >
      {isInView && !hasError && (
        <img
          src={getOptimizedSrc(src)}
          alt={alt}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding='async'
          {...props}
        />
      )}

      {/* Placeholder */}
      {(isLoading || !isInView) && !hasError && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100',
            className
          )}
        >
          {placeholder ? (
            <img
              src={placeholder}
              alt={`${alt} placeholder`}
              className='w-full h-full object-cover opacity-50'
            />
          ) : (
            <div className='w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100',
            className
          )}
        >
          <div className='text-center'>
            <svg
              className='w-12 h-12 text-gray-400 mx-auto mb-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z'
              />
            </svg>
            <p className='text-sm text-gray-500'>Failed to load image</p>
          </div>
        </div>
      )}
    </div>
  );
}
