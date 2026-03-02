"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const serviceTypes = [
  {
    title: "Rail Transit (Төмөр замын транзит)",
    description: "Их багтаамж, тогтвортой хугацаатай урсгал",
  },
  {
    title: "Road Transit (Авто транзит)",
    description: "Уян хатан маршрут, сүүлийн милийн хүргэлтэд тохиромжтой",
  },
  {
    title: "Multimodal Transit",
    description: "Төмөр зам + авто (эсвэл далай + төмөр зам + авто) уялдаатай шийдэл",
  },
  {
    title: "Terminal-to-Terminal / Door-to-Door",
    description: "Терминал хооронд эсвэл бүрэн хүргэлтийн хэлбэр",
  },
  {
    title: "Project & Special Cargo Transit",
    description: "Овортой/хүнд, тусгай горим шаардсан транзит ачаа",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Хүсэлт авах",
    description: "Чиглэл, хугацаа, ачааны төрөл, жин/эзэлхүүн, Incoterms, DG эсэх",
  },
  {
    step: 2,
    title: "Төлөвлөгөө гаргах",
    description: "2–3 маршрут, хил/терминал, хугацаа-өртөг-эрсдэлийн тайлбартай",
  },
  {
    step: 3,
    title: "Баримт шалгах",
    description: "Invoice/packing list, тээврийн баримтууд, зөвшөөрөл (шаардлагатай бол)",
  },
  {
    step: 4,
    title: "Терминалын зохицуулалт",
    description: "Шилжүүлэн ачилт, хадгалалт, ачих/буулгах",
  },
  {
    step: 5,
    title: "Гүйцэтгэл",
    description: "Хөдөлгөөн, хил дамжлага, транзит явцын хяналт",
  },
  {
    step: 6,
    title: "Ирэлт ба хүргэлт",
    description: "Last-mile хүргэлт, POD, хаалт",
  },
  {
    step: 7,
    title: "Тайлан",
    description: "Баримтын багц, дараагийн сайжруулалтын санал",
  },
];

export default function TransitTransportPage() {
  return (
    <>
      <PageHeader
        badge="Транзит тээвэр"
        title="Монголын нутгаар"
        highlightedTitle="дамжин өнгөрөх тээвэр"
        description="Транзит тээвэр нь гуравдагч орны ачааг Монгол Улсын нутгаар дамжуулан шилжүүлэн тээвэрлэх үйлчилгээ юм."
        badgeColor="orange"
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
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Маршрут, хугацаа, баримт бичиг, хил-терминалын уялдаа хамгийн өндөр түвшинд шаарддаг тээврийн хэлбэр юм.
                Анджинтранс ХХК нь төмөр зам, авто зам болон холимог (multimodal) тээврийн боломжуудыг ашиглан транзит урсгалыг
                төлөвлөж, терминал дахь шилжүүлэн ачилт, хил дамжлага, гаалийн горим, ачааны хөдөлгөөний хяналт зэрэг бүх үе
                шатыг нэг цэгээс удирдан зохион байгуулна.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Транзит тээвэрт саатал гарах эрсдэл нь ихэвчлэн бичиг баримтын алдаа, терминал дээрх хүлээлт, хил дээрх
                зохицуулалтын хоцролтоос үүсдэг тул бид өгөгдөл, баримтын &quot;урьдчилсан шалгалт&quot; болон маршрут-хуваарийн
                төлөвлөлтийг хамгийн түрүүнд хийдэг. Мөн шаардлагатай тохиолдолд хамгаалалт, даатгал, мониторинг, last-mile
                хүргэлт зэрэг нэмэлт шийдлийг нэгтгэн санал болгож, эрсдэлийг бууруулахад анхаарна.
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500">
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
                  className="flex items-start gap-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500">
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
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-slate-900/50 to-red-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Транзит тээврийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Маршрут, хил/терминал, хугацаа-өртөг-эрсдэлийн 2–3 хувилбартай санал аваарай.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(251,146,60,0.5)]"
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
