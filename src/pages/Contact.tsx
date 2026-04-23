import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { submitLeadForm } from '../lib/leadForm';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    const plan = searchParams.get('plan');
    if (plan) {
      setFormData(prev => ({ ...prev, serviceNeeded: `${plan} Plan` }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setSubmitError('');

    try {
      await submitLeadForm('New Contact Enquiry - ommendapara.com', {
        fullName: formData.fullName,
        businessName: formData.businessName,
        email: formData.email,
        phone: formData.phone,
        serviceNeeded: formData.serviceNeeded,
        budget: formData.budget,
        message: formData.message
      });

      setIsSuccess(true);
      setIsSubmitting(false);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        serviceNeeded: '',
        budget: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setSubmitError('Form submit thai nathi. Krupaya fari thi try karo.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Let's <span className="text-gradient">Connect</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind? Fill out the form below or reach out directly through WhatsApp, Email or Phone.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Phone />
              </div>
              <h3 className="text-white font-bold mb-2">Phone</h3>
              <a href="tel:+919316474039" className="text-gray-400 hover:text-white transition-colors">+91 98765 43210</a>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                <MessageCircle />
              </div>
              <h3 className="text-white font-bold mb-2">WhatsApp</h3>
              <a href="https://wa.me/919316474039" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">Chat on WhatsApp</a>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail />
              </div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <a href="mailto:ommendapara900@gmail.com" className="text-gray-400 hover:text-white transition-colors">ommendapara900@gmail.com</a>
            </div>

            <div className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all">
                <MapPin />
              </div>
              <h3 className="text-white font-bold mb-2">Location</h3>
              <p className="text-gray-400">Surat, Gujarat, India</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
             <div className="glass p-10 md:p-12 rounded-[2.5rem] border-white/5">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                       <CheckCircle2 size={48} className="text-green-500" />
                    </div>
                    <h2 className="text-3xl font-black text-white mb-4">Message Sent!</h2>
                    <p className="text-gray-400 text-lg">Thank you for your enquiry. I will get back to you within 24 hours.</p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="mt-10 text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Om Mendapara"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Business Name</label>
                        <input
                          required
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your Business"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                        <input
                          required
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Service Needed</label>
                        <select
                          required
                          name="serviceNeeded"
                          value={formData.serviceNeeded}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all appearance-none"
                        >
                          <option value="" disabled className="bg-gray-900">Select Service</option>
                          <option value="Starter Plan" className="bg-gray-900">Starter Plan</option>
                          <option value="Growth Plan" className="bg-gray-900">Growth Plan</option>
                          <option value="Premium Plan" className="bg-gray-900">Premium Plan</option>
                          <option value="Custom Website" className="bg-gray-900">Custom Website</option>
                          <option value="Booking System" className="bg-gray-900">Booking System</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400 ml-1">Estimated Budget</label>
                        <select
                          required
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all appearance-none"
                        >
                          <option value="" disabled className="bg-gray-900">Select Budget</option>
                          <option value="5k-8k" className="bg-gray-900">₹5,000 - ₹8,000</option>
                          <option value="8k-12k" className="bg-gray-900">₹8,000 - ₹12,000</option>
                          <option value="12k+" className="bg-gray-900">₹12,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-1">Project Details</label>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your business goals..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-black py-5 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending Enquiry...
                        </>
                      ) : (
                        <>
                          Send Enquiry
                          <Send size={20} />
                        </>
                      )}
                    </button>

                    {submitError ? (
                      <p className="text-red-400 text-sm text-center">{submitError}</p>
                    ) : null}
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
