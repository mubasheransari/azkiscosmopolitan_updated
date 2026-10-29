import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--f-body" });

export const metadata = {
  title: { default: "AZKIS Cosmopolitan — Government & Defence", template: "%s | AZKIS Cosmopolitan" },
  description: "Engineering, defence supplies and turnkey infrastructure projects for the Ministry of Defence, banks and corporates in Pakistan since 1973.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={body.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
