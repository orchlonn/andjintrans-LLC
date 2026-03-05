"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import PageHeader from "@/components/PageHeader";

export default function ExportServicePage() {
  const t = useTranslations("ServicesExport");
  const tc = useTranslations("Common");

  const exportGoods = [
    { title: t("goods.g1.title"), description: t("goods.g1.description") },
    { title: t("goods.g2.title"), description: t("goods.g2.description") },
    { title: t("goods.g3.title"), description: t("goods.g3.description") },
    { title: t("goods.g4.title"), description: t("goods.g4.description") },
  ];

  const services = [
    { title: t("services.s1.title"), description: t("services.s1.description") },
    { title: t("services.s2.title"), description: t("services.s2.description") },
    { title: t("services.s3.title"), description: t("services.s3.description") },
    { title: t("services.s4.title"), description: t("services.s4.description") },
    { title: t("services.s5.title"), description: t("services.s5.description") },
    { title: t("services.s6.title"), description: t("services.s6.description") },
  ];

  const processSteps = [
    { step: 1, title: t("steps.s1.title"), description: t("steps.s1.description") },
    { step: 2, title: t("steps.s2.title"), description: t("steps.s2.description") },
    { step: 3, title: t("steps.s3.title"), description: t("steps.s3.description") },
    { step: 4, title: t("steps.s4.title"), description: t("steps.s4.description") },
    { step: 5, title: t("steps.s5.title"), description: t("steps.s5.description") },
    { step: 6, title: t("steps.s6.title"), description: t("steps.s6.description") },
  ];

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
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("introTitle")}
            </h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-sky-50 p-8">
              <p className="text-lg leading-relaxed text-slate-600">
                {t("introP1")}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {t("introP2")}
              </p>
            </div>
          </section>

          {/* Export Goods */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("goodsTitle")}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {exportGoods.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("servicesTitle")}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <h3 className="font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("processTitle")}
            </h2>
            <div className="mt-8 space-y-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Note */}
          <section className="mb-16">
            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
              <h3 className="text-lg font-semibold text-sky-600">
                {t("whyTitle")}
              </h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                {(t.raw("whyItems") as string[]).map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {t("ctaTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                {t("ctaDescription")}
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-100"
                >
                  {tc("contactUs")}
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
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
