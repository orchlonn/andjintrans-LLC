"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const newsItems = [
  {
    title: "Далайн тээврийн хуваарийн шинэчлэл",
    date: "2024-12-15",
    category: "Далайн тээвэр",
    excerpt: "Азийн гол боомтуудын далайн тээврийн хуваарь, transit хугацааны талаарх шинэчлэгдсэн мэдээлэл.",
    color: "blue",
  },
  {
    title: "Төмөр замын тээврийн шинэ маршрут",
    date: "2024-12-10",
    category: "Төмөр замын тээвэр",
    excerpt: "Хятад-Европ чиглэлийн төмөр замын тээврийн шинэ маршрут нээгдсэн тухай.",
    color: "purple",
  },
  {
    title: "DG ачааны тээвэрлэлтийн шинэ журам",
    date: "2024-12-05",
    category: "Аюултай ачаа",
    excerpt: "Аюултай ачааны тээвэрлэлтийн олон улсын шинэ журам 2025 оноос хүчин төгөлдөр болно.",
    color: "orange",
  },
];

const colorClasses: Record<string, { border: string; bg: string; badge: string }> = {
  blue: {
    border: "border-blue-500/30",
    bg: "from-blue-500/10",
    badge: "bg-blue-500/20 text-blue-400",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-500/10",
    badge: "bg-purple-500/20 text-purple-400",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "from-orange-500/10",
    badge: "bg-orange-500/20 text-orange-400",
  },
  cyan: {
    border: "border-cyan-500/30",
    bg: "from-cyan-500/10",
    badge: "bg-cyan-500/20 text-cyan-400",
  },
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        badge="Мэдээ мэдээлэл"
        title="Сүүлийн үеийн"
        highlightedTitle="мэдээ мэдээлэл"
        description="Тээвэр логистикийн салбарын шинэ мэдээ, хуваарийн өөрчлөлт, журмын шинэчлэлүүд."
        badgeColor="cyan"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          {/* News List */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {newsItems.length > 0 ? (
              <div className="space-y-6">
                {newsItems.map((news, index) => {
                  const colors = colorClasses[news.color];
                  return (
                    <motion.article
                      key={news.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent p-8`}
                    >
                      <div className="flex flex-wrap items-center gap-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${colors.badge}`}>
                          {news.category}
                        </span>
                        <span className="text-sm text-slate-500">{news.date}</span>
                      </div>
                      <h2 className="mt-4 text-xl font-bold text-white md:text-2xl">{news.title}</h2>
                      <p className="mt-3 text-slate-400">{news.excerpt}</p>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500">
                  <svg className="h-8 w-8 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Мэдээ мэдээлэл удахгүй</h3>
                <p className="mt-2 text-slate-400">
                  Тээвэр логистикийн салбарын сүүлийн үеийн мэдээ мэдээллийг энд байршуулах болно.
                </p>
              </div>
            )}
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-blue-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
               Танд санал хүсэлт байна уу?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Тээвэр логистикийн талаар дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоно уу.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
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
