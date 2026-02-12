"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MotionLink = motion(Link);

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

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

function ExportIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z" />
    </svg>
  );
}

const services = [
  {
    title: "Агаарын тээвэр",
    description:
      "Яаралтай, өндөр үнэ цэнтэй ачаанд тохиромжтой. Airport-to-Airport, Door-to-Door, Express горимтой.",
    href: "/services/air",
    icon: PlaneIcon,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Далайн тээвэр",
    description:
      "Их хэмжээний ачаанд өртөг оновчтой. FCL/LCL, тусгай тоноглол, төсөл ачаа.",
    href: "/services/sea",
    icon: ShipIcon,
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    title: "Төмөр замын тээвэр",
    description:
      "Их жин, их эзэлхүүнтэй ачаанд тогтвортой хугацаатай сонголт. Контейнер, вагон тээвэр.",
    href: "/services/rail",
    icon: TrainIcon,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Авто замын тээвэр",
    description:
      "Хил дамнасан болон дотоод хүргэлтийн уян хатан шийдэл. LTL/FTL ачаа.",
    href: "/services/road",
    icon: TruckIcon,
    gradient: "from-emerald-400 to-cyan-500",
  },
  {
    title: "Транзит тээвэр",
    description:
      "Гуравдагч орны ачааг Монголын нутгаар дамжуулан тээвэрлэх тусгай зохион байгуулалт.",
    href: "/services/transit",
    icon: TransitIcon,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Экспорт тээвэр",
    description:
      "Монголоос гадаад руу бараа экспортлох тээвэрлэлт, баримт бичиг, гаалийн зохион байгуулалт.",
    href: "/services/export",
    icon: ExportIcon,
    gradient: "from-orange-400 to-red-500",
  },
];

const additionalServices = [
  {
    title: "Ачааны даатгал",
    description:
      "All Risks, Named Perils, ICC A/B/C нөхцөлтэй даатгалын шийдэл, нэхэмжлэл гаргахад дэмжлэг.",
    href: "/services/insurance",
  },
  {
    title: "Гаалийн бүрдүүлэлт",
    description:
      "Импорт, экспорт, транзит ачаанд гаалийн мэдүүлэг, HS код, татвар тооцоолол.",
    href: "/services/customs",
  },
  {
    title: "Дотоодын хүргэлт",
    description:
      "Улаанбаатар хот болон орон нутагт агуулах–терминал–үйлдвэр хоорондын хүргэлт.",
    href: "/services/domestic",
  },
];

const resources = [
  {
    title: "Инкотермс 2020",
    description: "11 нөхцөлийн тайлбар, хэрэглээ",
    href: "/resources/incoterms",
  },
  {
    title: "Контейнерын төрөл",
    description: "Dry, Reefer, Open Top, Flat Rack...",
    href: "/resources/containers",
  },
  {
    title: "Вагоны төрөл",
    description: "Битүү, хагас, тавцант, цистерн...",
    href: "/resources/wagons",
  },
  {
    title: "Аюултай ачаа (DG)",
    description: "UN Class 1-9, SDS/MSDS шаардлага",
    href: "/resources/dangerous-goods",
  },
  {
    title: "Сав баглаа боодол",
    description: "Савлагааны төрөл, стандарт",
    href: "/resources/packaging",
  },
  {
    title: "Шаардлагатай баримт",
    description: "Invoice, B/L, AWB, CMR...",
    href: "/resources/documents",
  },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center px-6 pt-20"
      >
        {/* Animated transport route lines */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Curved route paths */}
            <motion.path
              d="M-100,400 Q300,200 600,350 T1300,300"
              fill="none"
              stroke="url(#routeGradient1)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            <motion.path
              d="M-100,500 Q400,600 700,400 T1300,450"
              fill="none"
              stroke="url(#routeGradient2)"
              strokeWidth="2"
              strokeDasharray="8 8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 3.5, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="routeGradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgb(34,211,238)" stopOpacity="0" />
                <stop
                  offset="50%"
                  stopColor="rgb(34,211,238)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(168,85,247)"
                  stopOpacity="0"
                />
              </linearGradient>
              <linearGradient
                id="routeGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgb(168,85,247)" stopOpacity="0" />
                <stop
                  offset="50%"
                  stopColor="rgb(236,72,153)"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="rgb(251,146,60)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Moving dots along paths */}
            <motion.circle
              r="4"
              fill="rgb(34,211,238)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              style={{
                offsetPath: "path('M-100,400 Q300,200 600,350 T1300,300')",
              }}
            />
            <motion.circle
              r="3"
              fill="rgb(168,85,247)"
              initial={{ offsetDistance: "0%" }}
              animate={{ offsetDistance: "100%" }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
              style={{
                offsetPath: "path('M-100,500 Q400,600 700,400 T1300,450')",
              }}
            />
          </svg>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 mt-16 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 md:mt-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            15+ жилийн туршлагатай баг
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-white">Олон улсын тээвэр</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              зуучлалын найдвартай түнш
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-8 max-w-3xl text-lg text-slate-400 sm:text-xl"
          >
            Бид Агаар • Далай • Төмөр зам • Авто тээврээр импорт, экспорт,
            транзит тээврийг{" "}
            <span className="text-cyan-300">нэг цэгээс зохион байгуулж</span>,
            цаг хугацаа – зардлыг зөв оновчлон, мэдээллийн ил тод байдлыг
            хангана.
          </motion.p>

          {/* Highlight: DG Specialization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto mt-6 max-w-2xl rounded-2xl border border-orange-500/30 bg-orange-500/10 p-4"
          >
            <p className="text-sm text-orange-300">
              <strong>Онцлох чиглэл:</strong> Химийн болон аюултай ачаа
              (Dangerous Goods)-ны тээвэрлэлтийн ангилал, шошгололт, SDS/MSDS
              баримт бичиг, савлагаа, маршрутын эрсдэлийн удирдлагад мэргэшсэн.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MotionLink
              href="/contact"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(34,211,238,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.2 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-colors hover:from-cyan-300 hover:to-blue-400"
            >
              Үнийн санал авах
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
            </MotionLink>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Тээврийн шийдлүүд
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 grid grid-cols-2 gap-8 sm:grid-cols-4"
          >
            {[
              { value: "15+", label: "Жилийн туршлага" },
              { value: "6", label: "Тээврийн хэлбэр" },
              { value: "24/7", label: "Хяналт" },
              { value: "100%", label: "Ил тод байдал" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl md:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-500">Доош гүйлгэх</span>
            <div className="h-12 w-6 rounded-full border border-white/20 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-full rounded-full bg-cyan-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="relative px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-8 text-center md:mb-16">
            <motion.span className="inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-medium text-cyan-400">
              Бидний үйлчилгээ
            </motion.span>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Тээврийн{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                цогц шийдэл
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Маршрут, хугацаа, өртөг, эрсдэлийн тэнцвэр дээр суурилсан
              хувилбаруудыг санал болгоно.
            </p>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Link
                    href={service.href}
                    className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
                      >
                        <IconComponent className="h-7 w-7 text-slate-900" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {service.description}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm text-cyan-400 group-hover:text-cyan-300">
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
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-8 text-center md:mb-16">
            <motion.span className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 text-sm font-medium text-purple-400">
              Нэмэлт үйлчилгээ
            </motion.span>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Эрсдэлийг{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                бууруулсан шийдэл
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  href={service.href}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-8 backdrop-blur-xl transition-all hover:border-purple-400/50"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl transition-all group-hover:scale-150" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-slate-400">{service.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm text-purple-400 group-hover:text-purple-300">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-8 text-center md:mb-16">
            <motion.span className="inline-block rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
              Танд хэрэгтэй
            </motion.span>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Мэдлэгийн{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                сан
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Link
                  href={item.href}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                    <span className="text-lg font-bold text-slate-900">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300"
            >
              Бүх мэдээллийг харах
              <svg
                className="ml-2 h-4 w-4"
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-purple-500/10 p-8 text-center backdrop-blur-xl sm:p-12"
          >
            <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]" />
            <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/30 blur-[120px]" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Таны ачаанд тохирсон шийдлийг хамтдаа төлөвлөе
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-slate-400">
                Дэлхийн аль ч өнцгөөс тээвэрлэлт хийх боломжтой агент/түншийн
                сүлжээ, туршлагатай багийн зохион байгуулалтаар таны ачааг
                байгаа газраас нь авч, эцсийн цэг хүртэл удирдан зохион
                байгуулна.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
