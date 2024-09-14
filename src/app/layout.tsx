import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { inter } from "@/config/fonts"; //El @ es sinónimo del root de mi aplicación
import { Providers } from "@/components";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
