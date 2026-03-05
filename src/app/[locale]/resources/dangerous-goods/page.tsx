"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const classKeys = ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"] as const;
const classLabels = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8", "Class 9"];
const requiredKeys = ["r1", "r2", "r3", "r4", "r5", "r6"] as const;

export default function DangerousGoodsPage() {
  const t = useTranslations("ResourcesDangerousGoods");
  const tc = useTranslations("Common");

  const practicalTips = t.raw("practicalTips") as string[];

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
        badgeColor="orange"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is DG */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600">
                {t("whatIsDG")}
              </p>
            </div>
          </motion.section>

          {/* DG Classes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("classesTitle")}</h2>
            <div className="mt-8 space-y-4">
              {classKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                      <span className="text-xs font-bold text-white">{classLabels[index]}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{t(`classes.${key}.title`)}</h3>
                      <p className="mt-2 text-slate-600">{t(`classes.${key}.description`)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Required Info */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("requiredTitle")}</h2>
            <p className="mt-4 text-slate-600">
              {t("requiredDescription")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {requiredKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{t(`requiredInfo.${key}.item`)}</h4>
                  <p className="mt-1 text-sm text-slate-600">{t(`requiredInfo.${key}.description`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Practical Tips */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("practicalTitle")}</h2>
            <div className="mt-8 space-y-4">
              {practicalTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-500">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="pt-2 text-slate-600">{tip}</p>
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
