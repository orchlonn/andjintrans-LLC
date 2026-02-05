"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const deliveryTypes = [
  {
    title: "Агуулахаас агуулах руу",
    description: "Warehouse-to-Warehouse хүргэлт",
  },
  {
    title: "Терминал/гааль–агуулах/үйлдвэр",
    description: "Port/terminal drayage дотоод хэсэг хоорондын хүргэлт",
  },
  {
    title: "Хот дотор түгээлт",
    description: "Distribution, олон цэгийн буулгалт",
  },
  {
    title: "Орон нутаг руу хүргэлт",
    description: "Аймаг, сум чиглэлийн хүргэлт",
  },
  {
    title: "Төсөл, тоног төхөөрөмжийн хүргэлт",
    description: "Хүнд/овортой ачааны тусгай хүргэлт",
  },
  {
    title: "Контейнер татан авалт",
    description: "20'/40' контейнер зөөвөрлөлт – боломжит нөхцлөөр",
  },
];

const useCases = [
  "Олон улсын ачааг гаалиас чөлөөлсний дараа шууд үйлдвэр/агуулах руу хурдан хүргэх шаардлагатай үед",
  "Хот дотор олон цэгт буулгалттай түгээлт хийх үед",
  "Орон нутагт төсөл, барилга, үйлдвэрийн талбар руу тогтмол нийлүүлэлт хийх үед",
  "Хэмжээ том, жин ихтэй тоног төхөөрөмж, төсөл ачааг тусгай нөхцөлөөр хүргэх үед",
];

const quoteInfo = [
  "Ачааны нэр төрөл, савлагааны төрөл",
  "Жин/хэмжээс, тоо ширхэг",
  "Ачих ба буулгах хаяг, холбоо барих хүн",
  "Хүссэн хүргэлтийн огноо/цаг (time window)",
  "Буулгалтын нөхцөл (кран хэрэгтэй эсэх, тавцан/рамп, давхар руу зөөх шаардлага гэх мэт)",
];

export default function DomesticDeliveryPage() {
  return (
    <>
      <PageHeader
        badge="Дотоодын хүргэлт"
        title="Улаанбаатар болон"
        highlightedTitle="орон нутагт хүргэлт"
        description="Бараа, тоног төхөөрөмж, түүхий эд, контейнер болон задгай ачааг агуулах–терминал–үйлдвэр–харилцагч хооронд хүргэх үйлчилгээ."
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
                Дотоодын авто тээврийн хүргэлт нь Улаанбаатар хот болон орон нутагт бараа, тоног төхөөрөмж, түүхий эд,
                контейнер болон задгай ачааг агуулах–терминал–үйлдвэр–харилцагч хооронд аюулгүй, хугацаанд нь хүргэх
                үйлчилгээ юм.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Анджинтранс ХХК нь олон улсын тээвэртэй уялдсан &quot;сүүлийн миль&quot; хүргэлтээс гадна дан дотоод тээврийг
                цагийн хуваарьтайгаар зохион байгуулж, ачааны төрөл, жин/хэмжээс, буулгалтын нөхцөлд тохируулан тээврийн
                хэрэгсэл сонгон гүйцэтгэнэ.
              </p>
            </div>
          </motion.section>

          {/* Delivery Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Бид ямар төрлийн хүргэлт хийдэг вэ?</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {deliveryTypes.map((type, index) => (
                <motion.div
                  key={type.title}
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
                  <h3 className="font-semibold text-white">{type.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Use Cases */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ямар үед энэ үйлчилгээ хамгийн хэрэгтэй вэ?</h2>
            <div className="mt-8 space-y-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                    <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="pt-2 text-slate-300">{useCase}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quote Info */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Хүргэлтэнд хэрэгтэй мэдээлэл (Quote авахад)</h2>
            <div className="mt-8 space-y-3">
              {quoteInfo.map((info, index) => (
                <motion.div
                  key={info}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                    <span className="text-sm font-bold text-slate-900">{index + 1}</span>
                  </div>
                  <p className="text-slate-300">{info}</p>
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
                Дотоодын хүргэлтийн үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Ачааны мэдээлэл, ачих/буулгах хаяг, хугацааны мэдээллээ илгээж санал аваарай.
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
