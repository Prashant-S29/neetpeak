import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateSeo } from "~/utils/generateSeo";
import { Footer, Header } from "~/components/layout";
import { inter } from "~/public/fonts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = () =>
  generateSeo({
    title: {
      template: "%s | NeetPeak",
      default:
        "NeetPeak | A one stop solution for all you medical prep with latest courses and study materials",
    },
    description:
      "A one stop solution for all you medical prep with latest courses and study materials.",
    url: "/",
  });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
