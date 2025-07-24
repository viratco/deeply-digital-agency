import { Button } from "@/components/ui/button";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
      
      {/* Background Beams */}
      <BackgroundBeams className="opacity-60" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-card/50 backdrop-blur-sm border border-border">
          <span className="text-sm text-muted-foreground">🚀 Trusted by 100+ brands worldwide</span>
        </div>
        
        <TextGenerateEffect 
          words="Helping brands grow deeply in the digital space"
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        />
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          We're a full-service digital agency based in Greater Noida, Uttar Pradesh, 
          specializing in web development, design, content creation, and digital marketing that drives real results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="outline" size="lg" className="bg-card/50 backdrop-blur-sm border-border hover:bg-card/70">
            <Play className="w-5 h-5 mr-2" />
            Watch Our Story
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">100+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">5★</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;