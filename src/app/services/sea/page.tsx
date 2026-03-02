"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const serviceTypes = [
  {
    title: "FCL (Full Container Load)",
    description: "Нэг үйлчлүүлэгчийн бүтэн чингэлэг",
  },
  {
    title: "LCL (Less than Container Load)",
    description: "Хэсэгчилсэн ачаа (нэгтгэл)",
  },
  {
    title: "Port-to-Port",
    description: "Боомтоос боомт хүртэл",
  },
  {
    title: "Door-to-Door",
    description: "Хаалганаас хаалганд (татан авалт + хүргэлттэй)",
  },
  {
    title: "Special Equipment",
    description: "Reefer / Open Top / Flat Rack / Tank гэх мэт тусгай тоноглол",
  },
  {
    title: "Project & OOG Cargo",
    description: "Овортой, хүнд, төсөл ачааны зохион байгуулалт",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Хүсэлт авах",
    description: "Чиглэл, хугацаа, ачааны төрөл, жин/эзэлхүүн г.м",
  },
  {
    step: 2,
    title: "2–3 хувилбар санал болгох",
    description: "Боомт/маршрут, хугацаа-өртөг-эрсдэл",
  },
  {
    step: 3,
    title: "Баримт шалгах",
    description: "Invoice/packing list, shipping instructions, шаардлагатай зөвшөөрөл",
  },
  {
    step: 4,
    title: "Booking & ачилт",
    description: "Тээвэрлэгч, хуваарь, боомтын зохицуулалт, контейнерт VGM",
  },
  {
    step: 5,
    title: "Транзит явц",
    description: "Milestone бүрээр статус",
  },
  {
    step: 6,
    title: "Ирэлт ба хүргэлт",
    description: "Гааль/терминал/сүүлийн милийн хүргэлт",
  },
  {
    step: 7,
    title: "Хаалт",
    description: "POD/баримтын багц, тайлан",
  },
];

export default function SeaTransportPage() {
  return (
    <>
      <PageHeader
        badge="Далайн тээвэр"
        title="Өртөг оновчтой"
        highlightedTitle="их хэмжээний тээвэр"
        description="Далайн тээвэр нь их хэмжээний ачааг урт зайд өртөг оновчтой байдлаар тээвэрлэх хамгийн түгээмэл шийдэл юм."
        badgeColor="cyan"
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
            <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                FCL/LCL сонголтоор таны ачааны хэмжээнд тохируулан зохион байгуулж болдог. Далайд гарцгүй Монгол орны хувьд
                Анджинтранс ХХК нь хөрш улсын боомтуудаар дамжуулан далай–хуурай газрын холимог маршрутыг төлөвлөж,
                боомт/терминалын боловсруулалт → баримт бичиг → транзит уялдаа → эцсийн хүргэлт хүртэлх процессыг нэг цэгээс
                удирдан зохион байгуулна.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Бид хуваарь (schedule), транзит хугацаа, боломжит саатлын эрсдэлийг тооцож, бичиг баримтын боловсруулалтын
                стандартыг мөрдөж нэмэлт төлбөр (storage/demurrage зэрэг) үүсэх эрсдэлийг бууруулахад анхаардаг. Мөн овор ихтэй,
                төсөл ачаа болон тусгай зориулалтын тоноглол шаардсан тээвэрлэлтийн хувьд тохирох чингэлэг, ачилт-бэхэлгээний
                шийдлийг санал болгоно.
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500">
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
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ажиллах процесс</h2>
            <div className="mt-8 space-y-4">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-cyan-500">
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

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-slate-900/50 to-cyan-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Далайн тээврийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                FCL/LCL сонголт, боомт/маршрут, хугацаа-өртөг-эрсдэлийн 2–3 хувилбартай санал аваарай.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]"
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
