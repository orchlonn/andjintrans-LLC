"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const colorClasses: Record<string, { border: string; bg: string; badge: string }> = {
  blue: {
    border: "border-sky-200",
    bg: "from-sky-50",
    badge: "bg-sky-50 text-sky-600",
  },
  purple: {
    border: "border-sky-200",
    bg: "from-sky-50",
    badge: "bg-sky-50 text-sky-600",
  },
  orange: {
    border: "border-amber-200",
    bg: "from-amber-50",
    badge: "bg-amber-50 text-amber-600",
  },
  cyan: {
    border: "border-sky-200",
    bg: "from-sky-50",
    badge: "bg-sky-50 text-sky-600",
  },
};

export default function NewsPage() {
  const t = useTranslations("News");
  const tc = useTranslations("Common");

  const newsItems = [
    {
      title: t("news1.title"),
      date: "2024-12-15",
      category: t("news1.category"),
      excerpt: t("news1.excerpt"),
      color: "blue",
    },
    {
      title: t("news2.title"),
      date: "2024-12-10",
      category: t("news2.category"),
      excerpt: t("news2.excerpt"),
      color: "purple",
    },
    {
      title: t("news3.title"),
      date: "2024-12-05",
      category: t("news3.category"),
      excerpt: t("news3.excerpt"),
      color: "orange",
    },
  ];

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
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
                      className={`rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent p-8 shadow-sm`}
                    >
                      <div className="flex flex-wrap items-center gap-4">
                        <span className={`rounded-full px-3 py-1 text-xs font-medium ${colors.badge}`}>
                          {news.category}
                        </span>
                        <span className="text-sm text-slate-400">{news.date}</span>
                      </div>
                      <h2 className="mt-4 text-xl font-bold text-slate-900 md:text-2xl">{news.title}</h2>
                      <p className="mt-3 text-slate-500">{news.excerpt}</p>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t("emptyTitle")}</h3>
                <p className="mt-2 text-slate-500">
                  {t("emptyDescription")}
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
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {t("ctaTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                {t("ctaDescription")}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(14,165,233,0.5)]"
              >
                {tc("contactUs")}
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
