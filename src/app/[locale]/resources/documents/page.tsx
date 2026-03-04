"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const categories = [
  { key: "cat1", items: ["d1", "d2", "d3", "d4"] },
  { key: "cat2", items: ["d1", "d2", "d3", "d4", "d5"] },
  { key: "cat3", items: ["d1", "d2", "d3", "d4"] },
  { key: "cat4", items: ["d1", "d2", "d3", "d4"] },
  { key: "cat5", items: ["d1", "d2", "d3"] },
  { key: "cat6", items: ["d1", "d2", "d3", "d4"] },
  { key: "cat7", items: ["d1", "d2", "d3"] },
] as const;

export default function DocumentsPage() {
  const t = useTranslations("ResourcesDocuments");
  const tc = useTranslations("Common");

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
        <div className="mx-auto max-w-5xl">
          {/* Document Categories */}
          {categories.map((category, categoryIndex) => (
            <motion.section
              key={category.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{t(`${category.key}Title`)}</h2>
              <div className="mt-6 space-y-3">
                {category.items.map((itemKey, itemIndex) => (
                  <motion.div
                    key={itemKey}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-500">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{t(`${category.key}.${itemKey}.name`)}</h4>
                      <p className="mt-1 text-sm text-slate-500">{t(`${category.key}.${itemKey}.description`)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Back to Resources */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/resources"
              className="inline-flex items-center text-sky-600 hover:text-sky-500"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tc("backToResources")}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
