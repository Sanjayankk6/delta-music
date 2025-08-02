import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Server, 
  Music, 
  Clock, 
  TrendingUp, 
  Headphones,
  Globe,
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    servers: 0,
    users: 0,
    songsPlayed: 0,
    uptime: 0
  });

  const finalStats = {
    servers: 500000,
    users: 10000000,
    songsPlayed: 50000000,
    uptime: 99.9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedStats({
        servers: Math.floor(finalStats.servers * progress),
        users: Math.floor(finalStats.users * progress),
        songsPlayed: Math.floor(finalStats.songsPlayed * progress),
        uptime: Math.min(finalStats.uptime * progress, 99.9)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toLocaleString();
  };

  const stats = [
    {
      icon: Server,
      label: "Active Servers",
      value: formatNumber(animatedStats.servers),
      color: "from-primary to-primary-glow",
      description: "Growing daily"
    },
    {
      icon: Users,
      label: "Total Users",
      value: formatNumber(animatedStats.users),
      color: "from-accent to-primary",
      description: "Worldwide community"
    },
    {
      icon: Music,
      label: "Songs Played",
      value: formatNumber(animatedStats.songsPlayed),
      color: "from-primary-glow to-accent",
      description: "And counting..."
    },
    {
      icon: Clock,
      label: "Uptime",
      value: animatedStats.uptime.toFixed(1) + "%",
      color: "from-accent to-primary-glow",
      description: "Reliable service"
    }
  ];

  const features = [
    {
      icon: TrendingUp,
      title: "Growing Fast",
      description: "Join thousands of servers already using Beatzo",
      metric: "+5K servers/month"
    },
    {
      icon: Headphones,
      title: "Premium Audio",
      description: "High-quality streaming with minimal latency",
      metric: "320kbps quality"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Available in multiple languages worldwide",
      metric: "15+ languages"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for instant responses",
      metric: "<100ms latency"
    }
  ];

  return (
    <section id="stats" className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Trusted by Millions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beatzo powers music experiences across hundreds of thousands of Discord servers, 
            bringing joy to millions of users worldwide.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border text-center hover:scale-105 transition-transform duration-300">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 animate-pulse-glow`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-accent" />
              Performance Metrics
            </h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Server Response Time</span>
                  <span className="text-sm text-primary">Excellent</span>
                </div>
                <Progress value={95} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Audio Quality</span>
                  <span className="text-sm text-primary">Premium</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium">Uptime Reliability</span>
                  <span className="text-sm text-primary">99.9%</span>
                </div>
                <Progress value={99.9} className="h-2" />
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-card border-border">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              Growth Statistics
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span>Monthly Active Servers</span>
                <span className="text-accent font-bold">+5,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Songs Played Daily</span>
                <span className="text-primary font-bold">2.5M</span>
              </div>
              <div className="flex justify-between items-center">
                <span>User Satisfaction</span>
                <span className="text-primary-glow font-bold">98%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Support Response</span>
                <span className="text-accent font-bold">&lt; 1hr</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 group">
              <feature.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {feature.description}
              </p>
              <div className="text-xs font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                {feature.metric}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;