"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const primaryKeys = [0, 1, 2, 3] as const;
const secondaryKeys = [0, 1, 2, 3, 4] as const;
const tertiaryKeys = [0, 1, 2, 3, 4, 5, 6] as const;
const commonKeys = [0, 1, 2, 3] as const;
const protectiveKeys = [0, 1, 2, 3, 4] as const;
const tipKeys = [0, 1, 2, 3, 4] as const;

export default function PackagingPage() {
  const t = useTranslations("ResourcesPackaging");
  const tc = useTranslations("Common");

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
        badgeColor="emerald"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Why Important */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("whyTitle")}</h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-600">
                {t("whyDescription")}
              </p>
            </div>
          </motion.section>

          {/* Primary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("primaryTitle")}</h2>
            <p className="mt-2 text-slate-600">{t("primaryDescription")}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {primaryKeys.map((i, index) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{t(`primary_${i}_title`)}</h4>
                  <p className="mt-1 text-sm text-slate-600">{t(`primary_${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Secondary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("secondaryTitle")}</h2>
            <p className="mt-2 text-slate-600">{t("secondaryDescription")}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {secondaryKeys.map((i, index) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{t(`secondary_${i}_title`)}</h4>
                  <p className="mt-1 text-sm text-slate-600">{t(`secondary_${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tertiary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("tertiaryTitle")}</h2>
            <p className="mt-2 text-slate-600">{t("tertiaryDescription")}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tertiaryKeys.map((i, index) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{t(`tertiary_${i}_title`)}</h4>
                  <p className="mt-1 text-sm text-slate-600">{t(`tertiary_${i}_desc`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Common Packaging Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("commonTitle")}</h2>
            <div className="mt-8 space-y-6">
              {commonKeys.map((i, index) => {
                const items = t.raw(`common_${i}_items`) as string[];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-semibold text-slate-900">{t(`common_${i}_category`)}</h3>
                    <ul className="mt-3 space-y-2">
                      {items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Protective Materials */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("protectiveTitle")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {protectiveKeys.map((i, index) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-amber-600">{t(`protective_${i}_title`)}</h4>
                  <p className="mt-1 text-sm text-slate-600">{t(`protective_${i}_desc`)}</p>
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
              {tipKeys.map((i, index) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm"
                >
                  <p className="text-sm text-slate-600">{t(`tip_${i}_type`)}</p>
                  <p className="mt-1 font-semibold text-sky-600">{t(`tip_${i}_rec`)}</p>
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
