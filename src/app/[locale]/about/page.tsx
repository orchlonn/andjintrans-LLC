"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const partnerLogos = [
  { src: "/Logo1.jpg", alt: "Partner 1" },
  { src: "/Logo2.png", alt: "Partner 2" },
  { src: "/Logo3.jpg", alt: "Partner 3" },
  { src: "/logo4.jpg", alt: "Partner 4" },
  { src: "/Logo5.jpg", alt: "Partner 5" },
  { src: "/Logo6.jpg", alt: "Partner 6" },
];

export default function AboutPage() {
  const t = useTranslations("About");
  const tc = useTranslations("Common");

  const values = t.raw("values") as string[];
  const principles = t.raw("principles") as string[];
  const dgItems = t.raw("dgItems") as string[];

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
      />

      {/* Transport image */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
        >
          <Image
            src="/about_us.jpeg"
            alt={t("imageAlt")}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("introTitle")}
            </h2>
            <div className="mt-6 space-y-4 text-slate-600">
              <p>{t("introP1")}</p>
              <p>{t("introP2")}</p>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 grid gap-8 md:grid-cols-2"
          >
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t("missionTitle")}</h3>
              <p className="mt-4 text-slate-600">
                {t("missionDescription")}
              </p>
            </div>

            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-sky-600">
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t("visionTitle")}</h3>
              <p className="mt-4 text-slate-600">
                {t("visionDescription")}
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("valuesTitle")}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-500">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-600">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Principles */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("principlesTitle")}
            </h2>
            <div className="mt-8 space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-500">
                    <span className="font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-slate-600">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Partners */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("partnersTitle")}
            </h2>
            <p className="mt-3 text-slate-600">
              {t("partnersDescription")}
            </p>
            <div className="mt-10 overflow-hidden">
              <div className="flex w-max animate-partner-scroll">
                {[1, 2].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center gap-4 md:gap-6"
                  >
                    {partnerLogos.map((partner) => (
                      <div
                        key={`${copy}-${partner.src}`}
                        className="flex h-32 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl md:h-40 md:w-52"
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-2xl [&_img]:rounded-2xl">
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            fill
                            className="object-contain object-center"
                            sizes="208px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* DG Specialization Highlight */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("dgTitle")}
            </h2>
            <p className="mt-6 text-slate-600">
              {t("dgDescription")}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {dgItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-sky-50 p-4 text-center shadow-sm"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
