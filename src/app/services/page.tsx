"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const mainServices = [
  {
    title: "Агаарын тээвэр",
    description:
      "Яаралтай, өндөр үнэ цэнтэй ачааг богино хугацаанд хүргэхэд хамгийн тохиромжтой. Airport-to-Airport, Door-to-Door, Consolidation, Express, Special Handling, DG/Chemical Cargo.",
    href: "/services/air",
    Icon: PlaneIcon,
    color: "cyan",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Далайн тээвэр",
    description:
      "Их хэмжээний ачааг урт зайд өртөг оновчтой байдлаар тээвэрлэх хамгийн түгээмэл шийдэл. FCL/LCL, Port-to-Port, Door-to-Door, Special Equipment, Project & OOG Cargo.",
    href: "/services/sea",
    Icon: ShipIcon,
    color: "blue",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Төмөр замын тээвэр",
    description:
      "Их жин, их эзэлхүүнтэй ачааг тогтвортой хугацаанд бага зардлаар тээвэрлэх. Контейнер, вагон тээвэр, транзит, холимог тээвэр, төсөл ба овортой ачаа.",
    href: "/services/rail",
    Icon: TrainIcon,
    color: "purple",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Авто замын тээвэр",
    description:
      "Хил дамнасан болон дотоод хүргэлтийн хамгийн уян хатан шийдэл. Хил дамнасан, дотоод, контейнер татан авалт, LTL/FTL, төсөл ачаа, Door-to-Door.",
    href: "/services/road",
    Icon: TruckIcon,
    color: "emerald",
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Транзит тээвэр",
    description:
      "Гуравдагч орны ачааг Монгол Улсын нутгаар дамжуулан шилжүүлэн тээвэрлэх. Rail Transit, Road Transit, Multimodal Transit, Project & Special Cargo Transit.",
    href: "/services/transit",
    Icon: TransitIcon,
    color: "orange",
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Экспорт тээвэр",
    description:
      "Монгол Улсаас гадаад руу бараа, бүтээгдэхүүн экспортлоход шаардлагатай тээвэрлэлт, баримт бичиг бүрдүүлэлт, гаалийн зохион байгуулалтыг нэг цэгээс хийх.",
    href: "/services/export",
    Icon: ExportIcon,
    color: "orange",
    gradient: "from-orange-400 to-red-500",
  },
];

const additionalServices = [
  {
    title: "Ачааны даатгал",
    description:
      "Тээвэрлэлтийн явцад үүсч болзошгүй гэмтэл, алдагдал, хулгай, осол, байгалийн эрсдэлээс хамгаалах All Risks, Named Perils, ICC A/B/C даатгалын шийдэл.",
    href: "/services/insurance",
    Icon: ShieldIcon,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Гаалийн бүрдүүлэлт",
    description:
      "Импорт, экспорт, транзит тээврийн гаалийн мэдүүлэг, HS код, татвар/хураамжийн тооцоолол, шалгалт/хяналтын процесс зохион байгуулах үйлчилгээ.",
    href: "/services/customs",
    Icon: DocumentIcon,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Дотоодын хүргэлт",
    description:
      "Улаанбаатар хот болон орон нутагт бараа, тоног төхөөрөмж, түүхий эд, контейнер болон задгай ачааг агуулах–терминал–үйлдвэр–харилцагч хооронд хүргэх.",
    href: "/services/domestic",
    Icon: DeliveryIcon,
    gradient: "from-emerald-400 to-cyan-500",
  },
];

const colorClasses: Record<
  string,
  { border: string; bg: string; hover: string }
> = {
  cyan: {
    border: "border-cyan-500/30",
    bg: "from-cyan-500/10",
    hover:
      "hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
  },
  blue: {
    border: "border-blue-500/30",
    bg: "from-blue-500/10",
    hover:
      "hover:border-blue-400/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  },
  purple: {
    border: "border-purple-500/30",
    bg: "from-purple-500/10",
    hover:
      "hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
  },
  emerald: {
    border: "border-emerald-500/30",
    bg: "from-emerald-500/10",
    hover:
      "hover:border-emerald-400/50 hover:shadow-[0_0_40px_rgba(52,211,153,0.15)]",
  },
  orange: {
    border: "border-orange-500/30",
    bg: "from-orange-500/10",
    hover:
      "hover:border-orange-400/50 hover:shadow-[0_0_40px_rgba(251,146,60,0.15)]",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        badge="Бидний үйлчилгээ"
        title="Тээврийн"
        highlightedTitle="цогц шийдэл"
        description="Агаар, далай, төмөр зам, авто тээврээр импорт, экспорт, транзит тээврийг нэг цэгээс зохион байгуулж, маршрут–хугацаа–өртөг–эрсдэлийн тэнцвэр дээр үндэслэн шийдэл санал болгоно."
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          {/* Main Transport Services */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Үндсэн тээврийн үйлчилгээ
            </h2>
            <p className="mt-4 text-slate-400">
              Дэлхийн аль ч өнцгөөс тээвэрлэлт хийх боломжтой агент/түншийн
              сүлжээ, туршлагатай багийн зохион байгуулалт.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service, index) => {
                const colors = colorClasses[service.color];
                const Icon = service.Icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <Link
                      href={service.href}
                      className={`group relative block h-full overflow-hidden rounded-3xl border ${colors.border} bg-gradient-to-br ${colors.bg} to-transparent p-8 backdrop-blur-xl transition-all duration-500 ${colors.hover}`}
                    >
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                        <Icon className="h-7 w-7 text-slate-900" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
                        Дэлгэрэнгүй
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
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Нэмэлт үйлчилгээ
            </h2>
            <p className="mt-4 text-slate-400">
              Тээвэрлэлттэй холбоотой эрсдэлийг бууруулах, саатлаас сэргийлэх
              дэмжлэг үйлчилгээ.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {additionalServices.map((service, index) => {
                const Icon = service.Icon;
                return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Link
                    href={service.href}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-8 backdrop-blur-xl transition-all duration-500 hover:border-purple-400/50"
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                      <Icon className="h-7 w-7 text-slate-900" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {service.description}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
                      Дэлгэрэнгүй
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
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-purple-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Ачааны төрөл, хэмжээ, хугацаа, маршрутын шаардлагад тохируулсан
                үнийн санал авахыг хүсвэл бидэнтэй холбогдоно уу.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
              >
                Холбоо барих
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
