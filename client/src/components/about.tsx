import { MapPin, Mail, Phone, Camera, Code2, Monitor } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24 relative">
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
              I'm a photographer who codes and a developer who captures moments. With over 8 years in both photography and software development, I bring a unique perspective that blends artistic vision with technical precision.
            </p>
            <p className="text-warm-gray font-light leading-relaxed mb-6">
              My photography work spans portraits, landscapes, and lifestyle imagery, while my development expertise includes full-stack web applications, digital art tools, and creative technology solutions.
            </p>
            <p className="text-warm-gray font-light leading-relaxed mb-8">
              Whether I'm debugging code at 3 AM or chasing golden hour light, I'm driven by the same passion: creating something meaningful from nothing but vision and skill.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="terminal-glow p-4 rounded-lg text-center">
                <Camera className="mx-auto mb-2 text-primary" size={32} />
                <h4 className="font-medium text-charcoal">Photography</h4>
                <p className="text-sm text-warm-gray mt-1">8+ years experience</p>
              </div>
              <div className="terminal-glow p-4 rounded-lg text-center">
                <Code2 className="mx-auto mb-2 text-secondary" size={32} />
                <h4 className="font-medium text-charcoal">Development</h4>
                <p className="text-sm text-warm-gray mt-1">Full-stack expertise</p>
              </div>
              <div className="terminal-glow p-4 rounded-lg text-center">
                <Monitor className="mx-auto mb-2 text-green-600" size={32} />
                <h4 className="font-medium text-charcoal">Creative Tech</h4>
                <p className="text-sm text-warm-gray mt-1">Digital innovation</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-warm-gray">
                <MapPin className="w-5 h-5 mr-3 text-charcoal" />
                San Francisco, CA
              </div>
              <div className="flex items-center text-warm-gray">
                <Mail className="w-5 h-5 mr-3 text-charcoal" />
                arpan@photography.com
              </div>
              <div className="flex items-center text-warm-gray">
                <Phone className="w-5 h-5 mr-3 text-charcoal" />
                Available for bookings
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
