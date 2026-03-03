"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

const documentCategories = [
  {
    titleKey: "cat1Title" as const,
    items: [
      { name: "Commercial Invoice (Инвойс)", description: "Үнэ, валют, худалдагч/худалдан авагч, нөхцөл" },
      { name: "Packing List (Савлагааны жагсаалт)", description: "Тоо ширхэг, савлагааны төрөл, жин/хэмжээс" },
      { name: "Sales Contract / PO (Гэрээ/захиалга)", description: "Шаардлагатай үед" },
      { name: "Certificate of Origin (Гарал үүслийн гэрчилгээ)", description: "Шаардлага тавигдвал" },
    ],
  },
  {
    titleKey: "cat2Title" as const,
    items: [
      { name: "Air Waybill (AWB / e-AWB)", description: "Агаарын тээвэр" },
      { name: "Bill of Lading (B/L)", description: "Далайн тээвэр" },
      { name: "CMR / Road Consignment Note", description: "Авто замын тээвэр" },
      { name: "Rail Waybill", description: "Төмөр замын тээвэр" },
      { name: "Multimodal Transport Document (MTD)", description: "Холимог тээвэр" },
    ],
  },
  {
    titleKey: "cat3Title" as const,
    items: [
      { name: "Customs Declaration (Гаалийн мэдүүлэг)", description: "Импорт/экспортод" },
      { name: "HS code ба ангиллын мэдээлэл", description: "Барааны код, нэршил, тайлбар" },
      { name: "Импортын татвар/НӨАТ тооцоонд шаардлагатай мэдээлэл", description: "Инвойс, тээврийн зардал гэх мэт" },
      { name: "Тусгай зөвшөөрөл/лиценз", description: "Зохицуулалттай бараанд" },
    ],
  },
  {
    titleKey: "cat4Title" as const,
    items: [
      { name: "Certificate of Conformity / Compliance (тохирлын)", description: "Бүтээгдэхүүнээс хамаарна" },
      { name: "Quality Certificate / Test Report (чанарын/туршилтын)", description: "Бүтээгдэхүүнээс хамаарна" },
      { name: "Sanitary/Phytosanitary (эрүүл ахуй/ургамлын хорио цээр)", description: "Хүнс, ургамалд" },
      { name: "Veterinary (мал эмнэлэг)", description: "Шаардлагатай үед" },
    ],
  },
  {
    titleKey: "cat5Title" as const,
    items: [
      { name: "Cargo Insurance Certificate/Policy (ачааны даатгал)", description: "Хийсэн бол" },
      { name: "Payment documents (төлбөрийн баримт, банкны бичиг)", description: "Шаардлагатай үед" },
      { name: "Letter of Credit (L/C) docs", description: "Аккредитивтэй хэлцэлд" },
    ],
  },
  {
    titleKey: "cat6Title" as const,
    items: [
      { name: "SDS/MSDS", description: "Аюулгүй ажиллагааны мэдээллийн хуудас" },
      { name: "UN number, Proper Shipping Name, Class, Packing Group", description: "DG ангиллын мэдээлэл" },
      { name: "DG Declaration", description: "Тээврийн төрлөөс хамаарч" },
      { name: "Temperature/handling instructions", description: "Тусгай горимтой ачаанд" },
    ],
  },
  {
    titleKey: "cat7Title" as const,
    items: [
      { name: "Shipping Instructions", description: "B/L мэдээлэл бөглөх өгөгдөл" },
      { name: "VGM (Verified Gross Mass)", description: "Шаардлагатай тохиолдолд" },
      { name: "Container/Seal details", description: "Чингэлэг, лацны дугаар" },
    ],
  },
];

export default function DocumentsPage() {
  const t = useTranslations("ResourcesDocuments");
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
          {/* Document Categories */}
          {documentCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{t(category.titleKey)}</h2>
              <div className="mt-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-500">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.name}</h4>
                      <p className="mt-1 text-sm text-slate-500">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}

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
