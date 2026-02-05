"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const wagonTypes = [
  {
    title: "Битүү вагон (Box / Covered Wagon)",
    usage: "Цаг агаараас хамгаалах шаардлагатай ерөнхий ачаа, хайрцагласан бараа, тоног төхөөрөмж.",
    advantage: "Бороо, цас, тоос шорооноос хамгаалалт сайтай.",
    suitable: "Сэлбэг, цахилгаан хэрэгсэл, савласан бүтээгдэхүүн, хэврэг ачаа (савлалттай).",
  },
  {
    title: "Хагас вагон (Gondola / Open Wagon)",
    usage: "Дээвэргүй, ихэвчлэн нурмаг болон цаг агаарт мэдрэмтгий бус ачаа.",
    advantage: "Ачих/буулгах ажиллагаа хурдан, их багтаамжтай.",
    suitable: "Нүүрс, хүдэр, чулуу, зарим төрлийн барилгын материал.",
  },
  {
    title: "Тавцант вагон (Flat Wagon / Platform Wagon)",
    usage: "Контейнер, дугуйт техник, урт эд анги, тоног төхөөрөмж.",
    advantage: "Контейнер тээвэр, крантай терминалд хурдан шилжүүлэн ачилт хийхэд тохиромжтой.",
    note: "Бэхэлгээ (securing/lashing) чухал.",
  },
  {
    title: "Цистерн вагон (Tank Wagon)",
    usage: "Шингэн болон хий, нефтийн бүтээгдэхүүн, зарим химийн бодис.",
    advantage: "Их хэмжээний шингэнийг аюулгүй тээвэрлэх зориулалттай.",
    note: "DG ангилал, дүүргэлтийн норм, хамгаалалтын шаардлага, цэвэрлэгээ (шаардлагатай үед).",
  },
  {
    title: "Бункер вагон (Hopper Wagon)",
    usage: "Нурмаг/асгардаг ачаа — үр тариа, цемент, бордоо, нунтаг материал.",
    advantage: "Доороосоо асгах/буулгах боломжтой, хурдан ажиллагаатай.",
    note: "Чийг, бөөгнөрөл, урсалттай холбоотой эрсдэл.",
  },
  {
    title: "Дулаалгатай/Тусгай температурын вагон (Insulated / Temperature-Controlled)",
    usage: "Температурын хэлбэлзэлд мэдрэмтгий ачаа (кейсээс хамаарна).",
    advantage: "Улирлын нөхцөл, урт транзит үед хамгаалалт нэмэгдүүлдэг.",
    note: "Транзит хугацаа, улирал, савлалтын шаардлагатай уялдуулах.",
  },
  {
    title: "Рефрижератор вагон (Refrigerator Wagon)",
    usage: "Хүйтэн хэлхээ шаардсан хүнс, зарим эм/эмнэлгийн бүтээгдэхүүн (боломжит тохиолдолд).",
    note: "Бодит боломж, чиглэл, үйлчилгээний олдоц хязгаарлагдмал байж болно.",
  },
  {
    title: "Транспортер вагон (Heavy-duty Transporter)",
    usage: "Хэт хүнд, урт/овортой төсөл ачаа, үйлдвэрийн том тоног төхөөрөмж.",
    advantage: "Маш өндөр даацтай, тусгай хийцтэй.",
    note: "Маршрутын судалгаа, терминалын боломж, зөвшөөрөл, бэхэлгээний зураглал шаардлагатай байх нь түгээмэл.",
  },
  {
    title: "Тусгай зориулалтын вагон (Special Wagons)",
    usage: "Машин, мод, ган, ороомог (coil), авто тээврийн хэрэгсэл зэрэг тусгай тээвэрлэлтийн хэрэгцээтэй ачаа.",
    note: "Ачааны хэлбэр, ачих төхөөрөмж, хамгаалалтын шаардлагаас хамааран сонгоно.",
  },
];

const quickTips = [
  { type: "Цаг агаараас хамгаалах хэрэгтэй", recommendation: "Битүү вагон" },
  { type: "Нурмаг/асгардаг ачаа", recommendation: "Хагас вагон / Бункер вагон" },
  { type: "Контейнер, тоног төхөөрөмж", recommendation: "Тавцант вагон" },
  { type: "Шингэн/зарим химийн", recommendation: "Цистерн вагон" },
  { type: "Хэт хүнд/овортой төсөл ачаа", recommendation: "Транспортер вагон" },
];

export default function WagonsPage() {
  return (
    <>
      <PageHeader
        badge="Вагоны төрөл"
        title="Төмөр замын вагоны"
        highlightedTitle="9 төрөл"
        description="Ачааны төрөл, жин/эзэлхүүн, ачих-буулгах арга, цаг агаарын хамгаалалт, DG эсэхийг харгалзан зөв вагон сонгох нь чухал."
        badgeColor="purple"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Selection Note */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Вагон сонгохдоо анхаарах зүйл</h2>
            <div className="mt-6 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Вагоны төрлийг сонгохдоо ачааны төрөл, жин/эзэлхүүн, ачих-буулгах арга (кран, сэрээт өргөгч, конвейер гэх мэт),
                цаг агаарын хамгаалалт шаардлага, чийг/температурын нөхцөл, мөн аюултай ачаа (DG) эсэх-ийг зэрэг харгалзана.
                Зөв вагон сонголт нь аюулгүй ажиллагаа, саатал, гэмтэл болон нэмэлт зардлын эрсдэлийг бууруулдаг.
              </p>
            </div>
          </motion.section>

          {/* Wagon Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Вагоны төрлүүд</h2>
            <div className="mt-8 space-y-6">
              {wagonTypes.map((wagon, index) => (
                <motion.div
                  key={wagon.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-pink-500">
                      <span className="text-sm font-bold text-slate-900">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{wagon.title}</h3>
                      <div className="mt-3 space-y-2 text-sm text-slate-400">
                        <p><span className="text-purple-400">Хэрэглээ:</span> {wagon.usage}</p>
                        {wagon.advantage && <p><span className="text-emerald-400">Давуу тал:</span> {wagon.advantage}</p>}
                        {wagon.suitable && <p><span className="text-cyan-400">Тохиромжтой ачаа:</span> {wagon.suitable}</p>}
                        {wagon.note && <p><span className="text-orange-400">Анхаарах:</span> {wagon.note}</p>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quick Tips */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Вагоны сонголтын &quot;түргэн зөвлөмж&quot;</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={tip.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4"
                >
                  <p className="text-sm text-slate-400">{tip.type}</p>
                  <p className="mt-1 font-semibold text-emerald-400">{tip.recommendation}</p>
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
              className="inline-flex items-center text-purple-400 hover:text-purple-300"
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
