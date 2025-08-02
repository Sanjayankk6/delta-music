import { Card } from "@/components/ui/card";
import { 
  Music, 
  Radio, 
  ListMusic, 
  Volume2, 
  Settings, 
  Shield,
  Sparkles,
  Users,
  Mic
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Music,
      title: "Multiple Sources",
      description: "Play music from YouTube, Spotify, SoundCloud, and more platforms seamlessly.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: ListMusic,
      title: "Queue Management",
      description: "Advanced queue system with shuffle, repeat, and playlist management features.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Volume2,
      title: "Audio Controls",
      description: "Fine-tune your listening experience with volume control, bass boost, and EQ.",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: Radio,
      title: "24/7 Radio",
      description: "Keep your server alive with continuous radio stations and curated playlists.",
      gradient: "from-accent to-primary-glow"
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Personalize bot settings, prefixes, and permissions for your server.",
      gradient: "from-primary to-accent"
    },
    {
      icon: Shield,
      title: "Secure & Stable",
      description: "Enterprise-grade security with 99.9% uptime and regular updates.",
      gradient: "from-primary-glow to-primary"
    },
    {
      icon: Sparkles,
      title: "AI Recommendations",
      description: "Smart music suggestions based on your server's listening history.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Users,
      title: "Multi-Server",
      description: "One bot, unlimited servers. Manage all your communities effortlessly.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Mic,
      title: "Voice Integration",
      description: "Advanced voice channel detection and seamless audio streaming.",
      gradient: "from-primary-glow to-accent"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-bg opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beatzo comes packed with everything you need to create the perfect music experience 
            for your Discord community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;