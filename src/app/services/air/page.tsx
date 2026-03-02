"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const serviceTypes = [
  {
    title: "Airport-to-Airport",
    description: "Нисэх буудлаас нисэх буудал хүртэл тээвэрлэлт",
  },
  {
    title: "Door-to-Door",
    description: "Хаалганаас хаалганд (татан авалт + хүргэлттэй)",
  },
  {
    title: "Consolidation (Нэгтгэл)",
    description: "Жижиг/дунд ачааг нэгтгэж өртгийг оновчлох",
  },
  {
    title: "Express / Time-critical",
    description: "Хамгийн богино хугацааны тусгай шийдэл",
  },
  {
    title: "Special Handling",
    description: "Хэврэг, өндөр үнэ цэнтэй, тусгай горим шаардсан ачаа",
  },
  {
    title: "DG / Chemical Cargo",
    description: "Химийн болон аюултай ачааны зохион байгуулалт",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Хүсэлт авах",
    description: "Чиглэл, хугацаа, ачааны нэр төрөл, жин/хэмжээс г.м",
  },
  {
    step: 2,
    title: "Санал боловсруулах",
    description: "2–3 маршрут, хугацаа/өртөг/эрсдэлийн тайлбартай",
  },
  {
    step: 3,
    title: "Баримт шалгах",
    description: "Invoice/packing list, шаардлагатай тусгай зөвшөөрөл",
  },
  {
    step: 4,
    title: "Гааль ба хүргэлт",
    description: "Гаалийн бүрдүүлэлтийг зохих журмаар хийж, эцсийн цэгт хүргэнэ",
  },
];

const principles = [
  "Бид нийгэмдээ болон байгаль орчиндоо ээлтэй үйлчилгээг эрхэмлэнэ.",
  "Бид хөдөлмөрийн аюулгүй байдлыг эн тэргүүнд мөрдөн ажиллана.",
  "Бид ажилтан, түнш, хэрэглэгчиддээ үнэнч шударга зарчмыг баримтална.",
];

export default function AirTransportPage() {
  return (
    <>
      <PageHeader
        badge="Агаарын тээвэр"
        title="Яаралтай ачааны"
        highlightedTitle="хурдан шийдэл"
        description="Агаарын тээвэр нь яаралтай, өндөр үнэ цэнтэй ачааг богино хугацаанд хүргэхэд хамгийн тохиромжтой хэлбэр юм."
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Анджинтранс ХХК нь 2011 оноос хойш олон улсын болон дотоодын тээвэр зуучлалын үйл ажиллагаа явуулж,
                агаарын тээврийг маршрут–хугацаа–өртөг–эрсдэлийн тэнцвэр дээр үндэслэн төлөвлөж, ачааг байгаа газраас нь
                хүлээн авах → бичиг баримт боловсруулалт → тээвэрлэлт → гааль → эцсийн цэгийн хүргэлт хүртэлх процессыг
                нэг цэгээс зохион байгуулдаг.
              </p>
            </div>
          </motion.section>

          {/* Service Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Үйлчилгээний хэлбэрүүд</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serviceTypes.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process Steps */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Үйл ажиллагааны дараалал</h2>
            <div className="mt-8 space-y-4">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                    <span className="text-lg font-bold text-slate-900">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Principles */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Баримтлах зарчим</h2>
            <div className="mt-8 space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                    <span className="font-bold text-slate-900">{index + 1}</span>
                  </div>
                  <p className="text-lg text-slate-200">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 via-slate-900/50 to-blue-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Агаарын тээврийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Ачааны чиглэл, хугацаа, төрөл, жин/хэмжээсийн мэдээллээ илгээж, 2–3 маршрутын хувилбартай санал аваарай.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]"
                >
                  Холбоо барих
                  <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                >
                  Бүх үйлчилгээ
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
