import React from "react";
import Default from "@/components/layouts/Default";
import { Container } from "@mui/material";
import { css } from "../../../styled-system/css";
import Form from "@/app/contact-us/components/Form";
import { Metadata } from "next";
import { generateBasicMetadata } from "@/helpers/generateBasicMetadata";
import Script from "next/script";
import { LINKS } from "@/consts/links";

export const metadata: Metadata = generateBasicMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Cadex team. We're here to help with your business needs and answer any questions you may have.",
  keywords:
    "contact cadex, support, help, business contact, customer service, contact form",
  alternates: {
    canonical: LINKS.CONTACTS,
  },
  openGraph: {
    url: LINKS.CONTACTS,
  },
  schema: {
    type: "ContactPage",
    url: LINKS.CONTACTS,
    additionalData: {
      mainEntity: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@cadex.com",
        availableLanguage: ["English", "Russian"],
        areaServed: "Worldwide",
        contactOption: "TollFree",
      },
    },
  },
});

const ContactUsPage = () => {
  return (
    <Default noPadding>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          minHeight: {
            base: "calc(100vh - 120px)",
            md: "calc(100vh - 140px)",
            lg: "calc(100vh - 160px)",
          },
        })}
      >
        <Container
          component="section"
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 auto",
            paddingY: { base: "24px", lg: "40px" },
          })}
        >
          <Form />
        </Container>
      </div>
      <Script
        id="contact-page-jsonld"
        type="application/ld+json"
        nonce={process.env.NEXT_PUBLIC_NONCE}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us",
            description: "Contact form for Cadex customer support",
            url: `${process.env.NEXT_PUBLIC_WEB_URL}${LINKS.CONTACTS}`,
            mainEntity: {
              "@type": "ContactPoint",
              contactType: "customer service",
              email: "support@cadex.com",
              availableLanguage: ["English", "Russian"],
              areaServed: "Worldwide",
              contactOption: "TollFree",
            },
            potentialAction: {
              "@type": "ContactPoint",
              target: {
                "@type": "EntryPoint",
                urlTemplate: `${process.env.NEXT_PUBLIC_WEB_URL}${LINKS.CONTACTS}`,
                actionPlatform: [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform",
                ],
              },
            },
          }),
        }}
      />
    </Default>
  );
};

export default ContactUsPage;
