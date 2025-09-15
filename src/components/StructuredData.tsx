// components/seo/StructuredData.tsx
"use client"

import Script from "next/script"

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Cezarlito O. Baguhin",
    alternateName: "SezaruDev",
    url: "https://cezarlitobaguhin.vercel.app",
    jobTitle: "Frontend Developer",
    description:
      "Transforming ideas into interactive web experiences using React, Next.js, and modern web technologies.",
    sameAs: [
      "https://github.com/sezaru-dev",
      "https://linkedin.com/in/cezarlito-baguhin-184748175",
      "https://www.facebook.com/sezaru20",
      "https://www.tiktok.com/@sezarudev",
    ],
  }

  return (
    <Script
      id="ld-json-home"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
