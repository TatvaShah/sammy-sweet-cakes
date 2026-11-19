import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Sammy Sweet Cakes",
  tagline: "Custom birthday, wedding and gender reveal cakes, baked at home in Vaughan.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Vaughan, ON",
  siteUrl: "https://sammy-sweet-cakes-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#f0a6b3" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "At-home baker in Vaughan",
    headline: "Custom birthday, wedding and gender reveal cakes",
    subhead: "Sammy Sweet Cakes is a Vaughan at-home baker and decorator of custom birthday cakes, two-tier wedding cakes and 6 inch gender reveal cakes. Send an Instagram message to order.",
    images: [
      { src: "/images/post-4.jpg", alt: "An autumn two-tier wedding cake with rust and gold flowers from Sammy Sweet Cakes", width: 1080, height: 1440 },
      { src: "/images/post-3.jpg", alt: "A 6 inch gender reveal cake with a teddy bear and Baby coming 2027 from Sammy Sweet Cakes", width: 1080, height: 1080 },
      { src: "/images/post-6.jpg", alt: "A fall wedding cake with buttercream roses from Sammy Sweet Cakes", width: 1080, height: 1129 },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom birthday cakes",
    "Two-tier wedding cakes",
    "6 inch gender reveal cakes",
    "Based in Vaughan",
  ],

  about: {
    title: "Welcome to Sammy Sweet Cakes",
    body: [
      "Sammy Sweet Cakes is an at-home baker and decorator in Vaughan. Posted work has included custom birthday cakes, autumn two-tier wedding cakes with buttercream roses, a 6 inch gender reveal cake, vintage buttercream cakes, and a potted plant garden cake.",
      "Send an Instagram message to order. A menu and pricing are pinned on Instagram.",
    ],
    image: { src: "/images/post-4.jpg", alt: "An autumn two-tier wedding cake with rust and gold flowers from Sammy Sweet Cakes", width: 1080, height: 1440 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "A menu and pricing are pinned on Instagram. Send a message for a quote on your date and design.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Custom birthday cakes" },
          { name: "Two-tier wedding cakes", description: "Posted work has included autumn wedding cakes with buttercream roses." },
          { name: "Gender reveal cakes", description: "A posted size is 6 inches." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent cakes",
    items: [
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "An autumn two-tier wedding cake with rust and gold flowers from Sammy Sweet Cakes", caption: "An autumn wedding cake", href: "https://www.instagram.com/p/De-sOxEjmeN/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A 6 inch gender reveal cake with a teddy bear and Baby coming 2027 from Sammy Sweet Cakes", caption: "A 6 inch gender reveal cake", href: "https://www.instagram.com/p/DfkJcKekcLv/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1129, alt: "A fall wedding cake with buttercream roses from Sammy Sweet Cakes", caption: "A fall wedding cake", href: "https://www.instagram.com/p/DeFIlFnm9Ss/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "A vintage buttercream cake from Sammy Sweet Cakes", caption: "A vintage cake", href: "https://www.instagram.com/p/Dd-Q8K0DtCP/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1434, alt: "A pink and orange birthday cake from Sammy Sweet Cakes", caption: "A pink and orange cake", href: "https://www.instagram.com/p/Ddc02dGDvae/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "sammysweetcakess",
    embeds: ["https://www.instagram.com/p/De-sOxEjmeN/", "https://www.instagram.com/p/DfkJcKekcLv/", "https://www.instagram.com/p/DeFIlFnm9Ss/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message to order. Sammy Sweet Cakes is based in Vaughan.",
    dmMessage: "Hi Sammy Sweet Cakes! I would like to order.\nDate needed:\nCake type:\nTheme or flavour:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/sammysweetcakess" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message to order. A menu and pricing are pinned on Instagram." },
    { q: "Where are you based?", a: "Sammy Sweet Cakes is an at-home baker in Vaughan." },
    { q: "What kinds of cakes do you make?", a: "Custom birthday cakes, two-tier wedding cakes and 6 inch gender reveal cakes, as posted." },
  ],

  contact: {
    title: "Contact",
    area: "Vaughan, ON",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/sammysweetcakess/" },
    ],
  },

  seo: {
    title: "Sammy Sweet Cakes | Custom cakes in Vaughan",
    description: "At-home baker in Vaughan making custom birthday cakes, two-tier wedding cakes and 6 inch gender reveal cakes. Order by Instagram DM.",
    keywords: ["Sammy Sweet Cakes", "Vaughan cakes", "wedding cakes Vaughan", "gender reveal cake Vaughan"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
