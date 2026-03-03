import Link from "next/link";

import PageHeader from "@/components/PageHeader";

const services = [
  {
    title: "Экспортын баримт бичиг бүрдүүлэлт",
    description:
      "Гарал үүслийн гэрчилгээ (C/O), экспортын зөвшөөрөл, худалдааны нэхэмжлэх (Commercial Invoice), савлалтын жагсаалт (Packing List) зэрэг шаардлагатай бүх баримтыг бүрдүүлэх",
  },
  {
    title: "Гаалийн экспортын мэдүүлэг",
    description:
      "Экспортын гаалийн мэдүүлэг гаргах, HS код ангилал, татвар/хураамжийн тооцоолол, шалгалт хяналтын процессыг зохион байгуулах",
  },
  {
    title: "Тээврийн маршрут төлөвлөлт",
    description:
      "Ачааны төрөл, хэмжээ, хугацааны шаардлагад тохирсон агаар, далай, төмөр зам, авто замын оновчтой маршрут сонголт",
  },
  {
    title: "Савлагаа ба шошгололт",
    description:
      "Экспортын стандартад нийцсэн савлагаа, олон улсын тэмдэглэгээ, шошгололтын зөвлөгөө, аюултай ачааны тусгай шаардлага",
  },
  {
    title: "Ачааны даатгал",
    description:
      "Экспортын тээвэрлэлтийн явцад үүсч болзошгүй эрсдэлээс хамгаалах All Risks, ICC A/B/C даатгалын зохион байгуулалт",
  },
  {
    title: "Хүлээн авагч талын уялдаа холбоо",
    description:
      "Очих орны гааль, терминал, агуулах, хүлээн авагч талтай уялдаа холбоо тогтоож, ачааг саадгүй хүргэх",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Ачааны мэдээлэл авах",
    description:
      "Ачааны төрөл, жин, хэмжээ, очих газар, хугацааны шаардлагыг тодорхойлох",
  },
  {
    step: 2,
    title: "Маршрут ба үнийн санал",
    description:
      "Оновчтой тээврийн маршрут, хугацаа, өртгийн хувилбаруудыг боловсруулж санал болгох",
  },
  {
    step: 3,
    title: "Баримт бичиг бүрдүүлэлт",
    description:
      "Экспортын зөвшөөрөл, гарал үүслийн гэрчилгээ, гаалийн мэдүүлэг зэрэг бүх баримтыг бүрдүүлэх",
  },
  {
    step: 4,
    title: "Гаалийн бүрдүүлэлт",
    description:
      "Экспортын гаалийн мэдүүлэг гаргаж, шалгалт хяналтын процессыг дамжуулах",
  },
  {
    step: 5,
    title: "Ачилт ба тээвэрлэлт",
    description:
      "Ачааг тээврийн хэрэгсэлд ачиж, тээвэрлэлтийг эхлүүлэх, booking баталгаажуулах",
  },
  {
    step: 6,
    title: "Хяналт ба хүргэлт",
    description:
      "Тээвэрлэлтийн явцыг бодит цагаар хянаж, хүлээн авагч талд мэдэгдэж, хүргэлтийг баталгаажуулах",
  },
];

const exportGoods = [
  {
    title: "Ашигт малтмал, түүхий эд",
    description:
      "Нүүрс, зэс баяжмал, төмрийн хүдэр, флюорит зэрэг уул уурхайн бүтээгдэхүүн",
  },
  {
    title: "Ноос, ноолуур, арьс шир",
    description:
      "Малын гаралтай түүхий эд, боловсруулсан ноолуурын бүтээгдэхүүн",
  },
  {
    title: "Хүнсний бүтээгдэхүүн",
    description:
      "Мах, махан бүтээгдэхүүн, сүүн бүтээгдэхүүн, бусад хүнсний экспорт",
  },
  {
    title: "Барилгын материал",
    description: "Цемент, арматур, модон материал зэрэг барилгын бүтээгдэхүүн",
  },
];

export default function ExportServicePage() {
  return (
    <>
      <PageHeader
        badge="Экспорт тээвэр"
        title="Монголоос дэлхийд"
        highlightedTitle="экспортын шийдэл"
        description="Монгол Улсаас гадаад руу бараа, бүтээгдэхүүн экспортлоход шаардлагатай тээвэрлэлт, баримт бичиг бүрдүүлэлт, гаалийн зохион байгуулалтыг нэг цэгээс хийнэ."
        badgeColor="orange"
      />

      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Экспорт тээвэр гэж юу вэ?
            </h2>
            <div className="mt-6 rounded-3xl border border-sky-200 bg-sky-50 p-8">
              <p className="text-lg leading-relaxed text-slate-600">
                Экспорт тээвэр нь Монгол Улсаас гадаад орнуудад бараа,
                бүтээгдэхүүн, түүхий эд тээвэрлэх цогц үйлчилгээ юм. Үүнд ачааны
                савлагаа, баримт бичиг бүрдүүлэлт, гаалийн мэдүүлэг, тээврийн
                маршрут төлөвлөлт, даатгал, хүлээн авагч талын уялдаа холбоо
                зэрэг бүхий л шатыг хамарна.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Бид БНХАУ, ОХУ, Европ, Зүүн өмнөд Ази, Төв Ази зэрэг чиглэлд
                агаар, далай, төмөр зам, авто замын тээврийн бүх хэлбэрээр
                экспортын тээвэрлэлтийг зохион байгуулна.
              </p>
            </div>
          </section>

          {/* Export Goods */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Экспортын гол бүтээгдэхүүнүүд
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {exportGoods.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Бид юу хийж гүйцэтгэдэг вэ?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500">
                    <svg
                      className="h-5 w-5 text-white"
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
                  <h3 className="font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Steps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Ажиллах процесс
            </h2>
            <div className="mt-8 space-y-4">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Note */}
          <section className="mb-16">
            <div className="rounded-3xl border border-sky-200 bg-sky-50 p-8">
              <h3 className="text-lg font-semibold text-sky-600">
                Яагаад биднийг сонгох вэ?
              </h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  15+ жилийн олон улсын тээвэр зуучлалын туршлага
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Дэлхийн 50+ орны агент, түншийн сүлжээ
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Химийн болон аюултай ачаа (DG)-ны тээвэрлэлтэд мэргэшсэн
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  Бодит цагийн хяналт, ил тод мэдээллийн урсгал
                </li>
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 text-center shadow-sm md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Экспортын үнийн санал авах
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                Ачааны төрөл, хэмжээ, очих газар, хугацааны шаардлагад
                тохируулсан экспортын тээврийн үнийн санал авахыг хүсвэл
                бидэнтэй холбогдоно уу.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-base font-semibold text-white transition-all hover:shadow-lg hover:shadow-sky-100"
                >
                  Холбоо барих
                  <svg
                    className="ml-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
