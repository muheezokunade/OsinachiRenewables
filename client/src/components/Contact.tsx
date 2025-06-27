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
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/lib/analytics';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  ];

  return (
    <section id='contact' className='py-20 bg-light-gray'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='font-poppins font-bold text-4xl text-primary-blue mb-4'>
            Start Your Journey to Reliable Power
          </h2>
          <p className='text-xl text-gray-600'>
            Get a free consultation and customized quote
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12'>
          <div>
            <h3 className='font-poppins font-bold text-2xl text-primary-blue mb-6'>
              Get In Touch
            </h3>
            <div className='space-y-6'>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                const isPhone = info.title === 'Call Us';
                const isWhatsApp = info.title === 'WhatsApp';
                const isEmail = info.title === 'Email Us';

                return (
                  <div key={index} className='flex items-center'>
                    <div className='bg-accent-yellow w-12 h-12 rounded-full flex items-center justify-center mr-4'>
                      <IconComponent className='text-primary-blue h-6 w-6' />
                    </div>
                    <div>
                      <div className='font-semibold'>{info.title}</div>
                      {isPhone ? (
                        <a
                          href='tel:+2349060033963'
                          className='text-primary-blue hover:text-primary-blue/80 underline'
                        >
                          {info.value}
                        </a>
                      ) : isWhatsApp ? (
                        <a
                          href='https://wa.me/2349060033963'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-green-600 hover:text-green-700 underline'
                        >
                          Chat with us
                        </a>
                      ) : isEmail ? (
                        <a
                          href='mailto:info@osinachirenewables.com'
                          className='text-primary-blue hover:text-primary-blue/80 underline'
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className='text-gray-600'>{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='bg-white rounded-2xl p-8 shadow-lg'>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Label
                    htmlFor='name'
                    className='text-sm font-semibold text-gray-700 mb-2'
                  >
                    Full Name *
                  </Label>
                  <Input
                    id='name'
                    placeholder='John Doe'
                    {...form.register('name')}
                    className='border-gray-300 focus:ring-primary-blue focus:border-primary-blue'
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
                    className='text-sm font-semibold text-gray-700 mb-2'
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id='phone'
                    type='tel'
                    placeholder='+234 xxx xxx xxxx'
                    {...form.register('phone')}
                    className='border-gray-300 focus:ring-primary-blue focus:border-primary-blue'
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
                  className='text-sm font-semibold text-gray-700 mb-2'
                >
                  Email Address *
                </Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='john@example.com'
                  {...form.register('email')}
                  className='border-gray-300 focus:ring-primary-blue focus:border-primary-blue'
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
                  className='text-sm font-semibold text-gray-700 mb-2'
                >
                  Service of Interest
                </Label>
                <Select
                  onValueChange={value => form.setValue('service', value)}
                >
                  <SelectTrigger className='border-gray-300 focus:ring-primary-blue'>
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='generator-maintenance'>
                      Generator Parts & Maintenance
                    </SelectItem>
                    <SelectItem value='solar-inverter'>
                      Custom Solar & Inverter Systems
                    </SelectItem>
                    <SelectItem value='energy-audit'>
                      Energy Audit & Consultancy
                    </SelectItem>
                    <SelectItem value='iot-monitoring'>
                      IoT Monitoring & Management
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor='message'
                  className='text-sm font-semibold text-gray-700 mb-2'
                >
                  Tell us about your power needs
                </Label>
                <Textarea
                  id='message'
                  rows={4}
                  placeholder='Describe your current power challenges and requirements...'
                  {...form.register('message')}
                  className='border-gray-300 focus:ring-primary-blue focus:border-primary-blue'
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
                className='w-full bg-accent-yellow text-primary-blue hover:bg-accent-yellow/90 font-semibold text-lg py-4'
              >
                {isSubmitting ? 'Sending...' : 'Request Free Consultation'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
