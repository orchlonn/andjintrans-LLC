"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const insuranceTypes = [
  {
    title: "All Risks / \"Их эрсдэлийн хамгаалалт\"",
    description: "Хамгийн өргөн хамрах хүрээтэй, олон төрлийн эрсдэлийг хамгаална (нарийвчилсан нөхцөлтэй).",
  },
  {
    title: "Named Perils / \"Нэрлэсэн эрсдэл\"",
    description: "Зөвхөн заасан эрсдэлүүд (жишээ: осол, гал, живэлт гэх мэт)-ээр нөхөн төлнө.",
  },
  {
    title: "ICC (A) – Өргөн хамгаалалт",
    description: "Ихэвчлэн \"All risks\" гэж ойлгогддог олон улсад түгээмэл хэрэглэгддэг нөхцөл.",
  },
  {
    title: "ICC (B) – Дунд түвшний хамгаалалт",
    description: "Institute Cargo Clauses-ийн дунд түвшний хамгаалалтын нөхцөл.",
  },
  {
    title: "ICC (C) – Суурь хамгаалалт",
    description: "Хамрах хүрээ хамгийн хязгаарлагдмал, суурь хамгаалалттай.",
  },
  {
    title: "Нэмэлт хамгаалалт",
    description: "War Risks, Strikes/Riots/Civil Commotions (SRCC) гэх мэт шаардлагатай үед.",
  },
];

const factors = [
  "Ачааны төрөл (эмзэг/хэврэг, өндөр үнэ цэнтэй, химийн гэх мэт)",
  "Сав баглаа боодол, бэхэлгээ (packing & securing)",
  "Маршрут, тээврийн төрөл (агаар/далай/төмөр зам/авто), дамжин өнгөрөх дамжлага",
  "Incoterms нөхцөл (эрсдэл хэзээ шилжих), даатгуулагч тал хэн бэ",
  "Даатгалын дүн (insured value) ба франшиз/суутгал (deductible)",
];

const requiredInfo = [
  "Инвойсын үнэ, валют, барааны нэр төрөл",
  "Савлагааны төрөл, тоо хэмжээ, жин/эзэлхүүн",
  "Гарах/очих улс-хот, маршрут, тээврийн төрөл",
  "Incoterms, ачилт/хүргэлтийн хугацаа",
  "Онцгой нөхцөл: DG эсэх, температурын горим, тусгай савлалт",
];

const claimSteps = [
  "Ачаа гэмтсэн/дутсан эсэхийг хүлээн авах үедээ тэмдэглэж, зураг/бичлэг баримтжуулах",
  "POD/хүлээн авалтын тэмдэглэл, хохирлын тайлан, шаардлагатай бол survey зохион байгуулах",
  "Инвойс, packing list, тээврийн бичиг (AWB/B/L/CMR/waybill), даатгалын баримт зэрэг материалыг бүрдүүлэх",
  "Даатгагчид хугацаанд нь мэдэгдэж, шаардлагатай нэмэлт мэдээллийг нийлүүлэх",
];

export default function InsuranceServicePage() {
  return (
    <>
      <PageHeader
        badge="Ачааны даатгал"
        title="Эрсдэлийн"
        highlightedTitle="удирдлагын чухал хэсэг"
        description="Тээвэрлэлтийн явцад үүсч болзошгүй эрсдэлээс шалтгаалсан санхүүгийн хохирлыг нөхөн төлүүлэх хамгаалалт."
        badgeColor="purple"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is Cargo Insurance */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Ачааны даатгал гэж юу вэ?</h2>
            <div className="mt-6 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Ачааны даатгал нь тээвэрлэлтийн явцад үүсч болзошгүй гэмтэл, алдагдал, хулгай, осол, байгалийн эрсдэл,
                тээврийн хэрэгслийн саатал/осол зэрэг тодорхой эрсдэлээс шалтгаалсан санхүүгийн хохирлыг нөхөн төлүүлэх
                зорилготой хамгаалалт юм. Олон улсын тээвэр нь олон дамжлага, терминал, шилжүүлэн ачилттай байдаг тул
                даатгалтай байх нь эрсдэлийн удирдлагын чухал хэсэг болдог.
              </p>
            </div>
          </motion.section>

          {/* Why Insurance */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Яагаад хэрэгтэй вэ?</h2>
            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Зөвхөн тээвэрлэгчийн &quot;хариуцлагын нөхөн төлбөр&quot; нь ихэнх тохиолдолд хязгаартай (жин, дүрэм, гэрээний
                нөхцөлөөс хамаарсан лимиттэй) байдаг. Харин ачааны даатгал нь ачааны бодит үнэ цэнэ болон гэрээнд туссан
                нөхцөлд нийцүүлэн хамгаалалтыг өргөтгөх боломж олгодог.
              </p>
            </div>
          </motion.section>

          {/* Insurance Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Даатгалын түгээмэл хэлбэрүүд</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insuranceTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
                    <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">{type.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{type.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Factors */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Хамрах хүрээнд нөлөөлөх гол хүчин зүйлс</h2>
            <div className="mt-8 space-y-3">
              {factors.map((factor, index) => (
                <motion.div
                  key={factor}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-pink-500">
                    <span className="text-sm font-bold text-slate-900">{index + 1}</span>
                  </div>
                  <p className="text-slate-300">{factor}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Required Info */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Даатгалд хамруулахад шаардлагатай мэдээлэл</h2>
            <div className="mt-8 space-y-3">
              {requiredInfo.map((info, index) => (
                <motion.div
                  key={info}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg className="h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-slate-300">{info}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Claim Steps */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Нэхэмжлэл (Claim) гаргах ерөнхий алхам</h2>
            <div className="mt-8 space-y-4">
              {claimSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                    <span className="text-lg font-bold text-slate-900">{index + 1}</span>
                  </div>
                  <p className="pt-3 text-slate-300">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Support */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Манай үзүүлэх дэмжлэг</h2>
            <div className="mt-6 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-slate-900/50 to-pink-500/10 p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Анджинтранс ХХК нь таны ачааны онцлог, маршрут, хугацааны шаардлагад нийцүүлэн даатгалын тохирох хувилбар
                сонгоход зөвлөж, даатгалд хамруулах мэдээллийг бэлдүүлэх, мөн шаардлагатай үед нэхэмжлэлийн баримт бичгийн
                бүрдүүлэлтэд тусална.
              </p>
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
                Даатгалын зөвлөгөө авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Ачааны онцлог, маршрут, хугацаанд нийцсэн даатгалын хувилбар сонгоход бид тусална.
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
