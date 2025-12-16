import React from 'react';
import { ShaderAnimation } from './components/ui/shader-animation';
import { Button } from './components/ui/neon-button';
import { Instagram } from 'lucide-react';

export default function App() {
  const handleProjectClick = () => {
    console.log("Navigating to: Quero criar um projeto");
    // window.location.href = 'YOUR_PROJECT_LINK'; 
  };

  const handleCommunityClick = () => {
    console.log("Navigating to: Quero participar da comunidade");
    // window.location.href = 'YOUR_COMMUNITY_LINK';
  };

  return (
    <div className="relative w-full h-screen overflow-hidden text-white font-sans">
      
      {/* Background Layer - Shader */}
      <div className="absolute inset-0 z-0">
        <ShaderAnimation />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        
        {/* Action Buttons */}
        <div 
          className="w-full max-w-md space-y-6 opacity-0" 
          style={{ animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
        >
          
          <Button 
            onClick={handleProjectClick}
            className="w-full flex items-center justify-center gap-3 backdrop-blur-md"
            size="lg"
            neon={true}
          >
            <span className="font-medium tracking-wide">Quero criar um projeto</span>
          </Button>

          <Button 
            onClick={handleCommunityClick}
            className="w-full flex items-center justify-center gap-3 backdrop-blur-md"
            size="lg"
            neon={true}
          >
            <span className="font-medium tracking-wide">Quero participar da comunidade</span>
          </Button>

        </div>

        {/* Social Links Footer */}
        <div 
          className="absolute bottom-10 flex gap-6 text-white/50 opacity-0" 
          style={{ animation: 'fadeIn 1s ease-out 0.5s forwards' }}
        >
          <a 
            href="https://www.instagram.com/o.briansantos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>

      </div>
      
      {/* Custom Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}