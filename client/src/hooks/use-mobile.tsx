import * as React from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;
const SMALL_MOBILE_BREAKPOINT = 480;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isMobile;
}

export function useIsSmallMobile() {
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(max-width: ${SMALL_MOBILE_BREAKPOINT - 1}px)`
    );
    const onChange = () => {
      setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT);
    };
    mql.addEventListener('change', onChange);
    setIsSmallMobile(window.innerWidth < SMALL_MOBILE_BREAKPOINT);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isSmallMobile;
}

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(
    undefined
  );

  React.useEffect(() => {
    const mql = window.matchMedia(
      `(min-width: ${MOBILE_BREAKPOINT}px) and (max-width: ${TABLET_BREAKPOINT - 1}px)`
    );
    const onChange = () => {
      setIsTablet(
        window.innerWidth >= MOBILE_BREAKPOINT &&
          window.innerWidth < TABLET_BREAKPOINT
      );
    };
    mql.addEventListener('change', onChange);
    setIsTablet(
      window.innerWidth >= MOBILE_BREAKPOINT &&
        window.innerWidth < TABLET_BREAKPOINT
    );
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return !!isTablet;
}

export function useDeviceType() {
  const isMobile = useIsMobile();
  const isSmallMobile = useIsSmallMobile();
  const isTablet = useIsTablet();

  return {
    isMobile,
    isSmallMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
  };
}

export function useTouchDevice() {
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchDevice;
}
