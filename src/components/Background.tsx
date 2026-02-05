"use client";

import { motion } from "framer-motion";

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

function MovingIcon({
  children,
  direction = "left",
  duration = 20,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  delay?: number;
}) {
  const xValues =
    direction === "left" ? ["100vw", "-20vw"] : ["-20vw", "100vw"];

  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ x: xValues[0], opacity: 0 }}
      animate={{
        x: xValues,
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "linear",
        times: [0, 0.1, 0.9, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

// Transport SVG Icons
function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function ShipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
    </svg>
  );
}

function TrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function ContainerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3v18h18V3zm-2 16H5V5h14v14zM7 7h2v10H7V7zm4 0h2v10h-2V7zm4 0h2v10h-2V7z" />
    </svg>
  );
}

// Animated dotted route line
function RouteLine() {
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.03]"
      viewBox="0 0 1200 800"
    >
      <motion.path
        d="M0,400 Q300,200 600,400 T1200,400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 10"
        className="text-cyan-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M0,500 Q400,300 800,500 T1200,300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="10 10"
        className="text-purple-400"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
      />
    </svg>
  );
}

// World map dots pattern
function WorldMapPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.02]">
      <svg viewBox="0 0 1000 500" className="h-full w-full">
        {/* Simplified world map dots */}
        <g fill="currentColor" className="text-cyan-400">
          {/* North America */}
          <circle cx="200" cy="150" r="3" />
          <circle cx="220" cy="160" r="3" />
          <circle cx="180" cy="170" r="3" />
          <circle cx="240" cy="140" r="3" />
          <circle cx="160" cy="180" r="3" />

          {/* Europe */}
          <circle cx="480" cy="130" r="3" />
          <circle cx="500" cy="140" r="3" />
          <circle cx="520" cy="120" r="3" />
          <circle cx="460" cy="150" r="3" />

          {/* Asia */}
          <circle cx="700" cy="180" r="3" />
          <circle cx="720" cy="160" r="3" />
          <circle cx="750" cy="200" r="3" />
          <circle cx="680" cy="150" r="3" />
          <circle cx="800" cy="220" r="3" />

          {/* Mongolia highlight */}
          <motion.circle
            cx="720"
            cy="170"
            r="8"
            className="text-cyan-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* South America */}
          <circle cx="280" cy="350" r="3" />
          <circle cx="300" cy="380" r="3" />

          {/* Africa */}
          <circle cx="500" cy="280" r="3" />
          <circle cx="520" cy="320" r="3" />

          {/* Australia */}
          <circle cx="820" cy="380" r="3" />
          <circle cx="840" cy="360" r="3" />
        </g>

        {/* Connection lines */}
        <motion.line
          x1="200"
          y1="150"
          x2="480"
          y2="130"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 5"
          className="text-cyan-400/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.line
          x1="480"
          y1="130"
          x2="720"
          y2="170"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5 5"
          className="text-purple-400/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

export default function Background() {
  return (
    <>
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />

        {/* World map pattern */}
        <WorldMapPattern />

        {/* Route lines */}
        <RouteLine />

        {/* Floating gradient orbs */}
        <FloatingOrb
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[120px]"
          delay={0}
        />
        <FloatingOrb
          className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[120px]"
          delay={2}
        />
        <FloatingOrb
          className="absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-[100px]"
          delay={4}
        />

        {/* Moving transport icons */}
        <MovingIcon
          direction="right"
          duration={25}
          className="top-[15%]"
          delay={0}
        >
          <PlaneIcon className="h-8 w-8 text-cyan-500/10 rotate-45" />
        </MovingIcon>

        <MovingIcon
          direction="left"
          duration={35}
          className="top-[35%]"
          delay={5}
        >
          <ShipIcon className="h-10 w-10 text-blue-500/10" />
        </MovingIcon>

        <MovingIcon
          direction="right"
          duration={30}
          className="top-[55%]"
          delay={10}
        >
          <TrainIcon className="h-8 w-8 text-purple-500/10" />
        </MovingIcon>

        <MovingIcon
          direction="left"
          duration={22}
          className="top-[75%]"
          delay={3}
        >
          <TruckIcon className="h-8 w-8 text-emerald-500/10" />
        </MovingIcon>

        <MovingIcon
          direction="right"
          duration={40}
          className="top-[45%]"
          delay={15}
        >
          <ContainerIcon className="h-12 w-12 text-orange-500/8" />
        </MovingIcon>

        <MovingIcon
          direction="left"
          duration={28}
          className="top-[25%]"
          delay={8}
        >
          <PlaneIcon className="h-6 w-6 text-cyan-500/8 -rotate-12" />
        </MovingIcon>

        <MovingIcon
          direction="right"
          duration={32}
          className="top-[65%]"
          delay={12}
        >
          <ShipIcon className="h-8 w-8 text-blue-500/8" />
        </MovingIcon>
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-[1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-50" />

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 z-[1] opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
    </>
  );
}
