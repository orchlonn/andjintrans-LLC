"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const serviceTypes = [
  {
    title: "Хил дамнасан авто тээвэр",
    description: "Импорт/экспортын тээвэрлэлт",
  },
  {
    title: "Дотоод тээвэр ба хүргэлт",
    description: "Хот дотор/орон нутаг руу хүргэлт",
  },
  {
    title: "Контейнер татан авалт",
    description: "Боомт/терминал–агуулах хооронд",
  },
  {
    title: "LTL/FTL",
    description: "Хэсэгчилсэн (LTL) болон бүтэн машин (FTL) ачаа",
  },
  {
    title: "Төсөл, OOG ачаа",
    description: "Хүнд/овортой ачааны тусгай зохион байгуулалт",
  },
  {
    title: "Хаалганаас хаалганд",
    description: "Эцсийн хэрэглэгч хүртэлх хүргэлт",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Хүсэлт авах",
    description: "Чиглэл, хугацаа, ачааны төрөл, жин/хэмжээс гэх мэт",
  },
  {
    step: 2,
    title: "2–3 хувилбар санал болгох",
    description: "Маршрут, хугацаа-өртөг-эрсдэл",
  },
  {
    step: 3,
    title: "Баримт шалгах",
    description: "Invoice/packing list, тээврийн бичиг баримт, шаардлагатай зөвшөөрөл",
  },
  {
    step: 4,
    title: "Pickup төлөвлөх",
    description: "Хугацаа, ачих/буулгах нөхцөл, тээврийн хэрэгслийн сонголт (LTL/FTL, тавцант гэх мэт)",
  },
  {
    step: 5,
    title: "Гүйцэтгэл",
    description: "Тээвэрлэлт, хил/терминал дамжлага, хүргэлт, POD",
  },
];

export default function RoadTransportPage() {
  return (
    <>
      <PageHeader
        badge="Авто замын тээвэр"
        title="Уян хатан"
        highlightedTitle="хүргэлтийн шийдэл"
        description="Авто замын тээвэр нь хил дамнасан болон дотоод хүргэлтэд хамгийн уян хатан хэлбэр юм."
        badgeColor="emerald"
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
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Татан авалт, хүргэлтийн хугацааг нарийн төлөвлөх, олон цэгийн буулгалт/ачилт хийх, мөн &quot;эцсийн цэгийн&quot;
                хүргэлтийг хамгийн сайн шийдэх боломж олгодог. Анджинтранс ХХК нь импорт, экспорт, транзит урсгалын авто тээврийг
                ачааны төрөл, хэмжээ/жин, хүргэх цэг, хугацааны шаардлагад тохируулан төлөвлөж, агуулах–терминал–үйлдвэр–харилцагч
                хүртэлх хүргэлтийн хэлхээг нэг цэгээс зохион байгуулна.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Контейнер татан авалт, задгай ачаа, төсөл болон овортой/хүнд ачаанд зориулсан маршрутын судалгаа, зөвшөөрөл,
                шаардлагатай үед дагалдан тээвэр зэрэг шийдлүүдийг мөн санал болгох болно. Баримт бичгийн урьдчилсан шалгалт,
                гааль-терминалын уялдаа, хугацааны сахилга бат дээр төвлөрснөөр саатал болон нэмэлт зардлын эрсдэлийг
                бууруулахыг зорьдог.
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
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
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
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
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
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-900/50 to-cyan-500/10 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Авто тээврийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                LTL/FTL сонголт, маршрут, хугацаа-өртөг-эрсдэлийн 2–3 хувилбартай санал аваарай.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-8 py-4 text-base font-semibold text-slate-900 transition-all hover:shadow-[0_0_40px_rgba(52,211,153,0.5)]"
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
