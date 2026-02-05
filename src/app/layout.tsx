import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GymForge | Professional Gym Equipment — B2B Wholesale",
  description:
    "GymForge is a leading B2B wholesale supplier of professional-grade gym equipment. Equip your gym with strength equipment, cardio machines, free weights, and more at unbeatable wholesale prices.",
  keywords: [
    "gym equipment",
    "wholesale gym",
    "B2B fitness",
    "commercial gym equipment",
    "strength equipment",
    "cardio machines",
    "professional gym",
  ],
  openGraph: {
    title: "GymForge | Professional Gym Equipment — B2B Wholesale",
    description:
      "Equip your gym for greatness. Professional-grade equipment at wholesale prices for gyms, studios, and fitness centers.",
    type: "website",
    locale: "en_US",
    siteName: "GymForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymForge | Professional Gym Equipment — B2B Wholesale",
    description:
      "Equip your gym for greatness. Professional-grade equipment at wholesale prices.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
