import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { NavBar } from "@/components/NavBar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollReset } from "@/components/ScrollReset";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ryoma — AI-Native Frontend Engineer",
  description:
    "I build fast, cinematic & AI-driven products. React / Next.js / TypeScript. JP-EN Bilingual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased dark`}
    >
      <body
        className="min-h-full flex flex-col text-[#f5f1e8]"
        style={{ fontFamily: "var(--font-inter), sans-serif", background: "#050505" }}
      >
        {/* Run before hydration — prevents browser scroll restoration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration='manual';window.scrollTo(0,0);`,
          }}
        />
        <div className="noise-grid" aria-hidden />
        <LanguageProvider>
          <ScrollReset />
          <NavBar />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
