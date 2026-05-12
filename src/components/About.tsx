import { motion } from "motion/react";
import { Zap, Code, Award, Activity } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white/50 border-t border-ink/5 relative overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -z-10 -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
           className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-ink/10 mix-blend-multiply z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
              alt="Data Analytics Graphic" 
              className="object-cover w-full h-full"
            />
            {/* Overlay Badge */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="w-56 h-56 bg-white/90 backdrop-blur-md rounded-full border-8 border-accent-orange text-accent-orange flex flex-col items-center justify-center text-center p-6 shadow-xl">
                 <Activity size={32} className="mb-2" />
                 <div className="text-3xl font-bold leading-tight">
                   4+ Years<br/>
                   <span className="text-ink text-sm font-medium">of Data-Driven Growth</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
           className="space-y-6"
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-accent-orange/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-accent-orange/10 p-3 rounded-lg text-accent-orange shrink-0">
                <Zap size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Engine</h3>
                <p className="text-ink-muted">
                  Architecting scalable digital strategies that drive measurable organic growth and high-budget Google AdWords performance.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-accent-blue/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-accent-blue/10 p-3 rounded-lg text-accent-blue shrink-0">
                <Code size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Stack</h3>
                <p className="text-ink-muted">
                  Technical mastery spanning complex WordPress backends, data analytics, and comprehensive search engine optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-24 h-24 bg-accent-green/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-accent-green/10 p-3 rounded-lg text-accent-green shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">The Validation</h3>
                <p className="text-ink-muted">
                  Certified Sprinklr Campaign Manager Pro and Google Digital Garage professional.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
