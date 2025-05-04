
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  lang?: string;
}

const SEOHead = ({
  title,
  description,
  canonicalUrl,
  ogImage = "/ChatGPT Image 3 พ.ค. 2568 18_28_43.png",
  ogType = "website",
  keywords = "INFIWORLD, crypto marketplace, คริปโต, ฟรีแลนซ์, การจอง, บริการ, ซื้อขาย, เช่า, ร้านค้า",
  lang = "th"
}: SEOHeadProps) => {
  const siteUrl = window.location.origin;
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={`${siteUrl}${ogImage}`} />}
      <meta property="og:site_name" content="INFIWORLD CRYPTO" />
      <meta property="og:locale" content={lang === "th" ? "th_TH" : "en_US"} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />}
      
      {/* Mobile Meta */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#28a745" />
      
      {/* WCAG and Accessibility */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
    </Helmet>
  );
};

export default SEOHead;
