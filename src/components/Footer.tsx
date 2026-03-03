"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("Footer");
  const tc = useTranslations("Common");

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-50/90 backdrop-blur-xl">
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
            <p className="mt-4 text-sm text-slate-500">
              {t("description")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-slate-900">{t("services")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/services/air" className="hover:text-sky-600">
                  {t("airTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services/sea" className="hover:text-sky-600">
                  {t("seaTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services/rail" className="hover:text-sky-600">
                  {t("railTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services/road" className="hover:text-sky-600">
                  {t("roadTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services/transit" className="hover:text-sky-600">
                  {t("transitTransport")}
                </Link>
              </li>
              <li>
                <Link href="/services/export" className="hover:text-sky-600">
                  {t("exportTransport")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-slate-900">{t("resources")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>
                <Link
                  href="/resources/incoterms"
                  className="hover:text-sky-600"
                >
                  {t("incoterms")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/containers"
                  className="hover:text-sky-600"
                >
                  {t("containers")}
                </Link>
              </li>
              <li>
                <Link href="/resources/wagons" className="hover:text-sky-600">
                  {t("wagons")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/dangerous-goods"
                  className="hover:text-sky-600"
                >
                  {t("dangerousGoods")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/packaging"
                  className="hover:text-sky-600"
                >
                  {t("packaging")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/documents"
                  className="hover:text-sky-600"
                >
                  {t("documents")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-slate-900">{t("contact")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-500">
              <li>{t("address1")}</li>
              <li>{t("address2")}</li>
              <li>{t("address3")}</li>
              <li className="pt-2">
                <a href="tel:+97670117127" className="hover:text-sky-600">
                  976-7011-7127
                </a>
              </li>
              <li>
                <a href="tel:+97670117129" className="hover:text-sky-600">
                  976-7011-7129
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@andjintrans.com"
                  className="hover:text-sky-600"
                >
                  info@andjintrans.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {tc("copyright")}
          </p>
          <p className="text-sm text-slate-400">
            <a
              href="https://www.andjintrans.com"
              className="hover:text-sky-600"
            >
              www.andjintrans.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
