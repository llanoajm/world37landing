import { NeonMaze } from "./neon-maze"

export function NeonMazeDemo() {
  return (
    <div className="relative w-full min-h-[600px] bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Video on top */}
      <div className="w-full max-w-2xl mx-auto mb-4 rounded-md shadow-lg overflow-hidden z-10 relative aspect-video bg-black" style={{height: "100%"}}>
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/kXQNYcp5x7M"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
            style={{
              pointerEvents: "auto",
              // Reduced zoom for less cropping
              width: "35vw",
              height: "80vw", // 16:9 ratio, but less zoomed in
              minWidth: "100%",
              minHeight: "100%",
            }}
          />
        </div>
      </div>
      <NeonMaze />
      <div
        className="absolute inset-0 pointer-events-none bg-white/20 backdrop-blur-sm"
        style={{
          backgroundImage: "url('/noise.png')",
          backgroundSize: "cover",
          opacity: 0.5,
          mixBlendMode: "overlay"
        }}
      />
    </div>
  )
}
