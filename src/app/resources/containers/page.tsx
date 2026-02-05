"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const containerTypes = [
  {
    title: "Стандарт хуурай контейнер (Dry Container)",
    usage: "Ерөнхий ачаа, хайрцагласан бараа, тоног төхөөрөмж, тавиуртай (pallet) ачаа.",
    sizes: "20', 40'",
    advantage: "Хамгийн өргөн сүлжээтэй, өртөг харьцангуй боломжийн, ихэнх чиглэлд олдоцтой.",
  },
  {
    title: "Өндөр контейнер (High Cube / HC)",
    usage: "Эзэлхүүн ихтэй боловч жин харьцангуй бага ачаа (жишээ: савласан бүтээгдэхүүн, хөнгөн үйлдвэрийн бараа).",
    sizes: "40'HC, 45'HC",
    advantage: "Өндөр нь стандарт 40'-өөс илүү тул илүү их багтаамжтай.",
  },
  {
    title: "Хөргүүртэй контейнер (Reefer)",
    usage: "Температурын горим шаардсан хүнс, эм, зарим химийн бүтээгдэхүүн (шаардлагаас хамаарна).",
    feature: "Температур тохируулга, агаарын эргэлт, зарим тохиолдолд чийгийн хяналт.",
    note: "Урьдчилан \"set point\", савлалт, агааржуулалтын шаардлага, цахилгаан залгалт (plug-in) төлөвлөлт хэрэгтэй.",
  },
  {
    title: "Дээрээ нээлттэй контейнер (Open Top)",
    usage: "Өндөр овортой, дээрээс кран/өргөгчөөр ачих шаардлагатай ачаа.",
    feature: "Дээвэр нь брезент/хучлагаар хаагддаг.",
    note: "Бэхэлгээ (lashing) болон ус, чийгнээс хамгаалах зохион байгуулалт чухал.",
  },
  {
    title: "Хажуугаа нээдэг контейнер (Open Side / Side Door)",
    usage: "Хажуугаас уртаар нь ачих шаардлагатай, урт эд анги/тоног төхөөрөмж, тусгай ачих нөхцөлтэй ачаа.",
    advantage: "Ачилт/буулгалтыг илүү уян хатан болгодог (олдоц чиглэлээс хамаарна).",
  },
  {
    title: "Тавцант контейнер (Flat Rack)",
    usage: "Өргөн/урт овортой машин, тоног төхөөрөмж, төсөл ачаа (OOG).",
    feature: "Хажуу, дээвэргүй (эсвэл эвхэгддэг хажуутай) тул овортой ачаанд тохиромжтой.",
    note: "Бэхэлгээ, тэнцвэржилт, хамгаалалтын шийдэл (securing/lashing) зайлшгүй.",
  },
  {
    title: "Платформ контейнер (Platform)",
    usage: "Маш хүнд, маш том овортой ачаа (flat rack-аас ч илүү шаардлагатай үед).",
    feature: "Зөвхөн суурь тавцан бүтэцтэй.",
    note: "Зөвшөөрөл, маршрутын судалгаа, тусгай бэхэлгээ ихэвчлэн шаарддаг.",
  },
  {
    title: "Сав-танк контейнер (Tank Container)",
    usage: "Шингэн ачаа, химийн бүтээгдэхүүн, хүнсний шингэн (ачааны төрөл, шаардлагаас хамаарна).",
    feature: "Металл танк + хамгаалалтын хүрээтэй.",
    note: "DG шаардлага, цэвэрлэгээ (tank cleaning), температурын нөхцөл, зөв дүүргэлт/аюулгүй ажиллагаа чухал.",
  },
  {
    title: "Агааржуулалттай контейнер (Ventilated)",
    usage: "Агаар солилцоо шаардсан зарим төрлийн бараа (жишээ: тодорхой төрлийн үр тариа, хөдөө аж ахуйн бүтээгдэхүүн — кейсээс хамаарна).",
    note: "Чийг, үнэр, конденсацийн эрсдэлийг тооцох хэрэгтэй.",
  },
  {
    title: "Изоляцтай контейнер (Insulated / Thermal)",
    usage: "Температурын хэлбэлзлээс хамгаалах шаардлагатай ачаа (хөргүүртэй системгүй).",
    note: "Улирлын нөхцөл, транзит хугацаанд тохируулан сонгоно.",
  },
];

const quickTips = [
  { type: "Ерөнхий ачаа", recommendation: "Dry 20'/40'" },
  { type: "Эзэлхүүн ихтэй", recommendation: "40'HC / 45'HC" },
  { type: "Хүйтэн хэлхээ шаардсан", recommendation: "Reefer" },
  { type: "Өндөр овортой (дээрээс ачих)", recommendation: "Open Top" },
  { type: "Өргөн/урт овортой", recommendation: "Flat Rack / Platform" },
  { type: "Шингэн/зарим химийн", recommendation: "Tank container" },
];

export default function ContainersPage() {
  return (
    <>
      <PageHeader
        badge="Контейнерын төрөл"
        title="Чингэлэг/Контейнерын"
        highlightedTitle="10 төрөл"
        description="Ачааны хэмжээс, жин, ачих арга, температурын шаардлага, DG эсэх зэрэг шаардлагыг харгалзан зөв контейнер сонгох нь чухал."
        badgeColor="cyan"
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
            <h2 className="text-2xl font-bold text-white md:text-3xl">Контейнер сонгохдоо анхаарах зүйл</h2>
            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Контейнерын төрлийг сонгохдоо ачааны хэмжээс (урт/өргөн/өндөр), жин, ачих арга (хажуугаас/дээрээс),
                температурын шаардлага, чийг/доргилтын эрсдэл, мөн DG (аюултай) эсэх зэрэг шаардлагыг зэрэг харгалзана.
                Зөв контейнер сонголт нь өртөг, аюулгүй ажиллагаа, саатал гарах эрсдэлд шууд нөлөөлдөг.
              </p>
            </div>
          </motion.section>

          {/* Container Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Контейнерын төрлүүд</h2>
            <div className="mt-8 space-y-6">
              {containerTypes.map((container, index) => (
                <motion.div
                  key={container.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                      <span className="text-sm font-bold text-slate-900">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white">{container.title}</h3>
                      <div className="mt-3 space-y-2 text-sm text-slate-400">
                        <p><span className="text-cyan-400">Хэрэглээ:</span> {container.usage}</p>
                        {container.sizes && <p><span className="text-cyan-400">Түгээмэл хэмжээ:</span> {container.sizes}</p>}
                        {container.advantage && <p><span className="text-emerald-400">Давуу тал:</span> {container.advantage}</p>}
                        {container.feature && <p><span className="text-purple-400">Онцлог:</span> {container.feature}</p>}
                        {container.note && <p><span className="text-orange-400">Анхаарах:</span> {container.note}</p>}
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
            <h2 className="text-2xl font-bold text-white md:text-3xl">Контейнер сонгох &quot;түргэн зөвлөмж&quot;</h2>
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
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
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
