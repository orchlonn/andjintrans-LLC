"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

// Transport Icons
function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

function ShipIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z" />
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

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
}

function TransitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
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

function DeliveryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z" />
      <path d="M5 6h5v2H5zm14 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

function ExportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
    </svg>
  );
}

const colorClasses: Record<
  string,
  { border: string; bg: string; hover: string }
> = {
  cyan: {
    border: "border-sky-200",
    bg: "from-sky-50",
    hover:
      "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100",
  },
  blue: {
    border: "border-sky-200",
    bg: "from-sky-50",
    hover:
      "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100",
  },
  purple: {
    border: "border-sky-200",
    bg: "from-sky-50",
    hover:
      "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100",
  },
  emerald: {
    border: "border-sky-200",
    bg: "from-sky-50",
    hover:
      "hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100",
  },
  orange: {
    border: "border-amber-200",
    bg: "from-amber-50",
    hover:
      "hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100",
  },
};

export default function ServicesPage() {
  const t = useTranslations("Services");
  const tc = useTranslations("Common");

  const mainServices = [
    {
      key: "air",
      href: "/services/air",
      Icon: PlaneIcon,
      color: "cyan",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      key: "sea",
      href: "/services/sea",
      Icon: ShipIcon,
      color: "blue",
      gradient: "from-sky-500 to-blue-600",
    },
    {
      key: "rail",
      href: "/services/rail",
      Icon: TrainIcon,
      color: "purple",
      gradient: "from-sky-400 to-sky-600",
    },
    {
      key: "road",
      href: "/services/road",
      Icon: TruckIcon,
      color: "emerald",
      gradient: "from-sky-500 to-blue-500",
    },
    {
      key: "transit",
      href: "/services/transit",
      Icon: TransitIcon,
      color: "cyan",
      gradient: "from-sky-400 to-blue-500",
    },
    {
      key: "export",
      href: "/services/export",
      Icon: ExportIcon,
      color: "cyan",
      gradient: "from-sky-400 to-blue-500",
    },
  ];

  const additionalServices = [
    {
      key: "insurance",
      href: "/services/insurance",
      Icon: ShieldIcon,
      gradient: "from-sky-400 to-sky-600",
    },
    {
      key: "customs",
      href: "/services/customs",
      Icon: DocumentIcon,
      gradient: "from-sky-400 to-blue-500",
    },
    {
      key: "domestic",
      href: "/services/domestic",
      Icon: DeliveryIcon,
      gradient: "from-sky-500 to-blue-500",
    },
  ];

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
      />

      {/* Hero image */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80"
            alt={t("imageAlt")}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Main Transport Services */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("mainTitle")}
            </h2>
            <p className="mt-4 text-slate-500">
              {t("mainDescription")}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service, index) => {
                const colors = colorClasses[service.color];
                const Icon = service.Icon;
                return (
                  <motion.div
                    key={service.key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={service.href}
                      className={`group relative block h-full overflow-hidden rounded-3xl border ${colors.border} bg-white p-8 shadow-sm transition-all duration-500 ${colors.hover}`}
                    >
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-slate-900">
                        {t(`${service.key}.title`)}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {t(`${service.key}.description`)}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm text-sky-600 group-hover:text-sky-600">
                        {tc("learnMore")}
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

          {/* Additional Services */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              {t("additionalTitle")}
            </h2>
            <p className="mt-4 text-slate-500">
              {t("additionalDescription")}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {additionalServices.map((service, index) => {
                const Icon = service.Icon;
                return (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={service.href}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-sky-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-100"
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">
                      {t(`${service.key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-500">
                      {t(`${service.key}.description`)}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm text-sky-600 group-hover:text-sky-600">
                      {tc("learnMore")}
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
              ); })}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-50 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {t("ctaTitle")}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                {t("ctaDescription")}
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-100"
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
          </motion.section>
        </div>
      </div>
    </>
  );
}
