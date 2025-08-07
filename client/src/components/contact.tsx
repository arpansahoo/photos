import { Mail, Phone, Terminal, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50 relative">
      <div className="code-pattern absolute inset-0 opacity-20"></div>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Terminal className="text-primary" size={28} />
          <h3 className="text-3xl font-light text-charcoal">Let's Build Something</h3>
        </div>
        <p className="text-warm-gray font-light leading-relaxed mb-8">
          Whether you need stunning photography, custom web development, or a creative fusion of both, 
          I'd love to collaborate and bring your vision to life through pixels and code.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center mb-8">
          <a 
            href="mailto:arpan@photography.com" 
            className="inline-flex items-center px-8 py-3 bg-charcoal text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            Send Email
            <Mail className="ml-2 w-4 h-4" />
          </a>
          <a 
            href="tel:+1234567890" 
            className="inline-flex items-center px-8 py-3 border border-charcoal text-charcoal font-medium rounded-md hover:bg-charcoal hover:text-white transition-colors duration-200"
          >
            Call Now
            <Phone className="ml-2 w-4 h-4" />
          </a>
        </div>
        
        {/* Terminal-style contact info */}
        <div className="terminal-glow max-w-md mx-auto p-6 rounded-lg bg-gray-900 text-green-400 font-mono text-left text-sm">
          <div className="flex items-center gap-2 mb-3">
            <Terminal size={16} />
            <span className="text-green-300">arpan@terminal:~$</span>
          </div>
          <div className="space-y-2">
            <div><span className="text-blue-400">cat</span> contact.json</div>
            <div className="ml-2 text-gray-300">&#123;</div>
            <div className="ml-4"><span className="text-yellow-400">"email"</span>: <span className="text-green-400">"arpan@photography.com"</span>,</div>
            <div className="ml-4"><span className="text-yellow-400">"skills"</span>: [<span className="text-green-400">"photography", "react", "nodejs"</span>],</div>
            <div className="ml-4"><span className="text-yellow-400">"status"</span>: <span className="text-green-400">"available"</span></div>
            <div className="ml-2 text-gray-300">&#125;</div>
          </div>
        </div>
      </div>
    </section>
  );
}
