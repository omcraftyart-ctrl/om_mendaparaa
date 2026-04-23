import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, Layout, Zap, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { projects, testimonials, services } from '../data/appData';

const stats = [
  { label: 'Projects Completed', value: '20+' , icon: Layout },
  { label: 'Responsive Design', value: '100%', icon: Zap },
  { label: 'On-time Delivery', value: 'Fast', icon: Rocket },
];

const industries = [
  'Local Businesses', 'Game Zones', 'Cafes', 'Turf Bookings', 'Gyms', 'Salons', 'Clinics', 'Startups'
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6 text-primary text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              I Build Websites That <span className="text-gradient">Grow Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
              Premium websites for businesses that want more trust, more leads, and more bookings. Designed with professional aesthetics and conversion in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/free-demo"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Get Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2"
              >
                View Portfolio
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden glass border-white/10 shadow-2xl scale-110 lg:translate-x-12">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Website Dashboard Preview" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-2xl border-white/10 animate-float">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Zap className="text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">98/100</div>
                    <div className="text-gray-400 text-xs">Speed Score</div>
                  </div>
               </div>
               <div className="h-2 w-32 bg-gray-800 rounded-full overflow-hidden">
                 <div className="h-full w-[95%] bg-green-500 rounded-full" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-surface-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Services I Provide</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From local business showcases to complex booking systems, I deliver digital solutions that drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/contact" className="text-primary text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                  Get Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="text-white font-bold underline underline-offset-8 hover:text-primary transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-16">Industries Served</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span key={industry} className="px-8 py-4 glass rounded-full text-white font-semibold border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="rounded-3xl overflow-hidden glass aspect-square border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" 
                alt="Workspace" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 glass p-8 rounded-2xl border-white/10 animate-float hidden md:block">
              <div className="text-primary text-4xl font-black mb-1">5.0</div>
              <div className="flex gap-1 mb-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <div className="text-white text-sm font-bold">Client Rating</div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Why Choose Me?</h2>
            <div className="space-y-6">
              {[
                { title: 'Modern Professional Design', desc: 'I don\'t use generic templates. Every site is crafted to fit your brand identity.' },
                { title: 'Conversion Focused', desc: 'My websites aren\'t just pretty; they are optimized to get you more calls and bookings.' },
                { title: 'Mobile First Approach', desc: 'With 70%+ of users on mobile, your site will look perfect on every screen size.' },
                { title: 'Clear Communication', desc: 'No technical jargon. I keep you updated at every step of the development process.' }
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 px-6 bg-surface-lighter">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Latest Work</h2>
              <p className="text-gray-400 max-w-xl">
                Take a look at some of the premium websites I've recently built for local businesses.
              </p>
            </div>
            <Link to="/portfolio" className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 group">
              View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden glass border-white/5"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 relative">
                  <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6">What My Clients Say</h2>
             <div className="flex items-center justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
             </div>
             <p className="text-gray-400">Trusted by 20+ business owners across Gujarat.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testi) => (
              <div key={testi.id} className="glass p-10 rounded-3xl border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed">"{testi.content}"</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">
                    {testi.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{testi.name}</div>
                    <div className="text-gray-500 text-sm">{testi.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-primary">
         <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to grow your business?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">
              Stop losing potential customers to competitors with better websites. Let's build your premium digital home today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg hover:bg-gray-100 transition-all shadow-xl">
                 Contact Me Now
               </Link>
               <Link to="/portfolio" className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                 See More Work
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
