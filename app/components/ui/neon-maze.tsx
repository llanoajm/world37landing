"use client"
import { useEffect, useRef } from "react"

const NeonMaze = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Get parent dimensions for canvas sizing
    const parent = canvas.parentElement;
    if (!parent) return;

    const x = canvas.getContext("2d")
    if (!x) return

    let t = 0
    let animationFrameId: number

    const r = () => {
      if (!canvas || !parent) return;
      // Set canvas dimensions based on its parent container
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      // No need to call d() here, it will be called by a()
    }

    const d = () => {
      if (!canvas || !x) return;
      // Adjusted s calculation to be more responsive to container aspect ratio
      const s = Math.min(canvas.width / 10, canvas.height / 5) / 2; // Smaller base size for denser maze in sliver
      const g = Math.ceil(canvas.width / s) * 2
      const h = Math.ceil(canvas.height / (s * 0.5)) * 2
      const w = canvas.width / 2
      const v = canvas.height / 2

      for (let y = -h; y < h; y++) {
        for (let i = -g; i < g; i++) {
          const p = w + ((i - y) * s) / 2
          const q = v + ((i + y) * s) / 4
          const m = Math.sqrt(i * i + y * y)
          const n = Math.sqrt(g * g + h * h)
          const e = 1 - m / n
          const f = s * e * Math.abs(Math.sin(m * 0.5 + t))

          x.beginPath()
          x.moveTo(p, q - f)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.lineTo(p + s, q - f)
          x.lineTo(p + s, q)
          x.lineTo(p + s / 2, q + s / 2)
          x.lineTo(p, q)
          x.closePath()

          const l = x.createLinearGradient(p, q - f, p + s, q)
          // Muted colors
          l.addColorStop(0, "rgba(0, 100, 100, 0.6)") // Desaturated Teal
          l.addColorStop(1, "rgba(90, 70, 120, 0.6)")  // Desaturated Purple
          x.fillStyle = l
          x.fill()
          x.strokeStyle = "rgba(100, 120, 140, 0.3)" // Muted Blue-Gray
          x.stroke()

          x.beginPath()
          x.moveTo(p, q)
          x.lineTo(p, q - f)
          x.moveTo(p + s, q)
          x.lineTo(p + s, q - f)
          x.moveTo(p + s / 2, q + s / 2)
          x.lineTo(p + s / 2, q - s / 2 - f)
          x.strokeStyle = "rgba(150, 150, 150, 0.15)" // Softer White/Gray
          x.stroke()
        }
      }
    }

    const a = () => {
      if (!canvas || !x) return
      x.fillStyle = "rgba(0,0,0,.1)"
      x.fillRect(0, 0, canvas.width, canvas.height)
      d()
      t += 0.05
      animationFrameId = requestAnimationFrame(a)
    }

    window.addEventListener("resize", r)
    r()
    a()

    return () => {
      window.removeEventListener("resize", r)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    // Changed main to div, adjusted classes for full parent fill
    <div className="w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

export { NeonMaze }
