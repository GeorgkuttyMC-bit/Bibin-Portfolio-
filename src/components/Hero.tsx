import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin, ExternalLink, TrendingUp, BarChart3, Target } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 overflow-hidden bg-dot-pattern">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-orange/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 border" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-4xl pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium tracking-wide uppercase border rounded-full border-ink/20 text-ink-muted bg-white/50 backdrop-blur-sm">
              <Target size={14} className="text-accent-orange" />
              Portfolio
            </div>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
              Bibin Abraham
            </h1>
            <h2 className="text-2xl sm:text-3xl text-ink-muted font-light mb-12 flex items-center gap-3">
              <TrendingUp className="text-accent-blue" size={28} />
              Digital Marketing Specialist
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm font-medium"
          >
            <a
              href="mailto:bibinabraham070@gmail.com"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-white transition-transform hover:scale-105"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/bibin-abraham-25a6641b5"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-ink/10 text-ink shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.6, delay: 0.6 }}
             className="mt-16 flex flex-wrap gap-8 text-ink-muted text-sm uppercase tracking-widest font-semibold"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-accent-orange" />
              Kochi, Kerala, India
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-accent-green" />
              +91 7012522390
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-accent-blue/20 rounded-3xl blur-3xl transform -rotate-6 scale-105 z-0" />
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3" 
            alt="Digital Marketing Analytics Dashboard" 
            className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl border border-white/20"
          />
          
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
            <div className="bg-accent-green/10 p-3 rounded-lg text-accent-green">
              <BarChart3 size={24} />
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase tracking-wider font-bold">SEO Growth</p>
              <p className="text-xl font-bold text-ink">+124%</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-6 sm:left-12 lg:left-24 flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-ink-muted"
      >
        <div className="w-8 h-[1px] bg-ink/20" />
        Scroll to explore
      </motion.div>
    </section>
  );
}
