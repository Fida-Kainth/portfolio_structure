'use client';

import { trackContactForm } from '@/lib/analytics';
import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.ok) {
        setSubmitStatus('success');
        setSubmitMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: '', email: '', subject: '', message: '' });
        trackContactForm('form_submit');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Failed to send message. Please try again.');
        trackContactForm('form_error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
      trackContactForm('form_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 gap-4 md:grid-cols-2">
      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleInputChange}
        className="rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-muted-foreground"
        placeholder="Your name"
        disabled={isSubmitting}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        className="rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-muted-foreground"
        placeholder="Email"
        disabled={isSubmitting}
      />
      <input
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleInputChange}
        className="rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-muted-foreground md:col-span-2"
        placeholder="Subject"
        disabled={isSubmitting}
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        rows={6}
        className="rounded-lg border border-white/10 bg-white/5 p-3 outline-none ring-0 placeholder:text-muted-foreground md:col-span-2"
        placeholder="How can I help?"
        disabled={isSubmitting}
      />
      <div className="md:col-span-2 flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full px-5 py-2 text-sm btn-primary"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        <a
          className="rounded-full btn-ghost px-5 py-2 text-sm"
          href="mailto:fidakainth@gmail.com"
          onClick={() => trackContactForm('email_link')}
        >
          Email Instead
        </a>
      </div>

      {/* Status Message - only show when there's a message */}
      {submitMessage && (
        <div
          className={`md:col-span-2 p-3 rounded-lg text-sm ${
            submitStatus === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/20'
              : 'bg-red-500/10 text-red-400 border border-red-500/20'
          }`}
        >
          {submitMessage}
        </div>
      )}
    </form>
  );
}
