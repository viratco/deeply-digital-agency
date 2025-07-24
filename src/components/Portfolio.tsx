import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import portfolioEcommerce from "@/assets/portfolio-ecommerce.jpg";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioAgency from "@/assets/portfolio-agency.jpg";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Complete e-commerce solution with custom design, payment integration, and inventory management.",
    image: portfolioEcommerce,
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    results: ["300% increase in sales", "50% faster load times", "95% customer satisfaction"]
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description: "Modern dashboard interface for a fintech startup with complex data visualization and user management.",
    image: portfolioSaas,
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    results: ["40% better user engagement", "Raised $2M Series A", "99.9% uptime"]
  },
  {
    title: "Creative Agency Website",
    category: "Full Stack",
    description: "Award-winning website for a creative agency featuring animations, portfolio showcase, and CMS integration.",
    image: portfolioAgency,
    tech: ["Next.js", "Framer Motion", "Sanity", "Vercel"],
    results: ["200% more inquiries", "Featured on Awwwards", "10x social engagement"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm text-accent font-medium">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects that{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              drive results
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence 
            and achieve measurable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-card transition-all duration-300 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;