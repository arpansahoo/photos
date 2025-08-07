import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // scroll a few pixels above the section to account for fixed header
      const offset = 40; // adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      // Alternatively, you can use element.scrollIntoView
      // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // if you want to use scrollIntoView, you can uncomment the line below
      //  
      // element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div>
            <h1 className="text-2xl font-bold text-charcoal tracking-tight">Arpan Sahoo</h1>
            <p className="text-warm-gray text-sm font-light">Photography</p>
          </div>
          
          <nav className="hidden sm:flex space-x-8">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-warm-gray hover:text-charcoal transition-colors duration-200 font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="text-warm-gray hover:text-charcoal transition-colors duration-200 font-medium"
            >
              Videos
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-warm-gray hover:text-charcoal transition-colors duration-200 font-medium"
            >
              About
            </button>
            {/* <button 
              onClick={() => scrollToSection('contact')}
              className="text-warm-gray hover:text-charcoal transition-colors duration-200 font-medium"
            >
              Contact
            </button> */}
          </nav>
          
        </div>
        
      </div>
    </header>
  );
}
