"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";

const anyModeTerms = [
  {
    code: "EXW",
    name: "Ex Works",
    description: "Худалдагч барааг өөрийн байранд бэлэн болгоно, цаашдын ихэнх үүргийг худалдан авагч хариуцна.",
  },
  {
    code: "FCA",
    name: "Free Carrier",
    description: "Худалдагч экспортын бүрдүүлэлт хийж, нэрлэсэн газар тээвэрлэгчид (эсвэл худалдан авагчийн төлөөлөгчид) хүлээлгэн өгнө.",
  },
  {
    code: "CPT",
    name: "Carriage Paid To",
    description: "Худалдагч үндсэн тээврийг төлнө, харин эрсдэл бараа тээвэрлэгчид өгмөгц шилжинэ.",
  },
  {
    code: "CIP",
    name: "Carriage and Insurance Paid To",
    description: "CPT-тэй адил боловч худалдагч тээврийн даатгалыг (ихэвчлэн өндөр түвшин) зохион байгуулна.",
  },
  {
    code: "DAP",
    name: "Delivered at Place",
    description: "Худалдагч нэрлэсэн газар хүртэл хүргэнэ, буулгалт орохгүй.",
  },
  {
    code: "DPU",
    name: "Delivered at Place Unloaded",
    description: "Худалдагч нэрлэсэн газарт хүргэж буулгаж өгнө.",
  },
  {
    code: "DDP",
    name: "Delivered Duty Paid",
    description: "Худалдагч импортын гааль, татвар/хураамжийг хүртэл хариуцаж \"татвар төлөгдсөн\" байдлаар хүргэнэ.",
  },
];

const seaTerms = [
  {
    code: "FAS",
    name: "Free Alongside Ship",
    description: "Худалдагч барааг хөлгийн хажууд (боомтын талбай дээр) хүргэж өгнө.",
  },
  {
    code: "FOB",
    name: "Free On Board",
    description: "Худалдагч барааг хөлөг онгоцонд ачиж өгнө.",
  },
  {
    code: "CFR",
    name: "Cost and Freight",
    description: "Худалдагч тээврийг төлнө, эрсдэл хөлөг дээр ачсаны дараа шилжинэ.",
  },
  {
    code: "CIF",
    name: "Cost, Insurance and Freight",
    description: "CFR-тэй адил боловч худалдагч даатгал зохион байгуулна.",
  },
];

const recommendations = [
  {
    title: "Контейнертэй тээвэр",
    description: "Контейнертэй тээвэр боомтын терминалаар дамждаг тул FOB нь зарим тохиолдолд шаардлага хангагддаггүй тул олон кейст FCA/CPT/CIP илүү тохиромжтой байдаг.",
  },
  {
    title: "DAP vs DPU",
    description: "Буулгалт хэнийх вэ гэдгийг ялгана (DPU-д буулгалт орно).",
  },
  {
    title: "DDP сонголт",
    description: "Импортын татвар, гааль, баримтын эрсдэл өндөр тул зөвхөн туршлагатай тал бүрэн хянах боломжтой үед сонгох нь зохимжтой.",
  },
];

export default function IncotermsPage() {
  return (
    <>
      <PageHeader
        badge="Инкотермс 2020"
        title="Олон улсын худалдааны"
        highlightedTitle="11 нөхцөл"
        description="Инкотермс® нь худалдагч ба худалдан авагчийн хооронд хаана зардал шилжих, хаана эрсдэл шилжих, хэний хариуцах үүрэг ямар байхыг нэг мөр болгодог."
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* What is Incoterms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Инкотермс гэж юу вэ?</h2>
            <div className="mt-6 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent p-8">
              <p className="text-lg leading-relaxed text-slate-300">
                Инкотермс® (International Commercial Terms) нь Олон улсын худалдааны танхим (ICC)-аас боловсруулсан, олон
                улсын худалдаанд түгээмэл хэрэглэгддэг дүрэм бөгөөд худалдагч ба худалдан авагчийн хооронд хаана зардал шилжих,
                хаана эрсдэл шилжих, мөн хэний хариуцах үүрэг (тээвэр зохион байгуулалт, даатгал, гааль гэх мэт) ямар байхыг нэг
                мөр болгодог.
              </p>
              <p className="mt-4 text-lg font-semibold text-cyan-400">
                Инкотермс нь үнэ (price) биш — харин хариуцлагын хил юм.
              </p>
            </div>
          </motion.section>

          {/* Any Mode Terms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Бүх төрлийн тээвэрт хэрэглэгддэг (Any mode)</h2>
            <div className="mt-8 space-y-4">
              {anyModeTerms.map((term, index) => (
                <motion.div
                  key={term.code}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500">
                      <span className="text-sm font-bold text-slate-900">{term.code}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{term.name}</h3>
                      <p className="mt-2 text-slate-400">{term.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Sea Terms */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Далайн/усан замд хэрэглэгддэг (Sea & Inland waterway only)</h2>
            <div className="mt-8 space-y-4">
              {seaTerms.map((term, index) => (
                <motion.div
                  key={term.code}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-purple-500">
                      <span className="text-sm font-bold text-slate-900">{term.code}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{term.name}</h3>
                      <p className="mt-2 text-slate-400">{term.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Recommendations */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-white md:text-3xl">Түгээмэл сонголтын зөвлөмж (практик)</h2>
            <div className="mt-8 space-y-4">
              {recommendations.map((rec, index) => (
                <motion.div
                  key={rec.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6"
                >
                  <h3 className="font-semibold text-emerald-400">{rec.title}</h3>
                  <p className="mt-2 text-slate-300">{rec.description}</p>
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
