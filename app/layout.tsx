import "./globals.css";
import { Lato } from "next/font/google";

export const metadata = {
  title: "Kumpulan hadiths",
  description: "Kumpulan Hadiths",
};

const lato = Lato({ weight: "400", subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>{children}</body>
    </html>
  );
}
