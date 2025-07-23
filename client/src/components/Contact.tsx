import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Phone, Mail, Clock, MessageCircle, MapPin } from 'lucide-react';
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';
import { useDeviceType } from '@/hooks/use-mobile';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isMobile, isSmallMobile } = useDeviceType();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: data => {
      toast({
        title: 'Success!',
        description: data.message,
      });
      form.reset();
      trackEvent('form_submit', 'contact', 'success');
    },
    onError: (error: Error | unknown) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'An error occurred while sending your message.';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
      trackEvent('form_submit', 'contact', 'error');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
    trackEvent('form_submit', 'contact', 'attempt');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      value: '+234 906 003 3963',
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'info@osinachirenewables.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'wa.me/2349060033963',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value:
        'Halo Restaurant by lekki water corporation, Hakeem Dickson Street, lekki phase 1, lekki Lagos',
    },
  ];

  return (
    <section
      id='contact'
      className={`bg-light-gray ${isMobile ? 'py-12' : 'py-20'}`}
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className={`text-center ${isMobile ? 'mb-10' : 'mb-16'}`}>
          <h2
            className={`font-poppins font-bold text-primary-blue mb-4 ${
              isSmallMobile ? 'text-2xl' : isMobile ? 'text-3xl' : 'text-4xl'
            }`}
          >
            Start Your Journey to Reliable Power
          </h2>
          <p
            className={`text-gray-600 ${
              isSmallMobile ? 'text-base' : isMobile ? 'text-lg' : 'text-xl'
            }`}
          >
            Get a free consultation and customized quote
          </p>
        </div>

        <div
          className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2 gap-12'}`}
        >
          {/* Contact Information */}
          <div className={isMobile ? 'order-2' : ''}>
            <h3
              className={`font-poppins font-bold text-primary-blue mb-6 ${
                isSmallMobile ? 'text-xl' : 'text-2xl'
              }`}
            >
              Get In Touch
            </h3>
            <div
              className={`space-y-4 ${isMobile ? 'sm:space-y-6' : 'space-y-6'}`}
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const isPhone = info.title === 'Call Us';
                const isWhatsApp = info.title === 'WhatsApp';
                const isEmail = info.title === 'Email Us';

                return (
                  <div key={index} className='flex items-start sm:items-center'>
                    <div
                      className={`bg-accent-yellow rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                        isSmallMobile ? 'w-10 h-10' : 'w-12 h-12'
                      }`}
                    >
                      <IconComponent
                        className={`text-primary-blue ${
                          isSmallMobile ? 'h-5 w-5' : 'h-6 w-6'
                        }`}
                      />
                    </div>
                    <div className='min-w-0 flex-1'>
                      <div
                        className={`font-semibold ${
                          isSmallMobile ? 'text-sm' : 'text-base'
                        }`}
                      >
                        {info.title}
                      </div>
                      {isPhone ? (
                        <a
                          href='tel:+2349060033963'
                          className={`text-primary-blue hover:text-primary-blue/80 underline break-all ${
                            isSmallMobile ? 'text-sm' : 'text-base'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : isWhatsApp ? (
                        <a
                          href='https://wa.me/2349060033963'
                          target='_blank'
                          rel='noopener noreferrer'
                          className={`text-green-600 hover:text-green-700 underline ${
                            isSmallMobile ? 'text-sm' : 'text-base'
                          }`}
                        >
                          Chat with us
                        </a>
                      ) : isEmail ? (
                        <a
                          href='mailto:info@osinachirenewables.com'
                          className={`text-primary-blue hover:text-primary-blue/80 underline break-all ${
                            isSmallMobile ? 'text-sm' : 'text-base'
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div
                          className={`text-gray-600 ${
                            isSmallMobile ? 'text-sm' : 'text-base'
                          }`}
                        >
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`bg-white rounded-2xl shadow-lg ${
              isMobile ? 'p-6 order-1' : 'p-8'
            }`}
          >
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div
                className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2 gap-6'}`}
              >
                <div>
                  <Label
                    htmlFor='name'
                    className={`text-gray-700 mb-2 block ${
                      isSmallMobile
                        ? 'text-sm font-medium'
                        : 'text-sm font-semibold'
                    }`}
                  >
                    Full Name *
                  </Label>
                  <Input
                    id='name'
                    placeholder='John Doe'
                    {...form.register('name')}
                    className={`border-gray-300 focus:ring-primary-blue focus:border-primary-blue ${
                      isMobile ? 'h-12 text-base' : ''
                    }`}
                  />
                  {form.formState.errors.name && (
                    <p className='text-red-500 text-sm mt-1'>
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor='phone'
                    className={`text-gray-700 mb-2 block ${
                      isSmallMobile
                        ? 'text-sm font-medium'
                        : 'text-sm font-semibold'
                    }`}
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+234 xxx xxx xxxx'
                    {...form.register('phone')}
                    className={`border-gray-300 focus:ring-primary-blue focus:border-primary-blue ${
                      isMobile ? 'h-12 text-base' : ''
                    }`}
                  />
                  {form.formState.errors.phone && (
                    <p className='text-red-500 text-sm mt-1'>
                      {form.formState.errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label
                  htmlFor='email'
                  className={`text-gray-700 mb-2 block ${
                    isSmallMobile
                      ? 'text-sm font-medium'
                      : 'text-sm font-semibold'
                  }`}
                >
                  Email Address *
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john@example.com'
                  {...form.register('email')}
                  className={`border-gray-300 focus:ring-primary-blue focus:border-primary-blue ${
                    isMobile ? 'h-12 text-base' : ''
                  }`}
                />
                {form.formState.errors.email && (
                  <p className='text-red-500 text-sm mt-1'>
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor='service'
                  className={`text-gray-700 mb-2 block ${
                    isSmallMobile
                      ? 'text-sm font-medium'
                      : 'text-sm font-semibold'
                  }`}
                >
                  Service of Interest
                </Label>
                <Select
                  onValueChange={value => form.setValue('service', value)}
                  value={form.watch('service') || undefined}
                >
                  <SelectTrigger
                    className={`border-gray-300 focus:ring-primary-blue focus:border-primary-blue ${
                      isMobile ? 'h-12 text-base' : ''
                    }`}
                  >
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='generator-maintenance'>
                      Generator Parts & Maintenance
                    </SelectItem>
                    <SelectItem value='solar-inverter'>
                      Solar & Inverter Systems
                    </SelectItem>
                    <SelectItem value='energy-audit'>
                      Energy Audit & Consultancy
                    </SelectItem>
                    <SelectItem value='emergency-repair'>
                      Emergency Repair Services
                    </SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.service && (
                  <p className='text-red-500 text-sm mt-1'>
                    {form.formState.errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <Label
                  htmlFor='message'
                  className={`text-gray-700 mb-2 block ${
                    isSmallMobile
                      ? 'text-sm font-medium'
                      : 'text-sm font-semibold'
                  }`}
                >
                  Tell us about your power needs *
                </Label>
                <Textarea
                  id='message'
                  placeholder='Describe your current power challenges and what you hope to achieve...'
                  {...form.register('message')}
                  className={`border-gray-300 focus:ring-primary-blue focus:border-primary-blue resize-none ${
                    isMobile ? 'min-h-[120px] text-base' : 'min-h-[150px]'
                  }`}
                />
                {form.formState.errors.message && (
                  <p className='text-red-500 text-sm mt-1'>
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type='submit'
                disabled={isSubmitting}
                className={`w-full bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold transition-all duration-300 ${
                  isMobile ? 'h-12 text-base' : 'h-12 text-lg'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
