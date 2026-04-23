import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { faqs } from '../data/appData';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            Everything you need to know about starting your website project with me.
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-3xl border transition-all overflow-hidden ${
                activeIndex === index 
                ? 'glass border-primary/30 bg-primary/5' 
                : 'glass border-white/5 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                    activeIndex === index ? 'bg-primary text-white' : 'bg-white/5 text-gray-500 group-hover:text-white'
                  }`}>
                    <HelpCircle size={20} />
                  </div>
                  <span className={`text-xl font-bold transition-colors ${
                    activeIndex === index ? 'text-white' : 'text-gray-300'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? (
                    <Minus className="text-primary" />
                  ) : (
                    <Plus className="text-gray-500" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 pl-20 transition-all">
                      <p className="text-gray-400 leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-20 glass p-10 rounded-3xl border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl mb-2">Still have questions?</h3>
              <p className="text-gray-400">Can't find the answer you're looking for? Please chat with our friendly team.</p>
           </div>
           <a 
            href="https://wa.me/919316474039" 
            target="_blank" 
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-green-500/20"
           >
             Chat on WhatsApp
           </a>
        </div>
      </div>
    </div>
  );
}
