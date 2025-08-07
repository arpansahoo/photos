import { MapPin, Mail, Phone, Camera, Code2, Monitor, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-16 lg:py-24 relative">
      <div className="code-pattern absolute inset-0 opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Arpan Sahoo - Photographer" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-3xl font-light text-charcoal">About Arpan</h3>
              <div className="flex gap-2">
                <Camera className="text-primary" size={24} />
                <Code2 className="text-secondary" size={24} />
              </div>
            </div>
            <p className="text-warm-gray font-light leading-relaxed mb-6">
              I'm a medical student with a background in computer science. In everything I do, I strive to blend creativity with technical expertise. My professional dream is to leverage my insights as a future physician to inspire innovation in healthcare, but when I just want to have some fun, I love to pick up my camera. I use a Sony α7iii with a Zeiss 55mm lens and a Contax Zeiss 28mm.
            </p>
          </div>
        </div>
        {/* div with height 40px */}
        <div className="h-20"></div>
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
