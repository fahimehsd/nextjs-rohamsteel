import Header from "@/components/Header";
import "./globals.css";
import { Scheherazade_New } from "next/font/google";
import Footer from "@/components/Footer";

const font = Scheherazade_New({
  subsets: ["arabic"],
  weight: ["500", "600", "700"]
});
export const metadata = {
  title: "شرکت صنایع فولاد رهام استیل",
  description: "شرکت صنایع فولاد رهام استیل"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl" className={font.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
