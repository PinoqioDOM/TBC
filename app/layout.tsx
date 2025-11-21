import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import "./globals.css";

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ["georgian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-georgian",
});

export const metadata: Metadata = {
  title: "TBC | ვაკანსიები",
  description: "იპოვე საუკეთესო ვაკანსიები TBC-ში",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body
        className={`${notoSansGeorgian.variable} font-sans antialiased m-0 p-0 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}