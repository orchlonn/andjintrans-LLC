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
    badge: "from-cyan-500/20 to-blue-500/20 text-cyan-400",
    title: "from-cyan-400 to-purple-400",
  },
  purple: {
    badge: "from-purple-500/20 to-pink-500/20 text-purple-400",
    title: "from-purple-400 to-pink-400",
  },
  emerald: {
    badge: "from-emerald-500/20 to-cyan-500/20 text-emerald-400",
    title: "from-emerald-400 to-cyan-400",
  },
  orange: {
    badge: "from-orange-500/20 to-red-500/20 text-orange-400",
    title: "from-orange-400 to-red-400",
  },
};

export default function PageHeader({ badge, title, highlightedTitle, description, badgeColor = "cyan" }: PageHeaderProps) {
  const colors = colorClasses[badgeColor];

  return (
    <div className="relative px-6 pb-16 pt-32 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`inline-block rounded-full bg-gradient-to-r ${colors.badge} px-4 py-2 text-sm font-medium`}
        >
          {badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {title}{" "}
          <span className={`bg-gradient-to-r ${colors.title} bg-clip-text text-transparent`}>
            {highlightedTitle}
          </span>
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
