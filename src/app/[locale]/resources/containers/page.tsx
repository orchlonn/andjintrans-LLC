"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const containerKeys = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"] as const;
const tipKeys = ["t1", "t2", "t3", "t4", "t5", "t6"] as const;

export default function ContainersPage() {
  const t = useTranslations("ResourcesContainers");
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
          {/* Selection Note */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("selectionTitle")}</h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-500">
                {t("selectionDescription")}
              </p>
            </div>
          </motion.section>

          {/* Container Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("typesTitle")}</h2>
            <div className="mt-8 space-y-6">
              {containerKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">{t(`containers.${key}.title`)}</h3>
                      <div className="mt-3 space-y-2 text-sm text-slate-500">
                        <p><span className="text-sky-600">{t("labelUsage")}:</span> {t(`containers.${key}.usage`)}</p>
                        {t.has(`containers.${key}.sizes`) && <p><span className="text-sky-600">{t("labelSizes")}:</span> {t(`containers.${key}.sizes`)}</p>}
                        {t.has(`containers.${key}.advantage`) && <p><span className="text-sky-600">{t("labelAdvantage")}:</span> {t(`containers.${key}.advantage`)}</p>}
                        {t.has(`containers.${key}.feature`) && <p><span className="text-sky-600">{t("labelFeature")}:</span> {t(`containers.${key}.feature`)}</p>}
                        {t.has(`containers.${key}.note`) && <p><span className="text-amber-600">{t("labelNote")}:</span> {t(`containers.${key}.note`)}</p>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Tips */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("quickTipsTitle")}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tipKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm"
                >
                  <p className="text-sm text-slate-500">{t(`quickTips.${key}.type`)}</p>
                  <p className="mt-1 font-semibold text-sky-600">{t(`quickTips.${key}.recommendation`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

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
