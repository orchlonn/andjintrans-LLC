"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedTitle: string;
  description?: string;
  badgeColor?: "cyan" | "purple" | "emerald" | "orange";
  backgroundImage?: string;
  imageAlt?: string;
}

const colorClasses = {
  cyan: {
    badge: "from-sky-500/20 to-blue-500/20 text-sky-600",
    title: "from-sky-500 to-blue-600",
  },
  purple: {
    badge: "from-sky-500/20 to-sky-600/20 text-sky-600",
    title: "from-sky-500 to-blue-600",
  },
  emerald: {
    badge: "from-sky-500/20 to-sky-600/20 text-sky-600",
    title: "from-sky-500 to-blue-600",
  },
  orange: {
    badge: "from-amber-500/20 to-amber-600/20 text-amber-600",
    title: "from-amber-500 to-amber-600",
  },
};

export default function PageHeader({
  badge,
  title,
  highlightedTitle,
  description,
  badgeColor = "cyan",
  backgroundImage,
  imageAlt = "",
}: PageHeaderProps) {
  const colors = colorClasses[badgeColor];
  const hasImage = !!backgroundImage;

  return (
    <div
      className={`relative overflow-hidden px-6 ${hasImage ? "flex min-h-screen items-center justify-center pt-20" : "pb-16 pt-32 md:pt-40"}`}
    >
      {hasImage && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
          </div>
        </>
      )}
      <div className={`relative ${hasImage ? "z-10" : ""} mx-auto max-w-4xl text-center`}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mt-6 text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl ${hasImage ? "text-white" : "text-slate-900"}`}
        >
          {title}{" "}
          <span
            className={hasImage ? "text-white" : `bg-gradient-to-r ${colors.title} bg-clip-text text-transparent`}
          >
            {highlightedTitle}
          </span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`mx-auto mt-6 max-w-2xl text-lg ${hasImage ? "text-slate-200" : "text-slate-600"}`}
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
