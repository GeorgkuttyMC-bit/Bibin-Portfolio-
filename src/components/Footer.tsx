import { Mail, Phone, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 text-center bg-bg-primary border-t border-ink/10">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-ink">
          Let's build your<br />growth engine.
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+917012522390" className="flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-ink/10 shadow-sm hover:shadow-md transition-shadow">
            <Phone size={18} className="text-ink-muted" />
            <span className="font-medium">+91 7012522390</span>
          </a>
          <a href="mailto:bibinabraham070@gmail.com" className="flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-ink/10 shadow-sm hover:shadow-md transition-shadow">
            <Mail size={18} className="text-ink-muted" />
            <span className="font-medium">bibinabraham070@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/bibin-abraham-25a6641b5" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-4 rounded-full bg-white border border-ink/10 shadow-sm hover:shadow-md transition-shadow">
            <Linkedin size={18} className="text-ink-muted" />
            <span className="font-medium">/in/bibin-abraham</span>
          </a>
        </div>
        
        <div className="pt-16 border-t border-ink/5 text-sm text-ink-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Bibin Abraham. All rights reserved.</p>
          <div className="flex gap-4">
            <span>English</span>
            <span className="text-ink/20">|</span>
            <span>Malayalam</span>
            <span className="text-ink/20">|</span>
            <span>Hindi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
