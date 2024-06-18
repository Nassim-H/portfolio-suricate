import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const inter = Merriweather({ weight: "300", display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Suricate DZ",
  description: "Réalisé par Nassim Hassain",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
