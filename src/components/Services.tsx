import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/animated-card";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { 
  Code, 
  Palette, 
  PenTool, 
  Megaphone, 
  Smartphone, 
  Search,
  Video,
  Camera,
  Globe,
  Zap
} from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    features: ["React & Next.js", "E-commerce Solutions", "API Integration", "Performance Optimization"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Professional content that tells your brand story and connects with your audience across all platforms.",
    features: ["Copywriting", "Blog Content", "Social Media", "Brand Messaging"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility, engagement, and conversions for your business.",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media Marketing", "Email Marketing"]
  }
];

const loadingStates = [
  {
    text: "Creative & Fast Websites",
  },
  {
    text: "SEO-Friendly Code",
  },
  {
    text: "Fully Responsive Design",
  },
  {
    text: "Ongoing Support & Growth",
  },
];

const Services = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything your business needs to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              grow digitally
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions 
            that help your brand stand out and succeed online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3 h-full ${
                index === 0 || index === 3 ? "lg:col-span-2" : ""
              }`}>

              <GlowingEffect disabled={false} />
              <div className="w-10 h-10 border border-neutral-700 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-neutral-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="text-neutral-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>



        <MultiStepLoader loadingStates={loadingStates} loading={loading} setLoading={setLoading} duration={1500} />
      </div>
    </section>
  );
};

export default Services;