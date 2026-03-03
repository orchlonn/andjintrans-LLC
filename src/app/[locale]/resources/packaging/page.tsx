"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const primaryPackaging = [
  { title: "Сав (Bottle/Jar/Can)", description: "Шил, хуванцар, металл сав" },
  { title: "Уут (Bag/Sachet)", description: "Жижиг уут, вакуум уут" },
  { title: "Лонх/канистр (Bottle/Canister/Jerrycan)", description: "Шингэн бүтээгдэхүүнд" },
  { title: "Бөөрөнхий сав (Drum) жижиг хувилбар", description: "Жижгээр савласан химийн/шингэн бүтээгдэхүүн" },
];

const secondaryPackaging = [
  { title: "Картон хайрцаг (Carton/Box)", description: "Хамгийн түгээмэл" },
  { title: "Давхарласан хайрцаг (Double-wall carton)", description: "Илүү бат бөх" },
  { title: "Дотоод дүүргэлт (Cushioning/Dunnage)", description: "Хөөс, цаас, агаарын дэр, хөвөнцөр гэх мэт" },
  { title: "Агшдаг хальс (Shrink wrap)", description: "Багц тогтоох, бохирдлоос хамгаалах" },
  { title: "Суналттай хальс (Stretch film)", description: "Тавиуртай ачаа боох" },
];

const tertiaryPackaging = [
  { title: "Тавиур/паллет (Pallet)", description: "Модон, хуванцар, металл паллет" },
  { title: "Паллет хайрцаг (Pallet box / Pallet container)", description: "Тавиур дээр суурилсан хайрцаг" },
  { title: "Крэйт/модон хайрцаг (Crate/Wooden case)", description: "Тоног төхөөрөмж, хэврэг ачаанд" },
  { title: "Фумигацитай мод (ISPM 15)", description: "Олон улсад шаардлагатай тохиолдолд" },
  { title: "Багц бэхэлгээ (Strapping/Banding)", description: "PP/PET/ган тууз" },
  { title: "Булан хамгаалалт (Corner protector/Edge board)", description: "Хайрцаг дарагдахаас сэргийлэх" },
  { title: "Паллетаар бэхлэх (Palletizing)", description: "Тавиур дээр багцлан бэхлэх" },
];

const commonPackagingTypes = [
  {
    category: "Хайрцаг/Box төрлүүд",
    items: [
      "Картон хайрцаг (Corrugated carton)",
      "Хүнд даацын хайрцаг (Heavy-duty carton)",
      "Модон хайрцаг (Wooden case)",
      "Крэйт (Wooden crate) – сараалжин/каркас хэлбэртэй",
    ],
  },
  {
    category: "Уут/Bag төрлүүд",
    items: [
      "PP нэхмэл уут (Woven PP bag)",
      "PE уут (PE bag/liner)",
      "Жамбо уут / Big bag (FIBC) – 500–2000кг орчим нурмаг ачаанд",
      "Вакуум уут (Vacuum bag) – чийг/исэлдэлтийн эрсдэл бууруулах",
    ],
  },
  {
    category: "Сав/Drum/IBC",
    items: [
      "Бөмбөр (Drum) – ган/хуванцар (шингэн, нунтаг, химийн)",
      "IBC сав (Intermediate Bulk Container) – 800–1000L, шингэн/зарим химийн",
      "Канистр (Canister/Jerrycan) – 5–30L орчим",
      "Цилиндр (Gas cylinder) – хийн сав (тусгай шаардлагатай)",
    ],
  },
  {
    category: "Ороомог/Ролл төрлүүд",
    items: [
      "Ролл (Roll) – даавуу, цаас, хальс",
      "Койл (Coil) – ган ороомог (тусгай бэхэлгээ шаардана)",
    ],
  },
];

const protectiveMaterials = [
  { title: "Чийг баригч (Desiccant)", description: "Контейнерийн конденсацийн эрсдэлд" },
  { title: "Чийгний хамгаалалт (Moisture barrier bag/foil)", description: "Мэдрэмтгий бараанд" },
  { title: "Доргилт шингээгч (Foam/air pillows/bubble wrap)", description: "Цохилтоос хамгаалах" },
  { title: "Дүүргэгч (Dunnage)", description: "Модон дэр, картон, хийлдэг дэр" },
  { title: "Slip sheet", description: "Паллетгүйгээр ачих үед ашиглаж болох нимгэн суурь" },
];

const quickTips = [
  { type: "Ерөнхий бараа", recommendation: "Картон хайрцаг + паллет + stretch film" },
  { type: "Хэврэг/үнэтэй", recommendation: "Crate/wooden case + cushioning + \"Fragile\" тэмдэглэгээ" },
  { type: "Нурмаг ачаа", recommendation: "FIBC (jumbo bag) эсвэл hopper-т тохирох савлагаа" },
  { type: "Шингэн/химийн", recommendation: "Drum/IBC/канистр (шаардлагатай бол UN стандарттай)" },
  { type: "Чийг ихтэй маршрут", recommendation: "Desiccant + moisture barrier + зөв агааржуулалт" },
];

export default function PackagingPage() {
  const t = useTranslations("ResourcesPackaging");
  const tc = useTranslations("Common");

  return (
    <>
      <PageHeader
        badge={t("badge")}
        title={t("title")}
        highlightedTitle={t("highlightedTitle")}
        description={t("description")}
        badgeColor="emerald"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Why Important */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("whyTitle")}</h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-transparent p-8 shadow-sm">
              <p className="text-lg leading-relaxed text-slate-500">
                Сав баглаа боодол нь ачааг тээвэрлэлтийн явцад доргилт, мөргөлт, чийг, тоос, температурын өөрчлөлт зэрэг
                эрсдэлээс хамгаалж, ачих-буулгах ажиллагааг аюулгүй, үр ашигтай болгодог. Зөв савлагаа нь гэмтэл, буцаалт,
                даатгалын маргаан, саатал болон нэмэлт зардлын эрсдэлийг мэдэгдэхүйц бууруулна.
              </p>
            </div>
          </motion.section>

          {/* Primary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("primaryTitle")}</h2>
            <p className="mt-2 text-slate-500">Бүтээгдэхүүнтэй шууд хүрэлцэх савлагаа.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {primaryPackaging.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Secondary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("secondaryTitle")}</h2>
            <p className="mt-2 text-slate-500">Анхан савлагаатай бүтээгдэхүүнийг багцалж, хамгаалах савлагаа.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {secondaryPackaging.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tertiary Packaging */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("tertiaryTitle")}</h2>
            <p className="mt-2 text-slate-500">Тээвэр, агуулах, ачих-буулгах зориулалттай &quot;тээврийн нэгж&quot; хэлбэрийн савлагаа.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tertiaryPackaging.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-sky-600">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Common Packaging Types */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("commonTitle")}</h2>
            <div className="mt-8 space-y-6">
              {commonPackagingTypes.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{category.category}</h3>
                  <ul className="mt-3 space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Protective Materials */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{t("protectiveTitle")}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {protectiveMaterials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm"
                >
                  <h4 className="font-semibold text-amber-600">{item.title}</h4>
                  <p className="mt-1 text-sm text-slate-500">{item.description}</p>
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
