import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "links.subtrant.icu",
  description: "Generate short links",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased flex flex-col justify-center mt-32`}
      >
        <NavBar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
