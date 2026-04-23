import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, ShieldCheck, Zap, Laptop } from 'lucide-react';
import { submitLeadForm } from '../lib/leadForm';

export default function FreeDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    phone: '',
    city: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setSubmitError('');

    try {
      await submitLeadForm('New Free Demo Request - ommendapara.com', {
        businessName: formData.businessName,
        businessType: formData.businessType,
        phone: formData.phone,
        city: formData.city
      });

      setIsSuccess(true);
      setIsSubmitting(false);
      setFormData({
        businessName: '',
        businessType: '',
        phone: '',
        city: ''
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setSubmitError('Form submit thai nathi. Krupaya fari thi try karo.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
            Get Free <span className="text-gradient">Website Demo</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Curious how your business would look online? Fill the form and I'll create a free layout demo for your business.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-white mb-8">What do you get?</h2>
            <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0 text-blue-400">
                    <Laptop size={32} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl mb-2">Custom Mockup</h4>
                   <p className="text-gray-500">I'll design a preliminary layout based on your business industry and target audience.</p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0 text-green-400">
                    <Zap size={32} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl mb-2">Feature Consultation</h4>
                   <p className="text-gray-500">A detailed breakdown of which features (booking, ecommerce, etc.) would benefit you most.</p>
                 </div>
               </div>

               <div className="flex gap-6">
                 <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center shrink-0 text-purple-400">
                    <ShieldCheck size={32} />
                 </div>
                 <div>
                   <h4 className="text-white font-bold text-xl mb-2">No Obligation</h4>
                   <p className="text-gray-500">The demo is completely free. If you don't like it, you don't have to pay a single Rupee.</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="glass p-10 md:p-12 rounded-[3rem] border-white/10 relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[60px]" />
             
             {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                     <CheckCircle2 size={48} className="text-green-500" />
                  </div>
                  <h2 className="text-3xl font-black text-white mb-4">Request Received!</h2>
                  <p className="text-gray-400 text-lg mb-8">Your free demo request has been received. I will contact you shortly.</p>
                </motion.div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Business Name</label>
                    <input
                      required
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g., The Grill House"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-1">Business Type</label>
                    <select
                      required
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all appearance-none"
                    >
                      <option value="" disabled className="bg-gray-900">Select Type</option>
                      <option value="Cafe/Restaurant" className="bg-gray-900">Cafe/Restaurant</option>
                      <option value="Gym/Fitness" className="bg-gray-900">Gym/Fitness</option>
                      <option value="Salon/Spa" className="bg-gray-900">Salon/Spa</option>
                      <option value="Game Zone" className="bg-gray-900">Game Zone</option>
                      <option value="Retail Store" className="bg-gray-900">Retail Store</option>
                      <option value="Clinic/Medical" className="bg-gray-900">Clinic/Medical</option>
                      <option value="Other" className="bg-gray-900">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-1">City</label>
                      <input
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Surat"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-70 mt-4"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Request Demo Now
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
  );
}
