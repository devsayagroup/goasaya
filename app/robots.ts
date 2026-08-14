// // app/robots.ts
// import type { MetadataRoute } from "next";

// const SITE_URL = "https://www.goasaya.com";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: [
//           "/api/",
//           "/_next/",
//           "/admin/",
//           "/reservation/thank-you", 
//           "/reservation/success",
//           "/reservation/failed",
//         ],
//       },
//     ],
//     sitemap: `${SITE_URL}/sitemap.xml`,
//     host: SITE_URL,
//   };
// }


import type { MetadataRoute } from "next";

const SITE_URL = "https://www.goasaya.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/reservation/thank-you", 
          "/reservation/success",
          "/reservation/failed",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
