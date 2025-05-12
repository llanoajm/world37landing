import { Check } from "lucide-react";
import { Badge } from "./badge";

function Feature() {
  return (
    <div className="w-full py-[-10px]lg:py-40">
      <div className="container mx-auto">
        <div className="grid rounded-lg container p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Open-world Storytelling
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Like a Minecraft for stories.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Smart Relationship Graphs</p>
                  <p className="text-muted-foreground text-sm">
                    Every choice influences your relationships.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Deep Memory Preservation</p>
                  <p className="text-muted-foreground text-sm">
                    Never lose a hold of what you've done in the past.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Unexpected Agentic Subplots</p>
                  <p className="text-muted-foreground text-sm">
                    Watch your world create and react to unexpected-yet-coherent events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square flex items-center justify-center overflow-hidden">
            <video
              src="/dem.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };