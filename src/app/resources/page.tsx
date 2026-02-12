"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

// Icons (same style as home / services page)
function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  );
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16V8c0-1.1-.9-2-2-2h-6l-2-2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-6v6H5V10h7zm7 6v-6h-5v6h5z" />
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

function WarningIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
    </svg>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
  );
}

const resources = [
  {
    title: "Инкотермс 2020",
    description:
      "Олон улсын худалдааны 11 нөхцөл, зардал/эрсдэлийн шилжилт, хариуцлагын хил",
    href: "/resources/incoterms",
    Icon: ClipboardIcon,
    color: "cyan",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Контейнерын төрөл",
    description:
      "Dry, High Cube, Reefer, Open Top, Flat Rack, Tank гэх мэт 10 төрлийн контейнер",
    href: "/resources/containers",
    Icon: BoxIcon,
    color: "blue",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Вагоны төрөл",
    description:
      "Битүү, хагас, тавцант, цистерн, бункер, рефрижератор гэх мэт 9 төрлийн вагон",
    href: "/resources/wagons",
    Icon: TrainIcon,
    color: "purple",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Аюултай ачаа (DG)",
    description: "UN Class 1-9 ангилал, SDS/MSDS шаардлага, шошгололт, савлалт",
    href: "/resources/dangerous-goods",
    Icon: WarningIcon,
    color: "orange",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Сав баглаа боодол",
    description:
      "Primary/Secondary/Tertiary савлагаа, хамгаалалтын материал, стандарт",
    href: "/resources/packaging",
    Icon: PackageIcon,
    color: "emerald",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Шаардлагатай баримт",
    description:
      "Commercial Invoice, B/L, AWB, CMR, гаалийн бүрдүүлэлт, DG баримтууд",
    href: "/resources/documents",
    Icon: DocumentIcon,
    color: "pink",
    gradient: "from-pink-400 to-rose-500",
  },
];

const colorClasses: Record<
  string,
  { border: string; bg: string; hover: string }
> = {
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
                const Icon = resource.Icon;
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
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${resource.gradient} shadow-lg`}
                      >
                        <Icon className="h-7 w-7 text-slate-900" />
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-white">
                        {resource.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {resource.description}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm text-emerald-400 group-hover:text-emerald-300">
                        Дэлгэрэнгүй
                        <svg
                          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
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
                Танд санал хүсэлт байна уу?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Тээвэр, логистиктой холбоотой аливаа асуултад бид хариулахад
                бэлэн.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
              >
                Холбоо барих
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
