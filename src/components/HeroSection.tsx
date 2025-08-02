import { Button } from "@/components/ui/button";
import { Music, Play, Users, Zap } from "lucide-react";
import heroImage from "@/assets/beatzo-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-bg"></div>
      
      {/* Hero image background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Music className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Play className="w-6 h-6 text-accent opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Zap className="w-7 h-7 text-primary-glow opacity-60" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Main heading */}
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            DELTA MUSIC
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The ultimate Discord music bot that brings your server to life with high-quality music, 
            advanced features, and seamless integration.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-8 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500K+</div>
            <div className="text-sm text-muted-foreground">Servers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">10M+</div>
            <div className="text-sm text-muted-foreground">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-glow">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto animate-pulse-glow"
          >
            <Users className="mr-2" />
            Invite Delta Music
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-4 h-auto"
          >
            <Play className="mr-2" />
            View Commands
          </Button>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <Music className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">High Quality Audio</h3>
            <p className="text-sm text-muted-foreground">Crystal clear 320kbps audio streaming</p>
          </div>
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <Zap className="w-8 h-8 text-accent mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Instant response and minimal latency</p>
          </div>
          <div className="bg-gradient-card p-6 rounded-lg border border-border backdrop-blur-sm">
            <Users className="w-8 h-8 text-primary-glow mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Multi-Server</h3>
            <p className="text-sm text-muted-foreground">Works seamlessly across all your servers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;