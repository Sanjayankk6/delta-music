import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Terminal } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CommandsSection = () => {
  const { toast } = useToast();

  const commandCategories = [
    {
      category: "Music Control",
      color: "from-primary to-primary-glow",
      commands: [
        { command: "/play", description: "Play a song or playlist", usage: "/play [song name/URL]" },
        { command: "/pause", description: "Pause the current track", usage: "/pause" },
        { command: "/resume", description: "Resume playback", usage: "/resume" },
        { command: "/skip", description: "Skip to the next song", usage: "/skip" },
        { command: "/stop", description: "Stop music and clear queue", usage: "/stop" }
      ]
    },
    {
      category: "Queue Management",
      color: "from-accent to-primary",
      commands: [
        { command: "/queue", description: "Show current queue", usage: "/queue" },
        { command: "/shuffle", description: "Shuffle the queue", usage: "/shuffle" },
        { command: "/repeat", description: "Toggle repeat mode", usage: "/repeat [off/song/queue]" },
        { command: "/remove", description: "Remove song from queue", usage: "/remove [position]" },
        { command: "/clear", description: "Clear the entire queue", usage: "/clear" }
      ]
    },
    {
      category: "Audio Settings",
      color: "from-primary-glow to-accent",
      commands: [
        { command: "/volume", description: "Set playback volume", usage: "/volume [1-100]" },
        { command: "/bassboost", description: "Toggle bass boost", usage: "/bassboost [on/off]" },
        { command: "/nightcore", description: "Toggle nightcore effect", usage: "/nightcore [on/off]" },
        { command: "/8d", description: "Toggle 8D audio effect", usage: "/8d [on/off]" },
        { command: "/karaoke", description: "Toggle karaoke mode", usage: "/karaoke [on/off]" }
      ]
    }
  ];

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    toast({
      title: "Copied!",
      description: `Command "${command}" copied to clipboard`,
    });
  };

  return (
    <section id="commands" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Commands
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master Beatzo with these powerful commands. All commands support both slash commands 
            and traditional prefixes.
          </p>
        </div>

        <div className="space-y-12">
          {commandCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${category.color}`}></div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
                <Badge variant="secondary" className="ml-auto">
                  {category.commands.length} commands
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {category.commands.map((cmd, cmdIndex) => (
                  <Card key={cmdIndex} className="p-4 bg-gradient-card border-border hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-primary" />
                        <code className="font-mono text-sm bg-primary/10 px-2 py-1 rounded text-primary font-semibold">
                          {cmd.command}
                        </code>
                      </div>
                      <button
                        onClick={() => copyCommand(cmd.usage)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-primary/10 rounded"
                        title="Copy command"
                      >
                        <Copy className="w-4 h-4 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{cmd.description}</p>
                    <code className="text-xs text-accent font-mono bg-accent/10 px-2 py-1 rounded block">
                      {cmd.usage}
                    </code>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="inline-block p-6 bg-gradient-card border-primary/30">
            <Terminal className="w-8 h-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Use <code className="bg-primary/10 text-primary px-2 py-1 rounded">/help</code> in 
              your server for a complete command list and detailed explanations.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CommandsSection;