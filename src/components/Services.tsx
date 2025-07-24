import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCard } from "@/components/ui/animated-card";
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
  },
  {
    icon: Video,
    title: "Video Production",
    description: "High-quality video content that captures attention and communicates your message effectively.",
    features: ["Commercial Videos", "Explainer Videos", "Social Media Content", "Live Streaming"]
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services that showcase your products and brand in the best light.",
    features: ["Product Photography", "Brand Photography", "Event Coverage", "Lifestyle Shoots"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/50">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;