import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white/50 border-t border-ink/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[16px] border-accent-orange text-accent-orange flex items-center justify-center text-center p-8 relative">
             <div className="text-4xl sm:text-5xl font-bold leading-tight">
               4+ Years<br/>
               <span className="text-ink">of Data-Driven Growth</span>
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
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5">
            <h3 className="text-2xl font-bold mb-2">The Engine</h3>
            <p className="text-ink-muted">
              Architecting scalable digital strategies that drive measurable organic growth and high-budget Google AdWords performance.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5">
            <h3 className="text-2xl font-bold mb-2">The Stack</h3>
            <p className="text-ink-muted">
              Technical mastery spanning complex WordPress backends, data analytics, and comprehensive search engine optimization.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border border-ink/5">
            <h3 className="text-2xl font-bold mb-2">The Validation</h3>
            <p className="text-ink-muted">
              Certified Sprinklr Campaign Manager Pro and Google Digital Garage professional.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
