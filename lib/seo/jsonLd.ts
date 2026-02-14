import { SITE } from "./site";

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