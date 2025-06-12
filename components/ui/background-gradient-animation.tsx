"use client"
import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef, useState } from "react"

export const BackgroundGradientAnimation = ({
    gradientBackgroundStart = "rgb(20, 25, 35)",
    gradientBackgroundEnd = "rgb(34, 40, 49)",
    firstColor = "59, 130, 246",
    secondColor = "139, 92, 246",
    thirdColor = "236, 72, 153",
    fourthColor = "34, 197, 94",
    fifthColor = "251, 191, 36",
    sixthColor = "168, 85, 247",
    pointerColor = "99, 102, 241",
    size = "80%",
    blendingValue = "screen",
    children,
    className,
    interactive = true,
    containerClassName,
    showParticles = true,
}: {
    gradientBackgroundStart?: string
    gradientBackgroundEnd?: string
    firstColor?: string
    secondColor?: string
    thirdColor?: string
    fourthColor?: string
    fifthColor?: string
    sixthColor?: string
    pointerColor?: string
    size?: string
    blendingValue?: string
    children?: React.ReactNode
    className?: string
    interactive?: boolean
    containerClassName?: string
    showParticles?: boolean
}) => {
    const interactiveRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [curX, setCurX] = useState(0)
    const [curY, setCurY] = useState(0)
    const [tgX, setTgX] = useState(0)
    const [tgY, setTgY] = useState(0)

    // Particle system
    const particles = useRef<
        Array<{
            x: number
            y: number
            vx: number
            vy: number
            size: number
            opacity: number
            color: string
        }>
    >([])

    useEffect(() => {
        document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart)
        document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd)
        document.body.style.setProperty("--first-color", firstColor)
        document.body.style.setProperty("--second-color", secondColor)
        document.body.style.setProperty("--third-color", thirdColor)
        document.body.style.setProperty("--fourth-color", fourthColor)
        document.body.style.setProperty("--fifth-color", fifthColor)
        document.body.style.setProperty("--sixth-color", sixthColor)
        document.body.style.setProperty("--pointer-color", pointerColor)
        document.body.style.setProperty("--size", size)
        document.body.style.setProperty("--blending-value", blendingValue)
    }, [
        gradientBackgroundStart,
        gradientBackgroundEnd,
        firstColor,
        secondColor,
        thirdColor,
        fourthColor,
        fifthColor,
        sixthColor,
        pointerColor,
        size,
        blendingValue,
    ])

    // Initialize particles
    useEffect(() => {
        if (!showParticles) return

        const colors = [firstColor, secondColor, thirdColor, fourthColor, fifthColor, sixthColor]
        particles.current = Array.from({ length: 50 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        }))
    }, [showParticles, firstColor, secondColor, thirdColor, fourthColor, fifthColor, sixthColor])

    // Animate particles
    useEffect(() => {
        if (!showParticles || !canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const animate = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight

            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.current.forEach((particle) => {
                particle.x += particle.vx
                particle.y += particle.vy

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                ctx.beginPath()
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`
                ctx.fill()

                // Add glow effect
                ctx.shadowBlur = 20
                ctx.shadowColor = `rgba(${particle.color}, 0.5)`
                ctx.fill()
                ctx.shadowBlur = 0
            })

            requestAnimationFrame(animate)
        }

        animate()
    }, [showParticles])

    useEffect(() => {
        function move() {
            if (!interactiveRef.current) return
            setCurX(curX + (tgX - curX) / 15)
            setCurY(curY + (tgY - curY) / 15)
            interactiveRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
        }
        move()
    }, [tgX, tgY, curX, curY])

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (interactiveRef.current) {
            const rect = interactiveRef.current.getBoundingClientRect()
            setTgX(event.clientX - rect.left)
            setTgY(event.clientY - rect.top)
        }
    }

    const [isSafari, setIsSafari] = useState(false)
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    }, [])

    return (
        <div
            className={cn(
                "h-screen w-screen relative top-0 left-0 overflow-hidden",
                "bg-gradient-to-br from-[var(--gradient-background-start)] via-slate-900 to-[var(--gradient-background-end)]",
                containerClassName,
            )}
        >
            {/* Animated background mesh */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-green-600/20 via-yellow-600/20 to-indigo-600/20 animate-pulse delay-1000"></div>
            </div>

            {/* Particle canvas */}
            {showParticles && (
                <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: "screen" }} />
            )}

            {/* SVG Filters */}
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            {/* Content */}
            <div className={cn("relative z-20", className)}>{children}</div>

            {/* Main gradient animation container */}
            <div
                className={cn(
                    "gradients-container h-full w-full absolute inset-0 z-10",
                    isSafari ? "blur-3xl" : "[filter:url(#blurMe)_blur(60px)]",
                )}
            >
                {/* Primary gradient orbs */}
                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--first-color),_0.8)_0,_rgba(var(--first-color),_0.4)_40%,_rgba(var(--first-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:center_center]`,
                        `animate-float-1`,
                        `opacity-90`,
                    )}
                ></div>

                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.7)_0,_rgba(var(--second-color),_0.3)_40%,_rgba(var(--second-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-300px)]`,
                        `animate-float-2`,
                        `opacity-80`,
                    )}
                ></div>

                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.6)_0,_rgba(var(--third-color),_0.3)_40%,_rgba(var(--third-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+300px)]`,
                        `animate-float-3`,
                        `opacity-70`,
                    )}
                ></div>

                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.5)_0,_rgba(var(--fourth-color),_0.2)_40%,_rgba(var(--fourth-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-150px)]`,
                        `animate-float-4`,
                        `opacity-60`,
                    )}
                ></div>

                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.4)_0,_rgba(var(--fifth-color),_0.2)_40%,_rgba(var(--fifth-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-600px)_calc(50%+600px)]`,
                        `animate-float-5`,
                        `opacity-50`,
                    )}
                ></div>

                <div
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--sixth-color),_0.3)_0,_rgba(var(--sixth-color),_0.15)_40%,_rgba(var(--sixth-color),_0)_70%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+600px)_calc(50%-600px)]`,
                        `animate-float-6`,
                        `opacity-40`,
                    )}
                ></div>

                {/* Interactive element */}
                {interactive && (
                    <div
                        ref={interactiveRef}
                        onMouseMove={handleMouseMove}
                        className={cn(
                            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.6)_0,_rgba(var(--pointer-color),_0.3)_30%,_rgba(var(--pointer-color),_0)_60%)_no-repeat]`,
                            `[mix-blend-mode:var(--blending-value)] w-96 h-96 -top-48 -left-48`,
                            `opacity-80 transition-opacity duration-300`,
                            `[filter:url(#glow)]`,
                        )}
                    ></div>
                )}
            </div>

            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none z-15"></div>
        </div>
    )
}
