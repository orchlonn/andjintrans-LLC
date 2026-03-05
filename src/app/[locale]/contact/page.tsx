"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const colorClasses: Record<
  string,
  { border: string; bg: string; icon: string }
> = {
  cyan: {
    border: "border-sky-200",
    bg: "from-sky-50",
    icon: "from-sky-400 to-blue-500",
  },
  emerald: {
    border: "border-sky-200",
    bg: "from-sky-50",
    icon: "from-sky-500 to-blue-500",
  },
  purple: {
    border: "border-sky-200",
    bg: "from-sky-50",
    icon: "from-sky-400 to-sky-600",
  },
  orange: {
    border: "border-amber-200",
    bg: "from-amber-50",
    icon: "from-amber-400 to-amber-500",
  },
};

const RECIPIENT_EMAIL = "info@andjintrans.com";

export default function ContactPage() {
  const t = useTranslations("Contact");
  const tc = useTranslations("Common");

  const contactInfo = [
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: t("address"),
      content: t("addressContent"),
      color: "cyan",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: t("phone"),
      content: t("phoneContent"),
      color: "emerald",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: t("email"),
      content: t("emailContent"),
      color: "purple",
    },
    {
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: t("website"),
      content: t("websiteContent"),
      color: "orange",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const subject = encodeURIComponent(
      t("emailSubject", { name }),
    );
    const body = encodeURIComponent(
      [
        `${t("nameLabel")}: ${fd.get("name") ?? ""}`,
        `${t("companyLabel")}: ${fd.get("company") ?? ""}`,
        `${t("emailLabel")}: ${fd.get("email") ?? ""}`,
        `${t("phoneLabel")}: ${fd.get("phone") ?? ""}`,
        `${t("serviceLabel")}: ${fd.get("service") ?? ""}`,
        "",
        `${t("messageLabel")}:`,
        fd.get("message") ?? "",
      ].join("\n"),
    );
    window.location.href = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  }

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
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1200&q=80"
            alt={t("imageAlt")}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Contact Info Grid */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {contactInfo.map((info, index) => {
                const colors = colorClasses[info.color];
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent p-8 shadow-sm`}
                  >
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colors.icon}`}
                    >
                      <span className="text-white">{info.icon}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {info.title}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-slate-600">
                      {info.content}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Contact Form */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              {/* Decorative elements */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-200/40 blur-[100px]" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-200/40 blur-[100px]" />

              <div className="relative">
                {/* Header */}
                <div className="mb-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 shadow-lg shadow-sky-500/25"
                  >
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    {t("formTitle")}
                  </h2>
                  <p className="mt-3 text-slate-600">
                    {t("formDescription")}
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  action={`mailto:${RECIPIENT_EMAIL}`}
                  method="get"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Name Field */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                      >
                        <svg
                          className="h-4 w-4 text-sky-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                        {t("nameLabel")}
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                          placeholder={t("namePlaceholder")}
                        />
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500/0 via-sky-500/0 to-sky-500/0 opacity-0 transition-opacity duration-300 group-focus-within:opacity-100" />
                      </div>
                    </div>

                    {/* Company Field */}
                    <div className="group">
                      <label
                        htmlFor="company"
                        className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                      >
                        <svg
                          className="h-4 w-4 text-sky-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        {t("companyLabel")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                        placeholder={t("companyPlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Email Field */}
                    <div className="group">
                      <label
                        htmlFor="email"
                        className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                      >
                        <svg
                          className="h-4 w-4 text-sky-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        {t("emailLabel")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                        placeholder="example@email.com"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                      >
                        <svg
                          className="h-4 w-4 text-amber-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        {t("phoneLabel")}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="block w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                        placeholder="99******"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="group">
                    <label
                      htmlFor="service"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <svg
                        className="h-4 w-4 text-sky-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {t("serviceLabel")}
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        className="block w-full appearance-none rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 pr-12 text-slate-900 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                      >
                        <option value="" className="bg-white">
                          {t("serviceDefault")}
                        </option>
                        <option value="air" className="bg-white">
                          {t("serviceAir")}
                        </option>
                        <option value="sea" className="bg-white">
                          {t("serviceSea")}
                        </option>
                        <option value="rail" className="bg-white">
                          {t("serviceRail")}
                        </option>
                        <option value="road" className="bg-white">
                          {t("serviceRoad")}
                        </option>
                        <option value="transit" className="bg-white">
                          {t("serviceTransit")}
                        </option>
                        <option value="insurance" className="bg-white">
                          {t("serviceInsurance")}
                        </option>
                        <option value="customs" className="bg-white">
                          {t("serviceCustoms")}
                        </option>
                        <option value="domestic" className="bg-white">
                          {t("serviceDomestic")}
                        </option>
                        <option value="other" className="bg-white">
                          {t("serviceOther")}
                        </option>
                      </select>
                      <div className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2">
                        <svg
                          className="h-5 w-5 text-slate-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="group">
                    <label
                      htmlFor="message"
                      className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600"
                    >
                      <svg
                        className="h-4 w-4 text-sky-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      {t("messageLabel")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="block w-full resize-none rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 placeholder-slate-400 transition-all duration-300 focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-sky-500/10"
                      placeholder={t("messagePlaceholder")}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-4"
                  >
                    <button
                      type="submit"
                      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 p-[2px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]"
                    >
                      <span className="flex w-full items-center justify-center gap-3 rounded-[14px] bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                        <span>{t("submit")}</span>
                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.section>

          {/* Working Hours */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 shadow-sm md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {t("workingHoursTitle")}
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-400">{t("weekdays")}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {t("weekdaysHours")}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-sm text-slate-400">{t("weekends")}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    {t("weekendsHours")}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
