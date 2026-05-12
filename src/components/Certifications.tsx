import { motion } from "motion/react";
import { ShieldCheck, CheckCircle } from "lucide-react";

const certifications = [
  { name: "Sprinklr Campaign Manager Pro", org: "Credential ID: mqtYjeZRf", color: "bg-[#1f5a7a]" }, // slide color blue
  { name: "Google Ads Search Certification", org: "Google", color: "bg-[#d9531e]" }, // slide color orange
  { name: "HubSpot Content Marketing", org: "HubSpot Academy", color: "bg-[#337a3c]" }, // slide color green
  { name: "Google Digital Garage", org: "Fundamentals of Digital Marketing", color: "bg-[#d97c1e]" }, // slide color lighter orange
  { name: "Inmakes Masterclass", org: "Intensive training across 20+ digital tools for SEM, SEO, and Online Advertising.", color: "bg-[#1f2937]" }
];

export default function Certifications() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white/50 border-t border-ink/5 bg-grid-pattern relative">
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-accent-green/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center flex items-center justify-center gap-4"
        >
          <div className="bg-ink p-3 rounded-2xl text-white">
            <ShieldCheck size={32} />
          </div>
          Certification Vault
        </motion.h2>

        <div className="flex flex-col gap-4 items-center">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex w-full max-w-3xl shadow-sm rounded-l-md rounded-r-xl overflow-hidden hover:-translate-y-1 transition-transform bg-white border border-ink/5 hover:shadow-md"
            >
              <div className={`${cert.color} w-16 md:w-20 flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                {idx + 1}
              </div>
              <div className="p-4 md:p-6 flex-grow flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between">
                <span className="font-bold text-lg md:text-xl text-ink flex items-center gap-2">
                  <CheckCircle size={18} className="text-accent-green" />
                  {cert.name}
                </span>
                <span className="text-ink-muted text-sm border-l-0 md:border-l border-ink/20 pt-2 md:pt-0 md:pl-4 max-w-sm">{cert.org}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
