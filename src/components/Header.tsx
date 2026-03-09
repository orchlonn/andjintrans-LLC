"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const tc = useTranslations("Common");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/" as const, label: t("home") },
    { href: "/about" as const, label: t("about") },
    { href: "/services" as const, label: t("services") },
    { href: "/resources" as const, label: t("resources") },
  ];

  const hasHero = pathname === "/" || pathname === "/about" || pathname === "/services" || pathname === "/resources";

  // On pages with hero background images, use dark style until scrolled
  const isDark = hasHero && !scrolled;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "border-b border-transparent"
            : "border-b border-slate-200 bg-white/85"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex justify-start">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Andjintrans logo"
                  width={160}
                  height={48}
                  className="h-10 w-auto sm:h-12"
                />
              </Link>
            </motion.div>
          </div>

          <nav className="hidden min-w-0 items-center justify-center gap-0.5 lg:flex lg:gap-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  className="shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative whitespace-nowrap rounded-full px-2.5 py-2 text-xs transition-colors duration-300 sm:px-3 sm:text-sm xl:px-4 ${
                      active
                        ? isDark
                          ? "text-white font-medium"
                          : "text-sky-700 font-medium"
                        : isDark
                          ? "text-slate-300 hover:text-white"
                          : "text-slate-600 hover:text-sky-600"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                          isDark ? "bg-white/10" : "bg-sky-50"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <div className="hidden lg:block">
              <LanguageSwitcher scrolled={!isDark} />
            </div>
            <Link
              href="/contact"
              className="hidden rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 lg:inline-flex"
            >
              {tc("getQuote")}
            </Link>
            <div className="lg:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300 ${
                  isDark
                    ? "border-white/20 bg-white/10"
                    : "border-slate-200 bg-slate-50"
                }`}
                aria-label="Toggle menu"
              >
                <div className="flex w-5 flex-col gap-1.5">
                  <motion.span
                    animate={
                      mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                    }
                    className={`h-0.5 w-full transition-colors duration-300 ${
                      isDark ? "bg-white" : "bg-slate-700"
                    }`}
                  />
                  <motion.span
                    animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className={`h-0.5 w-full transition-colors duration-300 ${
                      isDark ? "bg-white" : "bg-slate-700"
                    }`}
                  />
                  <motion.span
                    animate={
                      mobileMenuOpen
                        ? { rotate: -45, y: -6 }
                        : { rotate: 0, y: 0 }
                    }
                    className={`h-0.5 w-full transition-colors duration-300 ${
                      isDark ? "bg-white" : "bg-slate-700"
                    }`}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={
          mobileMenuOpen
            ? { opacity: 1, pointerEvents: "auto" as const }
            : { opacity: 0, pointerEvents: "none" as const }
        }
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed bottom-0 right-0 top-0 z-40 w-72 border-l border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
      >
        <div className="flex h-full flex-col px-6 pt-24">
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    mobileMenuOpen
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: 20 }
                  }
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? "bg-sky-50 text-sky-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-sky-600"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              {tc("getQuote")}
            </Link>
          </div>

          <div className="mt-6">
            <LanguageSwitcher scrolled />
          </div>

          <div className="mt-auto pb-8">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} {t("home") === "Home" ? "Andjintrans LLC" : "Анджинтранс ХХК"}
            </p>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
