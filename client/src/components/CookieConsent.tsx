import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Settings, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functionality: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    functionality: false,
    marketing: false,
  });
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functionality: true,
      marketing: true,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    toast({
      title: "Cookie preferences saved",
      description: "All cookies have been enabled. You can change your preferences anytime.",
    });
  };

  const handleAcceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    setShowSettings(false);
    
    toast({
      title: "Cookie preferences saved",
      description: "Your selected cookie preferences have been saved.",
    });
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      essential: true, // Essential cookies cannot be disabled
      analytics: false,
      functionality: false,
      marketing: false,
    };
    
    localStorage.setItem('cookie-consent', JSON.stringify(minimalConsent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    setIsVisible(false);
    
    toast({
      title: "Cookie preferences saved",
      description: "Only essential cookies are enabled. Some features may be limited.",
    });
  };

  const handlePreferenceChange = (type: keyof CookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/50">
      <Card className="max-w-4xl mx-auto">
        <CardContent className="p-6">
          {!showSettings ? (
            // Main consent banner
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Cookie Notice</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-gray-600 text-sm">
                    We use cookies and similar technologies to help personalize content, provide and improve our services, 
                    and give you the best possible experience. By clicking "Accept All", you consent to our use of cookies. 
                    You can learn more in our{' '}
                    <Link href="/cookies-policy">
                      <span className="text-green-600 hover:text-green-700 underline">Cookies Policy</span>
                    </Link>.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsVisible(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" />
                  Customize
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="flex items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4" />
                  Reject All
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <CheckCircle className="h-4 w-4" />
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Cookie Preferences</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for the website to function properly</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Always Active</Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Functionality Cookies</h4>
                    <p className="text-sm text-gray-600">Remember your preferences and provide enhanced features</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functionality}
                    onChange={(e) => handlePreferenceChange('functionality', e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
                
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Cookies</h4>
                    <p className="text-sm text-gray-600">Used to deliver relevant advertisements</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                  />
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowSettings(false)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button
                  onClick={handleAcceptSelected}
                  className="flex-1 bg-green-600 hover:bg-green-700"
                >
                  Save Preferences
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
