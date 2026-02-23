import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
  title: "Анджинтранс ХХК | Олон улсын тээвэр зуучлал",
  description:
    "Олон улсын болон дотоодын тээвэр зуучлал, агаар, далай, төмөр зам, авто, транзит тээвэр, даатгал, гаалийн бүрдүүлэлтийн цогц шийдэл. 15+ жилийн туршлагатай найдвартай түнш.",
  keywords: "тээвэр зуучлал, олон улсын тээвэр, логистик, агаарын тээвэр, далайн тээвэр, төмөр замын тээвэр, авто тээвэр, транзит, гаалийн бүрдүүлэлт, монгол",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      <body className={`${notoSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-screen overflow-hidden bg-[#13131c] text-white">
          <Background />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
