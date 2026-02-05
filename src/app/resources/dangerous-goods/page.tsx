"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const dgClasses = [
  {
    class: "Class 1",
    title: "Тэсрэх бодис, эдлэл (Explosives)",
    description: "Дэлбэрэх, хүчтэй тэсрэлт үүсгэх эрсдэлтэй бодис/эдлэл.",
  },
  {
    class: "Class 2",
    title: "Хий (Gases)",
    description: "Шахсан, шингэрүүлсэн, ууссан хий; шатамхай, шатамхай бус, хорт хий зэрэг дэд төрлүүдтэй.",
  },
  {
    class: "Class 3",
    title: "Шатамхай шингэн (Flammable Liquids)",
    description: "Амархан дөл авалцах (flammable) шингэнүүд.",
  },
  {
    class: "Class 4",
    title: "Шатамхай хатуу ба холбоотой бодисууд",
    description: "4.1 Шатамхай хатуу, өөрөө урвалд ордог бодис | 4.2 Өөрөө шатах (spontaneously combustible) | 4.3 Усанд хүрэхэд шатамхай хий ялгаруулдаг (dangerous when wet)",
  },
  {
    class: "Class 5",
    title: "Исэлдүүлэгч бодис ба органик пероксид",
    description: "5.1 Исэлдүүлэгч (гал авалцахыг дэмждэг) | 5.2 Органик пероксид (дулаан/цохилтод мэдрэмтгий байж болно)",
  },
  {
    class: "Class 6",
    title: "Хортой ба халдварт бодис",
    description: "6.1 Хортой бодис | 6.2 Халдварт бодис (эмнэлгийн/биологийн тусгай горим шаарддаг)",
  },
  {
    class: "Class 7",
    title: "Цацраг идэвхт материал (Radioactive Material)",
    description: "Цацрагийн эрсдэлтэй, нарийн зөвшөөрөл ба хяналт шаарддаг.",
  },
  {
    class: "Class 8",
    title: "Идэмхий бодис (Corrosives)",
    description: "Арьс, металл, материал идэх (зэврүүлэх) шинжтэй хүчил/шүлт зэрэг.",
  },
  {
    class: "Class 9",
    title: "Бусад аюултай бодис, эдлэл (Miscellaneous)",
    description: "Бусад ангилалд багтахгүй ч тээвэрлэлтийн эрсдэлтэй (жишээ: литийн зай/баттерей, хуурай мөс, зарим соронзон материал гэх мэт) бүтээгдэхүүнүүд.",
  },
];

const requiredInfo = [
  { item: "UN number (UN дугаар)", description: "Бодис/бүтээгдэхүүнийг олон улсын түвшинд ялгах дугаар" },
  { item: "Proper Shipping Name (PSN)", description: "Албан нэршил" },
  { item: "Class / Division", description: "Ангилал/дэд ангилал" },
  { item: "Packing Group (PG)", description: "I/II/III — эрсдэлийн түвшин" },
  { item: "SDS/MSDS", description: "Аюулгүй ажиллагааны мэдээллийн хуудас" },
  { item: "Quantity & packaging", description: "Тоо хэмжээ, савлалт" },
];

const practicalTips = [
  "DG эсэх нь тодорхойгүй бол эхлээд SDS/MSDS-ээ шалгаж UN мэдээллээ баталгаажуулах нь зөв.",
  "DG ачааны саатлын түгээмэл шалтгаан: ангиллын алдаа, шошго/маркировк дутуу, савлалт стандарт зөрчих, баримтын мэдээлэл зөрөх.",
  "Тээврийн төрлөөс хамаараад шаардлага өөр байж болох тул ачилтаас өмнө урьдчилан зөвлөгөө авах нь үр дүнтэй.",
];

export default function DangerousGoodsPage() {
  return (
    <>
      <PageHeader
        badge="Аюултай ачаа (DG)"
        title="UN-ийн"
        highlightedTitle="9 ангилал"
        description="Аюултай ачаа (Dangerous Goods, DG) нь тээвэрлэлтийн явцад хүний эрүүл мэнд, өмч хөрөнгө, байгаль орчинд эрсдэл учруулж болзошгүй бодис, бүтээгдэхүүн юм."
        badgeColor="orange"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is DG */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Аюултай ачаа (Dangerous Goods, DG) гэдэг нь тээвэрлэлтийн явцад хүний эрүүл мэнд, өмч хөрөнгө, байгаль
                орчинд эрсдэл учруулж болзошгүй тул тусгай ангилал, сав баглаа боодол, шошгололт, бичиг баримт шаарддаг
                бодис, бүтээгдэхүүнийг хэлнэ. DG ачаа нь олон улсын түвшинд UN-ийн 9 ангилал (Class 1–9)-д хуваагддаг
                бөгөөд агаар, далай, авто, төмөр зам бүрд мөрдөх дүрэм/шаардлага нь ялгаатай байж болно.
              </p>
            </div>
          </motion.section>

          {/* DG Classes */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">DG-ийн 9 ангилал</h2>
            <div className="mt-8 space-y-4">
              {dgClasses.map((dg, index) => (
                <motion.div
                  key={dg.class}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500">
                      <span className="text-xs font-bold text-slate-900">{dg.class}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{dg.title}</h3>
                      <p className="mt-2 text-slate-400">{dg.description}</p>
                    </div>
                  </div>
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
            <h2 className="text-2xl font-bold text-white md:text-3xl">DG ачаанд хамгийн их шаардагдах мэдээлэл</h2>
            <p className="mt-4 text-slate-400">
              Үнийн санал, зөв ангилал, зөв савлалт/шошгололт хийхэд ихэвчлэн дараах &quot;минимум өгөгдөл&quot; хэрэгтэй:
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {requiredInfo.map((info, index) => (
                <motion.div
                  key={info.item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="font-semibold text-orange-400">{info.item}</h4>
                  <p className="mt-1 text-sm text-slate-400">{info.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Practical Tips */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Практик зөвлөмж</h2>
            <div className="mt-8 space-y-4">
              {practicalTips.map((tip, index) => (
                <motion.div
                  key={tip}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500">
                    <svg className="h-5 w-5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="pt-2 text-slate-300">{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Back to Resources */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/resources"
              className="inline-flex items-center text-orange-400 hover:text-orange-300"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Бүх мэдээлэл рүү буцах
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
