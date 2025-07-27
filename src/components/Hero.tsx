import { Button } from "@/components/ui/button";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  const [scope, animate] = useAnimate();
  const words = "Helping brands grow deeply in the digital space";
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 0.1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.span ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          if (word === "deeply") {
            return (
              <motion.span key={word + idx} className="opacity-0">
                <PointerHighlight>{word}</PointerHighlight>{" "}
              </motion.span>
            );
          }
          return (
            <motion.span key={word + idx} className="opacity-0">
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.span>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <WavyBackground className="absolute inset-0" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">

        
        <div className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground tracking-tight font-poppins">
          {renderWords()}
        </div>
        
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