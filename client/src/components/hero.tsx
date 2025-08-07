import { ChevronDown, Camera, Code2, Aperture } from "lucide-react";

export default function Hero() {
  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="floating-elements">
        <div className="code-snippet" style={{ top: '10%', animationDelay: '0s' }}>const photo = captureMemory();</div>
        <div className="code-snippet" style={{ top: '30%', animationDelay: '5s' }}>function developImage() &#123; return magic; &#125;</div>
        <div className="code-snippet" style={{ top: '50%', animationDelay: '10s' }}>if (moment.isBeautiful) capture();</div>
        <div className="code-snippet" style={{ top: '70%', animationDelay: '15s' }}>const lens = new Camera(&#123; aperture: 'f/1.4' &#125;);</div>
        
        <Camera className="camera-float" size={48} style={{ top: '15%', right: '10%', animationDelay: '0s' }} />
        <Code2 className="camera-float" size={40} style={{ top: '60%', left: '5%', animationDelay: '2s' }} />
        <Aperture className="camera-float" size={44} style={{ top: '80%', right: '20%', animationDelay: '4s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Camera className="text-primary" size={48} />
          <Code2 className="text-secondary" size={48} />
        </div>
        <h2 className="text-4xl lg:text-6xl font-light text-charcoal mb-6 tracking-tight">
          Where <span className="text-primary font-medium">Photography</span>
          <br />
          Meets <span className="text-secondary font-medium">Code</span>
        </h2>
        <p className="text-xl text-warm-gray font-light leading-relaxed max-w-2xl mx-auto">
          Professional photographer and developer, crafting visual stories and digital experiences. 
          Combining the art of photography with the logic of code to create something extraordinary.
        </p>
        <div className="mt-10">
          <button 
            onClick={scrollToGallery}
            className="inline-flex items-center px-8 py-3 bg-charcoal text-white font-medium rounded-md hover:bg-gray-800 transition-colors duration-200"
          >
            View Portfolio
            <ChevronDown className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
