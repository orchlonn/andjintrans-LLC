"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const resources = [
  {
    title: "Инкотермс 2020",
    description: "Олон улсын худалдааны 11 нөхцөл, зардал/эрсдэлийн шилжилт, хариуцлагын хил",
    href: "/resources/incoterms",
    icon: "📋",
    color: "cyan",
  },
  {
    title: "Контейнерын төрөл",
    description: "Dry, High Cube, Reefer, Open Top, Flat Rack, Tank гэх мэт 10 төрлийн контейнер",
    href: "/resources/containers",
    icon: "📦",
    color: "blue",
  },
  {
    title: "Вагоны төрөл",
    description: "Битүү, хагас, тавцант, цистерн, бункер, рефрижератор гэх мэт 9 төрлийн вагон",
    href: "/resources/wagons",
    icon: "🚃",
    color: "purple",
  },
  {
    title: "Аюултай ачаа (DG)",
    description: "UN Class 1-9 ангилал, SDS/MSDS шаардлага, шошгололт, савлалт",
    href: "/resources/dangerous-goods",
    icon: "⚠️",
    color: "orange",
  },
  {
    title: "Сав баглаа боодол",
    description: "Primary/Secondary/Tertiary савлагаа, хамгаалалтын материал, стандарт",
    href: "/resources/packaging",
    icon: "🎁",
    color: "emerald",
  },
  {
    title: "Шаардлагатай баримт",
    description: "Commercial Invoice, B/L, AWB, CMR, гаалийн бүрдүүлэлт, DG баримтууд",
    href: "/resources/documents",
    icon: "📄",
    color: "pink",
  },
];

const colorClasses: Record<string, { border: string; bg: string; hover: string }> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "from-cyan-500/10",
    hover: "hover:border-cyan-400/50",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "from-blue-500/10",
    hover: "hover:border-blue-400/50",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-500/10",
    hover: "hover:border-purple-400/50",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "from-orange-500/10",
    hover: "hover:border-orange-400/50",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "from-emerald-500/10",
    hover: "hover:border-emerald-400/50",
  },
  pink: {
    border: "border-pink-500/30",
    bg: "from-pink-500/10",
    hover: "hover:border-pink-400/50",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        badge="Танд хэрэгтэй"
        title="Мэдлэгийн"
        highlightedTitle="сан"
        description="Олон улсын тээвэр, логистиктой холбоотой чухал мэдээлэл, стандарт, дүрэм журмуудын тайлбар."
        badgeColor="emerald"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Resources Grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => {
                const colors = colorClasses[resource.color];
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={resource.href}
                      className={`group relative block h-full overflow-hidden rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent p-8 backdrop-blur-xl transition-all duration-500 ${colors.hover}`}
                    >
                      <span className="text-5xl">{resource.icon}</span>
                      <h3 className="mt-6 text-xl font-bold text-white">{resource.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">{resource.description}</p>
                      <span className="mt-6 inline-flex items-center text-sm text-emerald-400 group-hover:text-emerald-300">
                        Дэлгэрэнгүй
                        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-900/50 to-cyan-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Асуултай байна уу?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Тээвэр, логистиктой холбоотой аливаа асуултад бид хариулахад бэлэн.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
              >
                Холбоо барих
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
