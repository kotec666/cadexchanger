import Default from "@/components/layouts/Default";
import Hero from "@/app/components/Hero";
import Description from "@/app/components/Description";
import ContactUs from "@/app/components/ContactUs";
import { Metadata } from "next";
import { generateBasicMetadata } from "@/helpers/generateBasicMetadata";
import Script from "next/script";
import env from "../../env";
import { LINKS } from "@/consts/links";

export const metadata: Metadata = generateBasicMetadata({
  title: "Cadex - Main page",
  description:
    "Cadex - modern solution for your business. Innovative technologies and professional approach",
  keywords: "cadex, technologies, business, innovations, development",
  alternates: {
    canonical: LINKS.HOME,
  },
  schema: {
    type: "WebSite",
  },
});

const Page = () => {
  return (
    <Default>
      <Hero />
      <Description />
      <ContactUs />
      <Script
        id="home-page-jsonld"
        type="application/ld+json"
        nonce={process.env.NEXT_PUBLIC_NONCE}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Cadex",
            url: `${env.web_url}/`,
          }),
        }}
      />
    </Default>
  );
};

export default Page;
