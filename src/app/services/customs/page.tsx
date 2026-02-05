"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const services = [
  {
    title: "Баримт бичгийн урьдчилсан шалгалт",
    description: "Импорт/экспортын баримт бичгийн алдаа, зөрүү илрүүлэх",
  },
  {
    title: "HS код ба ангилал",
    description: "Барааны HS код болон ангилалтай холбоотой мэдээллийг нягтруулахад дэмжлэг үзүүлэх",
  },
  {
    title: "Гаалийн мэдүүлэг",
    description: "Гаалийн мэдүүлэг гаргах, шаардлагатай материалуудыг бүрдүүлэхэд зөвлөх/зохион байгуулах",
  },
  {
    title: "Татвар, хураамжийн тооцоолол",
    description: "Татвар, хураамж (импортын татвар, НӨАТ гэх мэт)-ийн тооцоололд шаардагдах мэдээллийг зөв бүрдүүлэх",
  },
  {
    title: "Гаалийн хяналт, шалгалт",
    description: "Шаардлагатай тохиолдолд нэмэлт баримт бүрдүүлэлтийн уялдаа",
  },
  {
    title: "Терминал/агуулах/хүргэлтийн уялдаа",
    description: "Гаалиас чөлөөлөгдсөн даруйд сүүлийн милийн хүргэлтийг зохион байгуулах",
  },
];

export default function CustomsServicePage() {
  return (
    <>
      <PageHeader
        badge="Гаалийн бүрдүүлэлт"
        title="Хугацаанд нь"
        highlightedTitle="чөлөөлөх шийдэл"
        description="Импорт, экспорт, транзит тээвэрлэлтийн үед барааг хууль, журамд нийцүүлэн гаалийн бүрдүүлэлт хийх үйлчилгээ."
        badgeColor="cyan"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is Customs Clearance */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Гаалийн бүрдүүлэлт гэж юу вэ?</h2>
            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Гаалийн бүрдүүлэлт нь импорт, экспорт, транзит тээвэрлэлтийн үед барааг хууль, журамд нийцүүлэн гаалийн
                мэдүүлэг гаргах, шаардлагатай баримт бичиг бүрдүүлэх, татвар/хураамжийн тооцоолол хийх, мөн шалгалт, хяналтын
                процессыг зохион байгуулах үйлчилгээ юм.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Зөв бүрдүүлэлт нь ачааг хугацаанд нь чөлөөлөх, нэмэлт төлбөр (storage, demurrage гэх мэт) үүсэх эрсдэлийг
                бууруулахад шууд нөлөөлдөг.
              </p>
            </div>
          </motion.section>

          {/* Services */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Бид юу хийж гүйцэтгэдэг вэ?</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Note */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8">
              <h3 className="text-lg font-semibold text-orange-400">Тайлбар</h3>
              <p className="mt-4 text-slate-300">
                Манай үйлчилгээний хамрах хүрээ нь таны дотоод зохион байгуулалт, гаалийн брокер/түншлэлээс хамаарч
                &quot;зөвлөх + зохицуулах&quot; эсвэл &quot;бүрэн зохион байгуулах&quot; хэлбэрээр тохирно.
              </p>
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
                Гаалийн бүрдүүлэлтийн зөвлөгөө авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                HS код, татвар тооцоолол, баримт бичгийн бүрдүүлэлтийн талаар бидэнтэй холбогдоно уу.
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
