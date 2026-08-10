import { SITE } from "./site";

export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.goasaya.com/#restaurant",
  "name": "GOASAYA",
  "image": "https://www.goasaya.com/rooms/frontview.webp",
  "url": "https://www.goasaya.com",
  "telephone": "+6281338382845",
  "priceRange": "$$$",
  "menu": "https://www.goasaya.com/menu",
  "servesCuisine": ["Asian Progressive", "Cocktails", "Fine Dining"],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PIK 2",
    "addressLocality": "Tangerang",
    "addressRegion": "Banten",
    "postalCode": "15214",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -6.0645,
    "longitude": 106.7042
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "23:00"
    }
  ]
};

export function orgJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}${SITE.logo}`,
        sameAs: [
        "https://www.instagram.com/goasaya.jkt",
        "https://www.tiktok.com/goasaya.jkt",
        ],
    };
}

export const websiteJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: "GOASAYA",
    url: SITE.url,
    logo: `${SITE.url}/images/logo.png`, 
    alternateName: ["GoaSaya", "Goasaya",],
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-ID",
});


export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
    "@type": "ListItem",
        position: idx + 1,
        name: it.name,
        item: it.url,
    })),
  };
}