import { motion } from "motion/react";
import { ArrowUpRight, Briefcase } from "lucide-react";

const experiences = [
  {
    role: "SEO Specialist",
    company: "Popular Hyundai",
    period: "March 2025 - Present",
    tier: "Tier 3",
    phase: "Strategic Specialization & Local Dominance",
    highlights: [
      "Manage and optimize Google Ads campaigns for automotive lead generation.",
      "Conduct weekly technical SEO audits via SEMrush and Screaming Frog (The Diagnostic Engine).",
      "Optimize high-intent keyword landing pages for measurable SERP ranking increases.",
      "Dominate local search results through aggressively managed Google Business Profile (GMB) optimizations."
    ]
  },
  {
    role: "SEO Specialist",
    company: "Reuads",
    period: "July 2024 - February 2025",
    tier: "Tier 2.5",
    phase: "Link-Building & Paid Search Integration",
    highlights: [
      "Conducted extensive keyword research using dedicated software and generated new keyword strategies.",
      "Developed and executed link-building strategies to enhance domain authority.",
      "Managed paid search campaigns alongside organic SEO efforts.",
      "Monitored website traffic, search results, and analytics."
    ]
  },
  {
    role: "SEO Analyst",
    company: "Code9 Technologies",
    period: "April 2023 - February 2025",
    tier: "Tier 2",
    phase: "Scale, Analytics & Organic Visibility",
    highlights: [
      "Achieved +35% increased organic visibility through strategic backlink acquisition.",
      "Optimized WordPress backend infrastructure, meta-tagging, and schema markup implementation.",
      "Led competitor gap analysis and keyword strategy.",
      "Mapped KPI tracking and monthly growth reporting via GA4 and Google Search Console."
    ]
  },
  {
    role: "Digital Marketing Executive",
    company: "CyberTec",
    period: "May 2021 - June 2022",
    tier: "Tier 1",
    phase: "Foundation & Cross-Channel Execution",
    highlights: [
      "Social Engine: Formulated and executed marketing strategies across Instagram, Facebook, and LinkedIn.",
      "Paid Engine: Assisted with Search Engine Marketing (SEM)—monitoring PPC campaigns and optimizing ad copy.",
      "Community Engine: Drafted engaging copy and managed direct community engagement to foster brand authority.",
      "Optimized webpages for mobile devices and carried out ongoing keyword research."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-24 bg-white/80 bg-grid-pattern relative">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-4xl md:text-5xl font-bold mb-16 tracking-tight flex items-center gap-4"
        >
          <div className="bg-ink p-3 rounded-2xl text-white">
            <Briefcase size={32} />
          </div>
          Career Trajectory
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row gap-8 items-start border-b border-ink/10 pb-12 last:border-0 bg-white/50 p-8 rounded-3xl hover:bg-white transition-colors hover:shadow-sm"
            >
              <div className="w-full md:w-1/3 pt-1 text-ink-muted">
                <p className="font-mono text-sm tracking-wider uppercase mb-2 bg-ink/5 inline-block px-3 py-1 rounded-full">{exp.period}</p>
                <div className="inline-block px-3 py-1 bg-accent-orange/10 text-accent-orange text-xs font-bold uppercase rounded-md mb-3">
                  {exp.tier} — {exp.phase}
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  {exp.company}
                  <ArrowUpRight size={20} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
                </h3>
                <p className="text-xl text-ink/80 font-medium mb-6">{exp.role}</p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="relative pl-6 text-ink-muted leading-relaxed text-sm md:text-base">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-accent-orange rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
