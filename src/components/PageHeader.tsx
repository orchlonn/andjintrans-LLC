"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  badge: string;
  title: string;
  highlightedTitle: string;
  description?: string;
  badgeColor?: "cyan" | "purple" | "emerald" | "orange";
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
}: PageHeaderProps) {
  const colors = colorClasses[badgeColor];

  return (
    <div className="relative px-6 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}{" "}
          <span
            className={`bg-gradient-to-r ${colors.title} bg-clip-text text-transparent`}
          >
            {highlightedTitle}
          </span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-500"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
