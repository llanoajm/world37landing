import { NeonMaze } from "./neon-maze"

export function NeonMazeDemo() {
  return (
    <div className="relative w-full min-h-[600px] bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Video on top */}
      <video
        src="/intro.mp4"
        controls
        className="w-full max-w-2xl mx-auto -mb-4 rounded-md shadow-lg z-10 relative"
        style={{ background: '#111' }}
      />
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
