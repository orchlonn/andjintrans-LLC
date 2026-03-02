"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const serviceTypes = [
  {
    title: "Контейнер тээвэр",
    description: "20'/40' чингэлэгтэй тээвэр",
  },
  {
    title: "Вагон тээвэр",
    description: "Ачааны онцлогоос хамаарч төрөл бүрийн вагоноор",
  },
  {
    title: "Транзит төмөр замын тээвэр",
    description: "Монголын нутгаар дамжин өнгөрөх урсгал",
  },
  {
    title: "Холимог тээвэр",
    description: "Төмөр зам + авто/далай/агаар хосолсон маршрут",
  },
  {
    title: "Төсөл ба овортой ачаа",
    description: "Хүнд, урт, өргөн овортой ачааны тусгай зохион байгуулалт",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Хүсэлт авах",
    description: "Чиглэл, хугацаа, ачааны төрөл, жин/эзэлхүүн гэх мэт",
  },
  {
    step: 2,
    title: "2–3 хувилбар санал болгох",
    description: "Маршрут, терминал/боомт, хугацаа-өртөг-эрсдэл",
  },
  {
    step: 3,
    title: "Баримт шалгах",
    description: "Invoice/packing list, зөвшөөрөл/сертификат, DG бол SDS/MSDS",
  },
  {
    step: 4,
    title: "Төлөвлөлт",
    description: "Контейнер/вагон сонголт, терминал дахь шилжүүлэн ачилт, хуваарь",
  },
  {
    step: 5,
    title: "Гүйцэтгэл",
    description: "Ачилт, тээвэрлэлт, дамжин өнгөрөлт, ирэлт, буулгалт",
  },
  {
    step: 6,
    title: "Гааль/хүргэлт",
    description: "Шаардлагатай бол гаалийн бүрдүүлэлт хийх, эцсийн цэгийн хүргэлт",
  },
];

export default function RailTransportPage() {
  return (
    <>
      <PageHeader
        badge="Төмөр замын тээвэр"
        title="Тогтвортой хугацаатай"
        highlightedTitle="бага зардалтай шийдэл"
        description="Төмөр замын тээвэр нь их жин, их эзэлхүүнтэй ачааг тогтвортой хугацаанд бага зардлаар тээвэрлэхэд хамгийн тохиромжтой сонголт юм."
        badgeColor="purple"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1725234839695-3b5f9af28a1d?w=1200&q=80"
              alt="Төмөр замын тээвэр"
              width={1200}
              height={800}
              className="h-auto w-full"
              priority
            />
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Монгол Улсын газарзүйн байршлын давуу талыг ашиглан Анджинтранс ХХК нь импорт, экспорт, транзит чиглэлийн
                төмөр замын тээврийг контейнер болон вагон хэлбэрээр зохион байгуулж, шаардлагатай тохиолдолд
                авто/далай/агаартай хослуулсан холимог маршрутаар төлөвлөн зохион байгуулах болно.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Бид терминал дахь шилжүүлэн ачилт, хилийн боомтын дамжлага, баримт бичгийн хөтлөлт, ачилт-бэхэлгээний
                зөвлөгөөг нэг цэгээс удирдсанаар саатал, нэмэлт зардлын эрсдэлийг бууруулахад анхаардаг. Түүнчлэн төсөл,
                овортой/хүнд ачаанд тохирох вагон, бэхэлгээний шийдэл, маршрутын судалгааг ачааны онцлогт нийцүүлэн санал болгоно.
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
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
                  className="flex items-start gap-4 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
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
            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-slate-900/50 to-pink-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Төмөр замын тээврийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Контейнер/вагон сонголт, маршрут, хугацаа-өртөг-эрсдэлийн 2–3 хувилбартай санал аваарай.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-400 to-pink-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(168,85,247,0.5)]"
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
