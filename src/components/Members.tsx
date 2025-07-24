import { Card, CardContent } from "@/components/ui/card";

const Members = () => {
  const members = [
    {
      name: "Virat",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Leading creative vision and strategic design thinking"
    },
    {
      name: "Jai Mittal", 
      role: "Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Expert in web development and technical architecture"
    },
    {
      name: "Ashay",
      role: "Digital Marketing Specialist", 
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      description: "Driving digital growth and marketing strategies"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {members.map((member, index) => (
            <Card 
              key={member.name}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;