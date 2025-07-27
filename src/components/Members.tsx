import { PinContainer } from "@/components/ui/3d-pin";

const Members = () => {
  const members = [
    {
      name: "Virat",
      role: "Creative Director",
      image: "https://api.dicebear.com/8.x/identicon/svg?seed=Virat",
      description: "Leading creative vision and strategic design thinking"
    },
    {
      name: "Jai Mittal", 
      role: "Technical Lead",
      image: "https://api.dicebear.com/8.x/identicon/svg?seed=Jai%20Mittal",
      description: "Expert in web development and technical architecture"
    },
    {
      name: "Ashay",
      role: "Digital Marketing Specialist", 
      image: "https://api.dicebear.com/8.x/identicon/svg?seed=Ashay",
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
          {members.map((member) => (
            <PinContainer key={member.name} title={member.role} href="#">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                  {member.name}
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500">
                    {member.description}
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-lg" />
                </div>
              </div>
            </PinContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;