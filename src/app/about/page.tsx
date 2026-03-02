"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

const partnerLogos = [
  { src: "/Logo1.jpg", alt: "Partner 1" },
  { src: "/Logo2.png", alt: "Partner 2" },
  { src: "/Logo3.jpg", alt: "Partner 3" },
  { src: "/logo4.jpg", alt: "Partner 4" },
  { src: "/Logo5.jpg", alt: "Partner 5" },
  { src: "/Logo6.jpg", alt: "Partner 6" },
];

const values = [
  "Нэн тэргүүнд аюулгүй байдал",
  "Хариуцлага ба ил тод байдал",
  "Мэргэжлийн ёс зүй",
  "Харилцагч төвтэй",
  "Тасралтгүй сайжруулалт",
  "Бидний үнэнч хэрэглэгч",
  "Мэргэшсэн хамт олон",
  "Хамтын ажиллагаа",
  "Шаардлагад нийцсэн үйлчилгээ",
  "Хөгжил дэвшил",
];

const principles = [
  "Бид нийгэмдээ болон байгаль орчиндоо ээлтэй үйлчилгээг эрхэмлэнэ.",
  "Бид хөдөлмөрийн аюулгүй байдлыг эн тэргүүнд мөрдөн ажиллана.",
  "Бид ажилтан, түнш, хэрэглэгчиддээ үнэнч шударга зарчмыг баримтална.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Бидний тухай"
        title="2011 оноос тасралтгүй үйл ажиллагаагаа явуулж байгаа"
        highlightedTitle="найдвартай түнш"
        description="Олон улсын болон дотоодын тээвэр зуучлалын үйл ажиллагаагаа тасралтгүй эрхэлж, шийдэл-суурьтай логистикийн үйл ажиллагааг зохион байгуулж ирсэн."
      />

      {/* Transport image */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1200&q=80"
            alt="Тээвэр логистикийн үйл ажиллагаа"
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Танилцуулга
            </h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>
                Анджинтранс ХХК нь 2011 оноос хойш олон улсын болон дотоодын
                тээвэр зуучлалын үйл ажиллагаагаа тасралтгүй эрхэлж,
                харилцагчийн ачааны онцлог (төрөл, хэмжээ, хугацаа,
                температур/аюулын шаардлага, бичиг баримт)-т тулгуурлан
                шийдэл-суурьтай логистикийн үйл ажиллагааг зохион байгуулж
                ирсэн.
              </p>
              <p>
                Бид агаарын, далайн, төмөр замын болон авто тээврийг дангаар нь
                болон холимог хэлбэрээр уялдуулж, импорт/экспорт/транзит
                тээврийг нэг төлөвлөгөө, нэг хариуцлагын хүрээнд удирдана.
                Ачааны тээвэрлэлтийн явц, баримт бичиг, хугацааны төлөвлөлтийг
                нэг цэгээс хянах нь саатлыг бууруулж, төслийн тээвэр/давтамжтай
                нийлүүлэлтэд онцгой давуу талтай.
              </p>
            </div>
          </motion.section>

          {/* Mission & Vision */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 grid gap-8 md:grid-cols-2"
          >
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500">
                <svg
                  className="h-6 w-6 text-slate-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Эрхэм зорилго</h3>
              <p className="mt-4 text-slate-300">
                Харилцагчдын ачааг аюулгүй, хугацаанд нь, оновчтой зардлаар
                хүргэх тээвэр-логистикийн шийдлийг өндөр хариуцлага, ил тод
                ажиллагаагаар хэрэгжүүлэх.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-pink-500">
                <svg
                  className="h-6 w-6 text-slate-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Алсын хараа</h3>
              <p className="mt-4 text-slate-300">
                Химийн болон тусгай нөхцөл шаардсан ачааны тээвэрлэлтийн
                чиглэлээр Монголын зах зээлд найдвартай стандарт тогтоогч болж,
                олон улсын худалдаа, логистикийн шилдэг практикийг нэвтрүүлэх.
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Үнэт зүйлс
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                    <svg
                      className="h-4 w-4 text-slate-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Principles */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Баримтлах зарчим
            </h2>
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
                    <span className="font-bold text-slate-900">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-lg text-slate-200">{principle}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Partners */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Түншүүд
            </h2>
            <p className="mt-3 text-slate-300">
              Олон улсын болон дотоодын найдвартай түнш, хамтрагч
              байгууллагуудтай хамтран ажиллаж байна.
            </p>
            <div className="mt-10 overflow-hidden">
              <div className="flex w-max animate-partner-scroll">
                {[1, 2].map((copy) => (
                  <div
                    key={copy}
                    className="flex shrink-0 items-center gap-4 md:gap-6"
                  >
                    {partnerLogos.map((partner) => (
                      <div
                        key={`${copy}-${partner.src}`}
                        className="flex h-32 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl md:h-40 md:w-52"
                      >
                        <div className="relative h-full w-full overflow-hidden rounded-2xl [&_img]:rounded-2xl">
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            fill
                            className="object-contain object-center"
                            sizes="208px"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* DG Specialization Highlight */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 via-slate-900/50 to-red-500/10 p-8"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Химийн болон аюултай ачааны (DG) мэргэшил
            </h2>
            <p className="mt-6 text-slate-300">
              Манай компани нь 2011 оноос хойш тасралтгүй үйл ажиллагаагаа
              эрхлэн явуулж байгаа бөгөөд химийн болон аюултай ачаа (Dangerous
              Goods)-ны тээвэрлэлтийн үеийн ангилал, шошгололт, баримт бичиг
              (SDS/MSDS), савлагаа, маршрутын эрсдэлийн удирдлагад илүү түлхүү
              мэргэшин ажилласаар байна.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {[
                "UN ангилал",
                "SDS/MSDS баримт",
                "Тусгай савлагаа",
                "Эрсдэлийн удирдлага",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-orange-500/20 p-4 text-center"
                >
                  <span className="text-sm font-medium text-orange-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
}
