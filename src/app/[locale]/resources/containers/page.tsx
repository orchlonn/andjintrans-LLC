"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("ResourcesContainers");
  const tc = useTranslations("Common");

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("selectionTitle")}</h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-500">
                Чингэлэгийн төрлийг сонгохдоо ачааны хэмжээс (урт/өргөн/өндөр), жин, ачих арга (хажуугаас/дээрээс),
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("typesTitle")}</h2>
            <div className="mt-8 space-y-6">
              {containerTypes.map((container, index) => (
                <motion.div
                  key={container.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                      <span className="text-sm font-bold text-white">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">{container.title}</h3>
                      <div className="mt-3 space-y-2 text-sm text-slate-500">
                        <p><span className="text-sky-600">Хэрэглээ:</span> {container.usage}</p>
                        {container.sizes && <p><span className="text-sky-600">Түгээмэл хэмжээ:</span> {container.sizes}</p>}
                        {container.advantage && <p><span className="text-sky-600">Давуу тал:</span> {container.advantage}</p>}
                        {container.feature && <p><span className="text-sky-600">Онцлог:</span> {container.feature}</p>}
                        {container.note && <p><span className="text-amber-600">Анхаарах:</span> {container.note}</p>}
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
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("quickTipsTitle")}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {quickTips.map((tip, index) => (
                <motion.div
                  key={tip.type}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-sky-200 bg-sky-50 p-4 shadow-sm"
                >
                  <p className="text-sm text-slate-500">{tip.type}</p>
                  <p className="mt-1 font-semibold text-sky-600">{tip.recommendation}</p>
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
              className="inline-flex items-center text-sky-600 hover:text-sky-500"
            >
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tc("backToResources")}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
