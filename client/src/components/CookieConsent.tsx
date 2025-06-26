import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    trackEvent('cookie_consent', 'accept', 'banner');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    trackEvent('cookie_consent', 'reject', 'banner');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm text-gray-700 mb-4 sm:mb-0">
          <p>
            We use cookies to enhance your browsing experience and analyze our traffic. 
            By continuing to use our site, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button 
            onClick={handleAccept}
            className="bg-primary-blue text-white hover:bg-primary-blue/90 font-semibold"
          >
            Accept All
          </Button>
          <Button 
            onClick={handleReject}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold"
          >
            Reject
          </Button>
        </div>
      </div>
    </div>
  );
}
