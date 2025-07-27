import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ExternalLink, ArrowRight } from "lucide-react";
import portfolioFashion from "@/assets/portfolio-fashion.jpg";
import portfolioFashionInside from "@/assets/portfolio-fashion-inside.jpg";
import portfolioSide2 from "@/assets/portfolio-side2.png";
import portfolioSlide2Inside1 from "@/assets/portfolio-slide2-inside1.png";
import portfolioSlide2Inside2 from "@/assets/portfolio-slide2-inside2.png";
import portfolioSlide3Inside1 from "@/assets/portfolio-slide3-inside1.png";
import portfolioSlide3Inside2 from "@/assets/portfolio-slide3-inside2.png";
import portfolioSlide3Inside3 from "@/assets/portfolio-slide3-inside3.png";
import portfolioSaas from "@/assets/portfolio-saas.jpg";
import portfolioSlide3 from "@/assets/portfolio-slide3.png";
import portfolioAgency from "@/assets/portfolio-agency.jpg";

const projects = [
  {
    title: "Modern Fashion E-Commerce",
    category: "Web Development",
    description: "A sleek and modern e-commerce platform for a fashion brand, featuring a clean design and a seamless shopping experience.",
    image: portfolioFashion,
    insideImages: [portfolioFashionInside],
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    results: ["300% increase in sales", "50% faster load times", "95% customer satisfaction"]
  },
  {
    title: "Spectra Streetwear",
    category: "E-commerce Platform",
    description: "Spectra offers a wide variety of fashion items in a user-friendly digital platform. The store features the latest trends and timeless classics, with detailed descriptions and high-quality images to assist customers in their shopping experience.",
    image: portfolioSide2,
    insideImages: [portfolioSlide2Inside2, portfolioSlide2Inside1],
    tech: ["React", "TypeScript", "D3.js", "Tailwind"],
    results: ["40% better user engagement", "Raised $2M Series A", "99.9% uptime"]
  },
  {
    title: "Social Networking App",
    category: "Mobile App Design",
    description: "A sleek mobile application for a social networking platform, focusing on intuitive user experience and engagement.",
    image: portfolioSlide3,
    insideImages: [portfolioSlide3Inside1, portfolioSlide3Inside2, portfolioSlide3Inside3],
    tech: ["Figma", "React Native", "Firebase", "GraphQL"],
    results: ["1M+ downloads in first year", "Top 10 in App Store", "High user retention"]
  }
];

const DummyContent = ({ project }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-900 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans max-w-3xl mx-auto">
        {project.description}
      </p>
      {project.insideImages && project.insideImages.length > 0 && (
        <div className="mt-8 grid grid-cols-1 gap-4">
          {project.insideImages.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`${project.title} detailed view ${index + 1}`}
              className="rounded-2xl w-full h-auto object-cover"
            />
          ))}
        </div>
      )}
      <div className="mt-8">
        <h4 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 mb-4">Key Results</h4>
        <ul className="space-y-2">
          {project.results.map((result, index) => (
            <li key={index} className="flex items-center text-neutral-600 dark:text-neutral-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 shrink-0"></div>
              {result}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h4 className="text-lg font-bold text-neutral-700 dark:text-neutral-300 mb-4">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const words = ["convert", "engage", "inspire", "succeed", "drive results"];

  const cards = projects.map((project, index) => (
    <Card
      key={project.title}
      card={{
        src: project.image,
        title: project.title,
        category: project.category,
        content: <DummyContent project={project} />,
      }}
      index={index}
      layout={true}
    />
  ));

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <span className="text-sm text-accent font-medium">Our Work</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Projects that <FlipWords words={words} duration={2000} className="text-primary" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses transform their digital presence 
            and achieve measurable growth.
          </p>
        </div>
        
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default Portfolio;