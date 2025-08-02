import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Crown, Code, Heart } from "lucide-react";

const DevelopersSection = () => {
  const developers = [
    {
      name: "DELTA",
      role: "Owner & Creator",
      description: "Visionary behind Delta Music, leading the project with passion for bringing quality music experiences to Discord communities.",
      icon: Crown,
      gradient: "from-primary to-accent",
      achievements: ["Project Founder", "Community Leader", "Discord Expert"],
    },
    {
      name: "S 4 N J U",
      role: "Main Developer",
      description: "The coding mastermind who brings Delta Music to life with exceptional programming skills and attention to detail.",
      icon: Code,
      gradient: "from-accent to-primary",
      achievements: ["Lead Programmer", "Bot Architecture", "Feature Development"],
    }
  ];

  return (
    <section id="developers" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Meet The Team
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The passionate developers behind Delta Music, dedicated to creating the best Discord music experience
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {developers.map((dev, index) => (
            <Card 
              key={dev.name} 
              className="group bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-primary"
            >
              <CardContent className="p-8">
                {/* Developer Icon & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${dev.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <dev.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {dev.name}
                    </h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {dev.role}
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {dev.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dev.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="outline"
                        className="text-xs border-border/50 hover:border-primary/50 transition-colors"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Dedication</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Passion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;