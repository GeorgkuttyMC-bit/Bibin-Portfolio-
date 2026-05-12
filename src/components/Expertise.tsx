import { motion } from "motion/react";
import { Search, PieChart, Share2, Code2 } from "lucide-react";

const skills = [
  {
    category: "Search Engine Optimization",
    color: "bg-[#d9534f]", // Muted Red/Orange for variety
    icon: <Search size={24} />,
    items: ["Google Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "Keyword Research"]
  },
  {
    category: "Analytics & Data",
    color: "bg-[#1d4ed8]", // Blue
    icon: <PieChart size={24} />,
    items: ["Google Analytics (GA4)", "Looker Studio", "Sprinklr"]
  },
  {
    category: "Performance & Social",
    color: "bg-[#15803d]", // Green
    icon: <Share2 size={24} />,
    items: ["Google AdWords", "Meta Ads Manager", "Facebook Business Suite", "LinkedIn Campaign Manager"]
  },
  {
    category: "Technical & CMS",
    color: "bg-[#1f2937]", // Dark gray
    icon: <Code2 size={24} />,
    items: ["WordPress", "Basic HTML/CSS", "Schema Markup"]
  }
];

export default function Expertise() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-dot-pattern">
      <div className="max-w-7xl mx-auto border-t border-ink/10 pt-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            The T-Shaped Marketer
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skillGroup, idx) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className={`${skillGroup.color} text-white font-bold text-xl md:text-2xl py-6 px-6 rounded-2xl shadow-lg w-full flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform`}>
                {skillGroup.icon}
                {skillGroup.category}
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map(item => (
                  <span key={item} className="bg-white border border-ink/10 text-ink px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:border-ink/20 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
