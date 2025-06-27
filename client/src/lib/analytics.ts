// Google Analytics configuration
export const GA_MEASUREMENT_ID = 'G-V8VZXHZHPX';

// Define the gtag function globally
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

// Check if analytics is enabled based on cookie consent
export const isAnalyticsEnabled = (): boolean => {
  if (typeof window === 'undefined') return false;

  const consent = localStorage.getItem('cookie-consent');
  if (!consent) return false;

  try {
    const preferences = JSON.parse(consent);
    return preferences.analytics === true;
  } catch {
    return false;
  }
};

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    // Check if gtag is already loaded
    if (typeof window.gtag === 'function') {
      return;
    }

    // Initialize gtag if not already done
    window.dataLayer = window.dataLayer || [];
    const gtag = (...args: unknown[]) => {
      window.dataLayer.push(args);
    };
    window.gtag = gtag;

    // Only track if analytics is enabled
    if (isAnalyticsEnabled()) {
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (
    typeof window !== 'undefined' &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    isAnalyticsEnabled()
  ) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: title || document.title,
      page_location: url,
    });
  }
};

// Track events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (
    typeof window !== 'undefined' &&
    window.gtag &&
    GA_MEASUREMENT_ID &&
    isAnalyticsEnabled()
  ) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};

// Enable analytics after cookie consent
export const enableAnalytics = () => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};
