"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Andjintrans"
              width={140}
              height={42}
              className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-slate-400">
              Олон улсын тээвэр зуучлалын найдвартай түнш. 2011 оноос хойш
              тасралтгүй үйл ажиллагаа.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white">Үйлчилгээ</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services/air" className="hover:text-cyan-400">
                  Агаарын тээвэр
                </Link>
              </li>
              <li>
                <Link href="/services/sea" className="hover:text-cyan-400">
                  Далайн тээвэр
                </Link>
              </li>
              <li>
                <Link href="/services/rail" className="hover:text-cyan-400">
                  Төмөр замын тээвэр
                </Link>
              </li>
              <li>
                <Link href="/services/road" className="hover:text-cyan-400">
                  Авто замын тээвэр
                </Link>
              </li>
              <li>
                <Link href="/services/transit" className="hover:text-cyan-400">
                  Транзит тээвэр
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Танд хэрэгтэй</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>
                <Link
                  href="/resources/incoterms"
                  className="hover:text-cyan-400"
                >
                  Инкотермс 2020
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/containers"
                  className="hover:text-cyan-400"
                >
                  Контейнерын төрөл
                </Link>
              </li>
              <li>
                <Link href="/resources/wagons" className="hover:text-cyan-400">
                  Вагоны төрөл
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/dangerous-goods"
                  className="hover:text-cyan-400"
                >
                  Аюултай ачаа (DG)
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/packaging"
                  className="hover:text-cyan-400"
                >
                  Сав баглаа боодол
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/documents"
                  className="hover:text-cyan-400"
                >
                  Шаардлагатай баримт
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white">Холбоо барих</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Улаанбаатар, СБД, 9-р хороо</li>
              <li>7-р хороолол, Алтайн гудамж</li>
              <li>Хоймор оффис, 207 тоот</li>
              <li className="pt-2">
                <a href="tel:+97670117127" className="hover:text-cyan-400">
                  976-7011-7127
                </a>
              </li>
              <li>
                <a href="tel:+97670117129" className="hover:text-cyan-400">
                  976-7011-7129
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@andjintrans.com"
                  className="hover:text-cyan-400"
                >
                  info@andjintrans.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Анджинтранс ХХК. Бүх эрх хуулиар
            хамгаалагдсан.
          </p>
          <p className="text-sm text-slate-600">
            <a
              href="https://www.andjintrans.com"
              className="hover:text-cyan-400"
            >
              www.andjintrans.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
