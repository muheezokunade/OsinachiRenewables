import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import {
  X,
  Settings,
  CheckCircle,
  AlertCircle,
  Shield,
  BarChart3,
  Zap,
  Target,
  Cookie,
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { enableAnalytics } from '@/lib/analytics';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functionality: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
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
      // Delay appearance for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Start animation after a brief delay to ensure proper sequence
        setTimeout(() => {
          setIsAnimating(true);
        }, 50);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const allAccepted = {
      essential: true,
      analytics: true,
      functionality: true,
      marketing: true,
    };

    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Start exit animation
    setIsAnimating(false);

    // Hide after animation completes and show toast
    setTimeout(() => {
      setIsVisible(false);
      setIsProcessing(false);
      toast({
        title: 'Preferences saved',
        description: 'All cookies have been enabled for the best experience.',
        duration: 3000,
      });
      enableAnalytics();
    }, 300);
  };

  const handleAcceptSelected = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Start exit animation
    setIsAnimating(false);
    setShowSettings(false);

    // Hide after animation completes and show toast
    setTimeout(() => {
      setIsVisible(false);
      setIsProcessing(false);
      toast({
        title: 'Preferences saved',
        description: 'Your cookie preferences have been updated.',
        duration: 3000,
      });
      // Enable analytics only if analytics cookies are accepted
      if (preferences.analytics) {
        enableAnalytics();
      }
    }, 300);
  };

  const handleRejectAll = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    const minimalConsent = {
      essential: true, // Essential cookies cannot be disabled
      analytics: false,
      functionality: false,
      marketing: false,
    };

    localStorage.setItem('cookie-consent', JSON.stringify(minimalConsent));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());

    // Start exit animation
    setIsAnimating(false);

    // Hide after animation completes and show toast
    setTimeout(() => {
      setIsVisible(false);
      setIsProcessing(false);
      toast({
        title: 'Preferences saved',
        description:
          'Only essential cookies are enabled. Some features may be limited.',
        duration: 3000,
      });
    }, 300);
  };

  const handlePreferenceChange = (
    type: keyof CookiePreferences,
    value: boolean
  ) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [type]: value }));
  };

  const handleClose = () => {
    if (isProcessing) return;
    setIsProcessing(true);

    // Start exit animation
    setIsAnimating(false);

    // Hide after animation completes
    setTimeout(() => {
      setIsVisible(false);
      setIsProcessing(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div
        className='bg-black/20 backdrop-blur-sm absolute inset-0'
        onClick={handleClose}
      ></div>
      <Card className='max-w-4xl mx-auto relative shadow-2xl border-0 bg-white/95 backdrop-blur-sm'>
        <CardContent className='p-8'>
          {!showSettings ? (
            // Main consent banner
            <div className='space-y-6'>
              <div className='flex items-start justify-between'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-3'>
                    <div className='p-2 bg-primary-blue/10 rounded-lg'>
                      <Cookie className='h-5 w-5 text-primary-blue' />
                    </div>
                    <Badge
                      variant='secondary'
                      className='bg-primary-blue/10 text-primary-blue border-primary-blue/20'
                    >
                      Cookie Notice
                    </Badge>
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    We value your privacy
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    We use cookies and similar technologies to enhance your
                    browsing experience, analyze site traffic, and personalize
                    content. By continuing to use our site, you consent to our
                    use of cookies. Learn more in our{' '}
                    <Link href='/cookies-policy'>
                      <span className='text-primary-blue hover:text-primary-blue/80 underline font-medium'>
                        Cookies Policy
                      </span>
                    </Link>
                    .
                  </p>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={handleClose}
                  disabled={isProcessing}
                  className='text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2'
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>

              <Separator />

              <div className='flex flex-col sm:flex-row gap-3'>
                <Button
                  variant='outline'
                  onClick={() => setShowSettings(true)}
                  disabled={isProcessing}
                  className='flex items-center gap-2 flex-1 sm:flex-none border-gray-300 hover:bg-gray-50'
                >
                  <Settings className='h-4 w-4' />
                  Customize
                </Button>
                <Button
                  variant='outline'
                  onClick={handleRejectAll}
                  disabled={isProcessing}
                  className='flex items-center gap-2 flex-1 sm:flex-none border-gray-300 hover:bg-gray-50'
                >
                  <AlertCircle className='h-4 w-4' />
                  Reject All
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  disabled={isProcessing}
                  className='flex items-center gap-2 bg-primary-blue hover:bg-primary-blue/90 text-white flex-1 sm:flex-none shadow-lg hover:shadow-xl transition-all duration-200'
                >
                  <CheckCircle className='h-4 w-4' />
                  Accept All
                </Button>
              </div>
            </div>
          ) : (
            // Settings panel
            <div className='space-y-6'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-primary-blue/10 rounded-lg'>
                    <Settings className='h-5 w-5 text-primary-blue' />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold text-gray-900'>
                      Cookie Preferences
                    </h3>
                    <p className='text-sm text-gray-500'>
                      Choose which cookies you'd like to enable
                    </p>
                  </div>
                </div>
                <Button
                  variant='ghost'
                  size='sm'
                  onClick={() => setShowSettings(false)}
                  disabled={isProcessing}
                  className='text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2'
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>

              <Separator />

              <div className='space-y-4'>
                <div className='flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200'>
                  <div className='flex items-start gap-3'>
                    <div className='p-2 bg-green-100 rounded-lg mt-1'>
                      <Shield className='h-4 w-4 text-green-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Essential Cookies
                      </h4>
                      <p className='text-sm text-gray-600 mt-1'>
                        Required for the website to function properly
                      </p>
                      <p className='text-xs text-green-600 mt-1 font-medium'>
                        Always active for security
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Badge
                      variant='secondary'
                      className='bg-green-100 text-green-700 border-green-200'
                    >
                      Always Active
                    </Badge>
                  </div>
                </div>

                <div className='flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors'>
                  <div className='flex items-start gap-3'>
                    <div className='p-2 bg-blue-100 rounded-lg mt-1'>
                      <BarChart3 className='h-4 w-4 text-blue-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Analytics Cookies
                      </h4>
                      <p className='text-sm text-gray-600 mt-1'>
                        Help us understand how visitors use our website
                      </p>
                      <p className='text-xs text-blue-600 mt-1 font-medium'>
                        Improves user experience
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={checked =>
                      handlePreferenceChange('analytics', checked)
                    }
                    className='data-[state=checked]:bg-blue-600'
                  />
                </div>

                <div className='flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors'>
                  <div className='flex items-start gap-3'>
                    <div className='p-2 bg-purple-100 rounded-lg mt-1'>
                      <Zap className='h-4 w-4 text-purple-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Functionality Cookies
                      </h4>
                      <p className='text-sm text-gray-600 mt-1'>
                        Remember your preferences and provide enhanced features
                      </p>
                      <p className='text-xs text-purple-600 mt-1 font-medium'>
                        Personalizes your experience
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.functionality}
                    onCheckedChange={checked =>
                      handlePreferenceChange('functionality', checked)
                    }
                    className='data-[state=checked]:bg-purple-600'
                  />
                </div>

                <div className='flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 transition-colors'>
                  <div className='flex items-start gap-3'>
                    <div className='p-2 bg-orange-100 rounded-lg mt-1'>
                      <Target className='h-4 w-4 text-orange-600' />
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        Marketing Cookies
                      </h4>
                      <p className='text-sm text-gray-600 mt-1'>
                        Used to deliver relevant advertisements and content
                      </p>
                      <p className='text-xs text-orange-600 mt-1 font-medium'>
                        Shows relevant content
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={checked =>
                      handlePreferenceChange('marketing', checked)
                    }
                    className='data-[state=checked]:bg-orange-600'
                  />
                </div>
              </div>

              <Separator />

              <div className='flex flex-col sm:flex-row gap-3 pt-2'>
                <Button
                  variant='outline'
                  onClick={() => setShowSettings(false)}
                  disabled={isProcessing}
                  className='flex-1 border-gray-300 hover:bg-gray-50'
                >
                  Back
                </Button>
                <Button
                  onClick={handleAcceptSelected}
                  disabled={isProcessing}
                  className='flex-1 bg-primary-blue hover:bg-primary-blue/90 text-white shadow-lg hover:shadow-xl transition-all duration-200'
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
