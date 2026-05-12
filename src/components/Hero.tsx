import { motion } from "motion/react";
import { Mail, MapPin, Phone, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Background Decorative Graphic */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-accent-orange/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 border" />
      
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium tracking-wide uppercase border rounded-full border-ink/20 text-ink-muted">
            Portfolio
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[0.9]">
            Bibin Abraham
          </h1>
          <h2 className="text-2xl sm:text-3xl text-ink-muted font-light mb-12">
            Digital Marketing Specialist &mdash; SEO & Performance Marketing
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
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-ink text-base transition-transform hover:scale-105"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/bibin-abraham-25a6641b5"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-black/5 hover:bg-black/10 border border-ink/10 text-ink transition-all hover:scale-105"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="mt-20 flex flex-wrap gap-8 text-ink-muted text-sm uppercase tracking-widest font-semibold"
        >
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            Kochi, Kerala, India
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            +91 7012522390
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
