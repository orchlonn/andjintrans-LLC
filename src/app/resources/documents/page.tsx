"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const documentCategories = [
  {
    title: "1) Худалдааны үндсэн баримтууд",
    items: [
      { name: "Commercial Invoice (Инвойс)", description: "Үнэ, валют, худалдагч/худалдан авагч, нөхцөл" },
      { name: "Packing List (Савлагааны жагсаалт)", description: "Тоо ширхэг, савлагааны төрөл, жин/хэмжээс" },
      { name: "Sales Contract / PO (Гэрээ/захиалга)", description: "Шаардлагатай үед" },
      { name: "Certificate of Origin (Гарал үүслийн гэрчилгээ)", description: "Шаардлага тавигдвал" },
    ],
  },
  {
    title: "2) Тээврийн баримт бичиг (mode-оос хамаарна)",
    items: [
      { name: "Air Waybill (AWB / e-AWB)", description: "Агаарын тээвэр" },
      { name: "Bill of Lading (B/L)", description: "Далайн тээвэр" },
      { name: "CMR / Road Consignment Note", description: "Авто замын тээвэр" },
      { name: "Rail Waybill", description: "Төмөр замын тээвэр" },
      { name: "Multimodal Transport Document (MTD)", description: "Холимог тээвэр" },
    ],
  },
  {
    title: "3) Гаалийн бүрдүүлэлтэд холбоотой",
    items: [
      { name: "Customs Declaration (Гаалийн мэдүүлэг)", description: "Импорт/экспортод" },
      { name: "HS code ба ангиллын мэдээлэл", description: "Барааны код, нэршил, тайлбар" },
      { name: "Импортын татвар/НӨАТ тооцоонд шаардлагатай мэдээлэл", description: "Инвойс, тээврийн зардал гэх мэт" },
      { name: "Тусгай зөвшөөрөл/лиценз", description: "Зохицуулалттай бараанд" },
    ],
  },
  {
    title: "4) Стандарт, чанар, тохирлын баримтууд",
    items: [
      { name: "Certificate of Conformity / Compliance (тохирлын)", description: "Бүтээгдэхүүнээс хамаарна" },
      { name: "Quality Certificate / Test Report (чанарын/туршилтын)", description: "Бүтээгдэхүүнээс хамаарна" },
      { name: "Sanitary/Phytosanitary (эрүүл ахуй/ургамлын хорио цээр)", description: "Хүнс, ургамалд" },
      { name: "Veterinary (мал эмнэлэг)", description: "Шаардлагатай үед" },
    ],
  },
  {
    title: "5) Даатгал ба санхүүгийн баримтууд",
    items: [
      { name: "Cargo Insurance Certificate/Policy (ачааны даатгал)", description: "Хийсэн бол" },
      { name: "Payment documents (төлбөрийн баримт, банкны бичиг)", description: "Шаардлагатай үед" },
      { name: "Letter of Credit (L/C) docs", description: "Аккредитивтэй хэлцэлд" },
    ],
  },
  {
    title: "6) Тусгай төрлийн ачаанд (ялангуяа химийн/DG) нэмэгдэх",
    items: [
      { name: "SDS/MSDS", description: "Аюулгүй ажиллагааны мэдээллийн хуудас" },
      { name: "UN number, Proper Shipping Name, Class, Packing Group", description: "DG ангиллын мэдээлэл" },
      { name: "DG Declaration", description: "Тээврийн төрлөөс хамаарч" },
      { name: "Temperature/handling instructions", description: "Тусгай горимтой ачаанд" },
    ],
  },
  {
    title: "7) Далайн контейнерт түгээмэл нэмэлт",
    items: [
      { name: "Shipping Instructions", description: "B/L мэдээлэл бөглөх өгөгдөл" },
      { name: "VGM (Verified Gross Mass)", description: "Шаардлагатай тохиолдолд" },
      { name: "Container/Seal details", description: "Чингэлэг, лацны дугаар" },
    ],
  },
];

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        badge="Шаардлагатай баримт"
        title="Тээвэрлэлтийн"
        highlightedTitle="баримт бичгүүд"
        description="Олон улсын тээвэр, гаалийн бүрдүүлэлтэд шаардлагатай баримт бичгүүдийн жагсаалт ба тайлбар."
        badgeColor="cyan"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Document Categories */}
          {documentCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-xl font-bold text-white md:text-2xl">{category.title}</h2>
              <div className="mt-6 space-y-3">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIndex * 0.05 }}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500">
                      <svg className="h-4 w-4 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <p className="mt-1 text-sm text-slate-400">{item.description}</p>
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
