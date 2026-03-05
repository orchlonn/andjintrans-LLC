"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const anyModeCodes = ["EXW", "FCA", "CPT", "CIP", "DAP", "DPU", "DDP"] as const;
const seaCodes = ["FAS", "FOB", "CFR", "CIF"] as const;
const recKeys = ["r1", "r2", "r3"] as const;

export default function IncotermsPage() {
  const t = useTranslations("ResourcesIncoterms");
  const tc = useTranslations("Common");

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is Incoterms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("whatTitle")}</h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600">
                {t("whatDescription")}
              </p>
              <p className="mt-4 text-lg font-semibold text-sky-600">
                {t("whatHighlight")}
              </p>
            </div>
          </motion.section>

          {/* Any Mode Terms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("anyModeTitle")}</h2>
            <div className="mt-8 space-y-4">
              {anyModeCodes.map((code, index) => (
                <motion.div
                  key={code}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                      <span className="text-sm font-bold text-white">{code}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{t(`anyMode.${code}.name`)}</h3>
                      <p className="mt-2 text-slate-600">{t(`anyMode.${code}.description`)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Sea Terms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("seaTitle")}</h2>
            <div className="mt-8 space-y-4">
              {seaCodes.map((code, index) => (
                <motion.div
                  key={code}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600">
                      <span className="text-sm font-bold text-white">{code}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">{t(`sea.${code}.name`)}</h3>
                      <p className="mt-2 text-slate-600">{t(`sea.${code}.description`)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("recommendationsTitle")}</h2>
            <div className="mt-8 space-y-4">
              {recKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-sky-600">{t(`recommendations.${key}.title`)}</h3>
                  <p className="mt-2 text-slate-600">{t(`recommendations.${key}.description`)}</p>
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
