import { useEffect } from "react";

export const SITE_URL = "https://www.modusaiassociates.com";

export const CEREMONY_IMAGE_FILE =
  "modus-ai-associates-8th-penang-governor-ribbon-cutting.webp";
export const SIGNING_IMAGE_FILE =
  "modus-ai-associates-partnership-signing-ceremony.webp";
export const LAUNCH_FEATURE_IMAGE_FILE =
  "modus-ai-associates-launch-partnerships-ceremony.webp";

export const LOGO_URL = `${SITE_URL}/modus-logo.png`;

export const CEREMONY_IMAGE_URL = `${SITE_URL}/${CEREMONY_IMAGE_FILE}`;
export const SIGNING_IMAGE_URL = `${SITE_URL}/${SIGNING_IMAGE_FILE}`;
export const LAUNCH_FEATURE_IMAGE_URL = `${SITE_URL}/${LAUNCH_FEATURE_IMAGE_FILE}`;

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL;
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

type MetaInput = {
  title: string;
  description: string;
  /** Path beginning with "/" (e.g. "/", "/official-launch-8th-penang-governor"). */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  /** JSON-LD structured data objects to inject for this page. */
  jsonLd?: Record<string, unknown>[];
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Imperatively manages document head SEO for a route (SPA-friendly, no deps).
 * Sets title, description, canonical, Open Graph, Twitter card and JSON-LD.
 */
export function useSeo({
  title,
  description,
  path,
  image = CEREMONY_IMAGE_URL,
  imageAlt,
  type = "website",
  jsonLd = [],
}: MetaInput) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = title;
    upsertMeta("name", "description", description);
    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "MODUS AI Associates");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", imageUrl);
    if (imageAlt) upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    if (imageAlt) upsertMeta("name", "twitter:image:alt", imageAlt);

    const injected: HTMLScriptElement[] = [];
    for (const block of jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "page");
      script.text = JSON.stringify(block);
      document.head.appendChild(script);
      injected.push(script);
    }

    return () => {
      injected.forEach((s) => s.remove());
    };
  }, [title, description, path, image, imageAlt, type, JSON.stringify(jsonLd)]);
}

export function organizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MODUS AI Associates",
    url: SITE_URL,
    description:
      "Malaysia's gateway to China's AI ecosystem — MIIT-certified AI training, enterprise transformation and integrated AI systems, including the M-Easy enterprise Super Apps for Malaysian SMEs and the halal economy.",
    logo: LOGO_URL,
    image: CEREMONY_IMAGE_URL,
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Dato' Dr Tan Boon Nunt",
      jobTitle: "Founder & Director",
    },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "MY",
        addressRegion: "Penang",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "MY",
      addressRegion: "Kuala Lumpur",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "admin@modusaiassociates.com",
      contactType: "customer service",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "AI Training",
      "Enterprise Transformation",
      "Malaysia-China AI Collaboration",
      "Halal Economy",
      "Malaysian SME Technology",
      "Business Software",
      "Southeast Asia Digital Transformation",
    ],
    sameAs: [] as string[],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function imageObjectSchema(opts: {
  url: string;
  caption: string;
  width?: number;
  height?: number;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: opts.url,
    url: opts.url,
    caption: opts.caption,
    creditText: "MODUS AI Associates",
    creator: {
      "@type": "Organization",
      name: "MODUS AI Associates",
    },
    license: "https://www.modusaiassociates.com/",
    copyrightNotice: "© 2025 MODUS AI Associates LLP. All rights reserved.",
    acquireLicensePage: "https://www.modusaiassociates.com/",
    ...(opts.width ? { width: opts.width } : {}),
    ...(opts.height ? { height: opts.height } : {}),
  };
}
