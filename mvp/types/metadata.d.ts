type OpenGraph = {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  images?: {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
  }[];
  site_name?: string;
  locale?: string;
};

type TwitterCard = {
  card: "summary" | "summary_large_image" | "app" | "player";
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
};

type MetaTag = {
  name: string;
  content: string;
};

type LinkTag = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

type Metadata = {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  openGraph?: OpenGraph;
  twitter?: TwitterCard;
  metaTags?: MetaTag[];
  linkTags?: LinkTag[];
  charset?: string;
  viewport?: string;
  author?: string;
  keywords?: string;
};

export default Metadata;
