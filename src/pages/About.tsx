import { motion } from 'motion/react';
import { Target, MessageSquare, Heart, Rocket, User, Award, Globe, Users, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white mb-6"
          >
            Meet <span className="text-gradient">Our Team</span>
          </motion.h1>
          <p className="text-gray-400 max-w-xl mx-auto text-lg leading-relaxed">
            A passionate digital team from Surat helping local businesses grow through premium websites, lead generation and smart customer communication.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass border-white/10 p-5 md:p-6">
              <div className="h-full grid grid-rows-2 gap-4">


                <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
                  <img
                    src="/assets/images/om.jpeg"
                    alt="Team member Om Mendapara"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">Om Mendapara</p>
                    <p className="text-gray-200 text-xs">Founder & Web Developer</p>
                  </div>
                </div>


                <div className="relative rounded-[2rem] overflow-hidden border border-white/10">
                  <img
                    src="/assets/images/purv.jpeg"
                    alt="Team member Purv Vasoya"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-sm uppercase tracking-wider">Purv Vasoya</p>
                    <p className="text-gray-200 text-xs">Lead Manager & Client Relations</p>
                  </div>
                </div>

                {/* <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent p-6 flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-4">
                    <Users size={22} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wider">Purv Vasoya</p>
                    <p className="text-gray-300 text-xs mb-3">Lead Manager & Client Relations</p>
                    <p className="text-gray-400 text-sm leading-relaxed">Driving lead handling, follow-ups and client communication to convert opportunities into growth.</p>
                  </div>
                </div> */}


              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl border-white/10 hidden md:block max-w-[280px]">
              <p className="text-gray-300 italic text-sm leading-relaxed mb-4">
                "Strong websites + strong communication = real business growth."
              </p>
              <div className="font-bold text-white uppercase tracking-widest text-xs ">— Om & Purv</div>
            </div>
          </motion.div>

          <div>
             <h2 className="text-4xl font-black text-white mb-8">Our Story</h2>
             <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                We started with one clear mission - help local businesses compete in the digital world.
             </p>
             <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Om Mendapara focuses on designing premium websites, creating modern user experiences and building online systems that generate trust and bookings.
             </p>
             <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                Purv Vasoya manages lead generation, client communication, follow-ups and customer relationship handling to ensure every opportunity turns into growth.
             </p>
             <p className="text-gray-400 leading-relaxed mb-10 text-lg">
                Together, we combine design + sales execution to help businesses grow faster.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div className="p-6 glass rounded-2xl border-white/5">
                 <div className="text-primary text-3xl font-black mb-2">20+</div>
                 <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Projects Delivered</div>
               </div>
               <div className="p-6 glass rounded-2xl border-white/5">
                 <div className="text-primary text-3xl font-black mb-2">95%</div>
                 <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Client Satisfaction</div>
               </div>
               <div className="p-6 glass rounded-2xl border-white/5">
                 <div className="text-primary text-3xl font-black mb-2">2</div>
                 <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Growing Teamwork</div>
               </div>
             </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-white text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Results Driven', content: 'We focus on real outcomes like more leads, more trust and more bookings.' },
              { icon: MessageSquare, title: 'Smart Communication', content: 'Fast replies, proper follow-ups and clear client handling every time.' },
              { icon: Heart, title: 'Local Growth', content: 'We love helping Surat and Gujarat businesses grow digitally.' }
            ].map((value, i) => (
              <div key={i} className="glass p-10 rounded-[2.5rem] border-white/5 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary">
                  <value.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-32">
          <h2 className="text-4xl font-black text-white text-center mb-16">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Om Mendapara',
                role: 'Founder & Web Developer',
                responsibilities: ['Website Design', 'Frontend Development', 'UI/UX', 'Business Systems', 'Client Solutions'],
              },
              {
                name: 'Purv Vasoya',
                role: 'Lead Manager & Client Relations',
                responsibilities: ['WhatsApp Handling', 'Lead Generation', 'Follow-ups', 'Client Support', 'Sales Coordination'],
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true, amount: 0.2 }}
                className="glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Users size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-7">{member.role}</p>
                <div className="space-y-3">
                  {member.responsibilities.map((task) => (
                    <div key={task} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-4xl font-black text-white text-center mb-16">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-12 relative before:absolute before:left-[-1px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
             {[
               { year: '2023', title: 'The Beginning', content: 'Started helping small businesses with landing pages and online presence.', icon: User },
               { year: '2024', title: 'Local Partnerships', content: 'Worked with local brands, gyms, cafes and growing businesses.', icon: Award },
               { year: '2025', title: 'Premium Growth', content: 'Expanded into premium websites, booking systems and lead-focused design.', icon: Globe },
               { year: 'Today', title: 'Building Bigger Vision', content: 'Helping businesses scale with websites + lead systems + client communication.', icon: Rocket },
             ].map((item, i) => (
               <div key={i} className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse text-right'}`}>
                 <div className="hidden md:block w-1/2" />
                 <div className="absolute left-[3px] md:left-1/2 -translate-x-1/2 w-10 h-10 bg-surface border-4 border-primary rounded-full z-10 flex items-center justify-center">
                   <item.icon size={16} className="text-primary" />
                 </div>
                 <div className="md:w-1/2 pt-1 pl-12 md:pl-0 md:px-12">
                   <div className="text-primary font-black mb-1">{item.year}</div>
                   <h4 className="text-2xl font-bold text-white mb-3">{item.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.content}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
}
