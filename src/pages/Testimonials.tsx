import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/appData';

export default function Testimonials() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Client <span className="text-gradient">Success Stories</span>
          </motion.h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I take pride in delivering results for my clients. Here's what they have to say about working with me.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 flex flex-col relative group"
            >
              <div className="absolute top-8 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <div className="flex-grow relative z-10">
                <p className="text-gray-300 italic mb-10 leading-relaxed text-lg">
                  "{testi.content}"
                </p>
              </div>

              <div className="flex items-center gap-5 relative z-10 border-t border-white/5 pt-8">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-primary/20">
                  {testi.name[0]}
                </div>
                <div>
                  <div className="text-white font-bold text-lg">{testi.name}</div>
                  <div className="text-primary text-sm font-semibold">{testi.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-32 text-center bg-surface-lighter p-16 rounded-[3rem] border border-white/5">
           <h2 className="text-3xl font-black text-white mb-6">Want to be my next success story?</h2>
           <p className="text-gray-400 mb-10 max-w-xl mx-auto">
             Let's build a website that you'll be proud to show your customers.
           </p>
           <button className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black text-lg shadow-xl shadow-primary/20 transition-all">
             Start Your Project
           </button>
        </div>
      </div>
    </div>
  );
}
