"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

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

function FloatingOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function ServiceCard({
  title,
  description,
  subtext,
  index,
  size = "normal",
}: {
  title: string;
  description: string;
  subtext: string;
  index: number;
  size?: "normal" | "large" | "wide";
}) {
  const sizeClasses = {
    normal: "",
    large: "md:col-span-2 md:row-span-2",
    wide: "md:col-span-2",
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/40 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] ${sizeClasses[size]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <motion.div
          className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <span className="text-lg font-bold text-slate-900">{index + 1}</span>
        </motion.div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {description}
        </p>
        <p className="mt-3 text-xs text-slate-400">{subtext}</p>
      </div>
    </motion.article>
  );
}

const navItems = [
  { href: "#home", label: "Нүүр" },
  { href: "#about", label: "Бидний тухай" },
  { href: "#services", label: "Үйлчилгээ" },
  { href: "#resources", label: "Танд хэрэгтэй" },
  { href: "#contact", label: "Холбоо барих" },
];

export default function Home() {
  const heroRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "resources", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Агаарын тээвэр",
      description:
        "Яаралтай, өндөр үнэ цэнтэй ачаанд тохиромжтой. Нисэх буудлаас нисэх буудал, хаалганаас хаалганд, нэгтгэл болон шуурхай горимтой ачааг зохион байгуулна.",
      subtext:
        "Ачаа хүлээн авах → бичиг баримт → тээвэрлэлт → гааль → хүргэлт",
      size: "large" as const,
    },
    {
      title: "Далайн тээвэр",
      description:
        "Их хэмжээний ачаанд өртөг оновчтой. FCL / LCL, боомтоос боомт, тусгай тоноглол.",
      subtext: "Storage / demurrage эрсдэлийг бууруулна",
      size: "normal" as const,
    },
    {
      title: "Төмөр замын тээвэр",
      description:
        "Их жин, их эзэлхүүнтэй ачаанд тогтвортой хугацаатай, өртөг багатай сонголт.",
      subtext: "Контейнер болон вагон тээвэр, транзит урсгал",
      size: "normal" as const,
    },
    {
      title: "Авто замын тээвэр",
      description:
        "Хил дамнасан болон дотоод хүргэлтийн уян хатан шийдэл. LTL / FTL ачаа.",
      subtext: "Баримтын шалгалт, гааль-терминалын уялдаа",
      size: "normal" as const,
    },
    {
      title: "Транзит тээвэр",
      description:
        "Гуравдагч орны ачааг Монгол Улсын нутгаар дамжуулан тээвэрлэх тусгай зохион байгуулалт.",
      subtext: "Хил, терминал, гаалийн горимыг нэг цэгээс хянана",
      size: "normal" as const,
    },
  ];

  const valueAddedServices = [
    {
      title: "Ачааны даатгал",
      description:
        "All Risks, Named Perils, ICC A/B/C нөхцөлтэй даатгалын шийдэл.",
      subtext: "Нэхэмжлэл гаргахад дэмжлэг үзүүлнэ",
    },
    {
      title: "Гаалийн бүрдүүлэлт",
      description:
        "Импорт, экспорт, транзит ачаанд гаалийн мэдүүлэг, HS код тооцоолол.",
      subtext: "Storage, demurrage эрсдэлийг бууруулна",
    },
    {
      title: "Дотоодын хүргэлт",
      description:
        "Улаанбаатар хот болон орон нутагт аюулгүй, хугацаанд нь хүргэх шийдэл.",
      subtext: "Warehouse-to-Warehouse, хот дотор түгээлт",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0f] text-white">
      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.15),transparent)]" />
        <FloatingOrb
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[120px]"
          delay={0}
        />
        <FloatingOrb
          className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-[120px]"
          delay={2}
        />
        <FloatingOrb
          className="absolute bottom-1/4 left-1/3 h-[350px] w-[350px] rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-[100px]"
          delay={4}
        />
      </div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-[1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-50" />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative h-10 w-10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500" />
              <Image
                src="/globe.svg"
                alt="Andjintrans logo"
                width={40}
                height={40}
                className="relative z-10 p-2"
              />
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-sm font-bold tracking-wider text-transparent">
                ANDJINTRANS
              </span>
              <span className="text-[10px] tracking-widest text-slate-500">
                LOGISTICS
              </span>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.a>
              );
            })}
          </nav>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,211,238,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-all md:inline-flex"
          >
            Үнийн санал авах
          </motion.a>
        </div>
      </motion.header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section
          ref={heroRef}
          id="home"
          className="relative flex min-h-screen items-center justify-center px-6 pt-20"
        >
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 mx-auto max-w-5xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
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
              className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-white">Олон улсын</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                тээвэр зуучлал
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-8 max-w-2xl text-lg text-slate-400 sm:text-xl"
            >
              Агаар, далай, төмөр зам, авто болон транзит тээврийг{" "}
              <span className="text-cyan-300">нэг цэгээс зохион байгуулж</span>,
              цаг хугацаа болон зардлыг оновчилно.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(34,211,238,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all"
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
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Тээврийн шийдлүүд
              </motion.a>
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
                { value: "5", label: "Тээврийн хэлбэр" },
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
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
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

        {/* About Section */}
        <section id="about" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection>
              <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <div>
                  <motion.span
                    className="inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-medium text-cyan-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    Бидний тухай
                  </motion.span>
                  <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                    2011 оноос хойш{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      найдвартай түнш
                    </span>
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-slate-400">
                    Анджинтранс ХХК нь ачааны төрөл, хэмжээ, хугацаа, температур
                    болон аюулын шаардлага, бичиг баримтын онцлогт тулгуурласан
                    шийдэл-суурьтай логистикийн үйл ажиллагааг зохион байгуулдаг.
                  </p>
                  <p className="mt-4 text-slate-500">
                    Агаар, далай, төмөр зам, авто тээврийг дангаар нь болон
                    холимог хэлбэрээр уялдуулж, импорт, экспорт, транзит урсгалыг
                    нэг төлөвлөгөө, нэг хариуцлагын хүрээнд удирддаг.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Эрхэм зорилго",
                      text: "Харилцагчдын ачааг аюулгүй, хугацаанд нь, оновчтой зардлаар хүргэх.",
                    },
                    {
                      title: "Алсын хараа",
                      text: "Монголын зах зээлд найдвартай стандарт тогтоогч болох.",
                    },
                    {
                      title: "Үнэт зүйлс",
                      text: "Аюулгүй байдал, хариуцлага, ил тод байдал, мэргэжлийн ёс зүй.",
                    },
                    {
                      title: "Онцлог",
                      text: "Химийн болон аюултай ачааны (DG) тээвэрлэлтийн мэргэшсэн баг.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 backdrop-blur-sm transition-all hover:border-cyan-500/30"
                    >
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services Section - Bento Grid */}
        <section id="services" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="mb-16 text-center">
              <motion.span
                className="inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-medium text-cyan-400"
                whileHover={{ scale: 1.05 }}
              >
                Бидний үйлчилгээ
              </motion.span>
              <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
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

            {/* Bento Grid */}
            <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Value Added Services */}
        <section id="value-added" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="mb-16">
              <motion.span
                className="inline-block rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-2 text-sm font-medium text-purple-400"
                whileHover={{ scale: 1.05 }}
              >
                Нэмэлт үйлчилгээ
              </motion.span>
              <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
                Эрсдэлийг{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  бууруулсан шийдэл
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-3">
              {valueAddedServices.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/40 p-8 backdrop-blur-xl transition-all hover:border-purple-400/50"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl transition-all group-hover:scale-150" />
                  <div className="relative">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-slate-400">{service.description}</p>
                    <p className="mt-3 text-sm text-slate-500">
                      {service.subtext}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <AnimatedSection className="mb-16 text-center">
              <motion.span
                className="inline-block rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 px-4 py-2 text-sm font-medium text-emerald-400"
                whileHover={{ scale: 1.05 }}
              >
                Танд хэрэгтэй
              </motion.span>
              <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
                Мэдлэгийн{" "}
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  сан
                </span>
              </h2>
            </AnimatedSection>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Инкотермс 2020",
                  description:
                    "EXW, FCA, CPT, CIP, DAP, DPU, DDP, FAS, FOB, CFR, CIF зэрэг 11 нөхцөлийн тайлбар.",
                },
                {
                  title: "Контейнер ба вагон",
                  description:
                    "Dry, High Cube, Reefer, Open Top, Flat Rack, Tank зэрэг төрлүүдийн хэрэглээ.",
                },
                {
                  title: "Аюултай ачаа (DG)",
                  description:
                    "UN Class 1–9 ангилал, SDS/MSDS, савлалт, шошгололтын шаардлага.",
                },
                {
                  title: "Шаардлагатай баримт",
                  description:
                    "Commercial Invoice, Packing List, B/L, AWB, CMR, гаалийн мэдүүлэг.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-emerald-500/30"
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-purple-500/10 p-8 backdrop-blur-xl sm:p-12"
            >
              {/* Background glow */}
              <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-cyan-500/30 blur-[120px]" />
              <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-500/30 blur-[120px]" />

              <div className="relative grid gap-12 lg:grid-cols-2">
                <div>
                  <motion.span
                    className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-cyan-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    Холбоо барих
                  </motion.span>
                  <h2 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
                    Бидэнтэй{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      холбогдох
                    </span>
                  </h2>
                  <p className="mt-6 text-lg text-slate-300">
                    Таны ачаанд тохирсон хамгийн оновчтой тээврийн шийдлийг
                    хамтдаа төлөвлөе.
                  </p>

                  <dl className="mt-10 space-y-6">
                    {[
                      {
                        label: "Хаяг",
                        value:
                          "Улаанбаатар, Сүхбаатар дүүрэг, 7-р хороолол, Хоймор оффис 207",
                      },
                      {
                        label: "Утас",
                        value: "+976-7011-7127, +976-7011-7129",
                      },
                      {
                        label: "Имэйл",
                        value: "info@andjintrans.com",
                        href: "mailto:info@andjintrans.com",
                      },
                    ].map((item) => (
                      <div key={item.label}>
                        <dt className="text-sm font-medium text-slate-400">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-lg text-white">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-cyan-300 transition-colors hover:text-cyan-200"
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 backdrop-blur-sm sm:p-8"
                >
                  <h3 className="text-lg font-semibold text-white">
                    Үнийн саналын хүсэлт
                  </h3>
                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm text-slate-400">
                          Байгууллагын нэр
                        </span>
                        <input
                          type="text"
                          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Company LLC"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm text-slate-400">Нэр</span>
                        <input
                          type="text"
                          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="Таны нэр"
                        />
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-sm text-slate-400">Имэйл</span>
                        <input
                          type="email"
                          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="name@company.mn"
                        />
                      </label>
                      <label className="block">
                        <span className="text-sm text-slate-400">Утас</span>
                        <input
                          type="tel"
                          className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                          placeholder="+976..."
                        />
                      </label>
                    </div>
                    <label className="block">
                      <span className="text-sm text-slate-400">
                        Тээврийн чиглэл
                      </span>
                      <input
                        type="text"
                        className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="Shanghai → Ulaanbaatar"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm text-slate-400">
                        Нэмэлт мэдээлэл
                      </span>
                      <textarea
                        rows={3}
                        className="mt-1 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                        placeholder="Ачааны төрөл, жин, хэмжээ, тусгай шаардлага..."
                      />
                    </label>
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.02,
                        boxShadow: "0 0 40px rgba(34,211,238,0.4)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-semibold text-slate-900 transition-all"
                    >
                      Хүсэлт илгээх
                    </motion.button>
                  </form>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Анджинтранс ХХК. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <p className="text-sm text-slate-600">
            Олон улсын тээвэр зуучлал · Логистикийн цогц шийдэл
          </p>
        </div>
      </footer>
    </div>
  );
}
