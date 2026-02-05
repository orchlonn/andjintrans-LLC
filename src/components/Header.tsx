"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Нүүр" },
  { href: "/about", label: "Бидний тухай" },
  { href: "/services", label: "Үйлчилгээ" },
  { href: "/resources", label: "Танд хэрэгтэй" },
  { href: "/news", label: "Мэдээ мэдээлэл" },
  { href: "/contact", label: "Холбоо барих" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
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

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                      active ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-white/10"
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

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(34,211,238,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-all lg:inline-flex"
            >
              Үнийн санал авах
            </Link>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-full bg-white"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-full bg-white"
              />
              <motion.span
                animate={
                  mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-full bg-white"
              />
            </div>
          </motion.button>
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
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile menu */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? { x: 0 } : { x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed bottom-0 right-0 top-0 z-40 w-72 border-l border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl lg:hidden"
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
                        ? "bg-white/10 text-white"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 block rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-center text-base font-semibold text-slate-900"
            >
              Үнийн санал авах
            </Link>
          </motion.div>

          <div className="mt-auto pb-8">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Анджинтранс ХХК
            </p>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
