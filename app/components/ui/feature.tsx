import { Check } from "lucide-react";
import { Badge } from "./badge";

interface FeatureProps {
  isFlatView?: boolean;
}

function Feature({ isFlatView = false }: FeatureProps) {
  const headingColor = isFlatView ? "text-slate-900" : "text-white";
  const subHeadingColor = isFlatView ? "text-slate-800" : "text-gray-200";
  const paragraphColor = isFlatView ? "text-gray-800" : "text-gray-300";
  const smallParagraphColor = isFlatView ? "text-gray-700" : "text-gray-400";
  const badgeVariant = isFlatView ? "outline" : "default"; // Assuming default badge is for dark BGs

  return (
    <div className={`w-full ${isFlatView ? 'py-8' : 'py-[-10px]lg:py-40'}`}>
      <div className="w-full">
        <div className={`grid rounded-lg ${isFlatView ? 'px-4 sm:p-8 mt-1' : 'p-8 container'} grid-cols-1 gap-8 items-center lg:grid-cols-2`}>
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant={badgeVariant}>Platform</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className={`text-3xl lg:text-4xl tracking-tighter max-w-xl text-left font-regular ${headingColor}`}>
                  Take the guardrails off.
                </h2>
                <p className={`text-lg leading-relaxed tracking-tight max-w-xl text-left ${paragraphColor}`}>
                  The game engines of the past focused on how the game looks. W37 focuses on what actually happens in the game.
                </p>
              </div>
            </div>
            <div className={`grid items-start gap-6 ${isFlatView ? 'grid-cols-1 sm:grid-cols-2' : 'lg:pl-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-1'}`}>
              <div className="flex flex-row gap-6 items-start">
                <Check className={`w-4 h-4 mt-2 ${isFlatView ? 'text-primary' : 'text-sky-400'}`} />
                <div className="flex flex-col gap-1">
                  <p className={`align-left font-medium ${subHeadingColor}`}>Smart Relationship Graphs</p>
                  <p className={`text-sm ${smallParagraphColor}`}>
                    Every choice influences character relationships and reputation.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className={`w-4 h-4 mt-2 ${isFlatView ? 'text-primary' : 'text-sky-400'}`} />
                <div className="flex flex-col gap-1">
                  <p className={`align-left font-medium ${subHeadingColor}`}>Deep Memory Preservation</p>
                  <p className={`text-sm ${smallParagraphColor}`}>
                    Every character remembers everything that's happened.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className={`w-4 h-4 mt-2 ${isFlatView ? 'text-primary' : 'text-sky-400'}`} />
                <div className="flex flex-col gap-1">
                  <p className={`align-left font-medium ${subHeadingColor}`}>Unexpected Agentic Subplots</p>
                  <p className={`text-sm ${smallParagraphColor}`}>
                    Let your world run wild while staying true to your vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full rounded-md aspect-video flex items-center justify-center overflow-hidden ${isFlatView ? 'bg-gray-100' : 'bg-muted'}`}>
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