import { BUSINESS_INFO, SEO } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": SEO.url,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.description,
    url: SEO.url,
    telephone: BUSINESS_INFO.contact.phone,
    email: BUSINESS_INFO.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zipCode,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-23.5629", // DEMO - Substitua pelas coordenadas reais
      longitude: "-46.6873",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "05:30",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "07:00",
        closes: "13:00",
      },
    ],
    priceRange: "R$ 497 - R$ 997",
    image: SEO.ogImage,
    sameAs: [
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.facebook,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
