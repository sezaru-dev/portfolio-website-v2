import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import "./globals.css";
import { Providers } from "@/providers/ThemeProvider";

export const metadata: Metadata = {
  title: "Cezarlito O. Baguhin",
  description:
    "Transforming ideas into interactive web experiences. Cezarlito is a frontend developer specializing in React, Next.js, and Tailwind CSS, building fast, responsive, and visually engaging applications while exploring backend development for scalable solutions.",
  icons: {
    icon: "/cb-icon.svg",
  },
  keywords: [
    "Cezarlito O. Baguhin",
    "SezaruDev",
    "frontend developer",
    "Next.js portfolio",
    "React developer",
    "Tailwind CSS",
    "TypeScript",
    "web developer portfolio",
    "UI developer",
    "JavaScript developer",
    "personal website",
  ],
  openGraph: {
    title: "Cezarlito O. Baguhin",
    description:
      "Explore Cezar's web development projects, skills, and contact info. Built with Next.js, React, and Tailwind CSS.",
    url: "https://cezarlitobaguhin.vercel.app", // replace with your actual site URL
    siteName: "Cezarlito Baguhin Portfolio",
    locale: "en_US",
    type: "website",
  },
};


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
