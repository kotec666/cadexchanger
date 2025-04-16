import React from "react";
import { css } from "../../../styled-system/css";
import { LINKS } from "@/consts/links";
import { Box, Container } from "@mui/material";
import Button from "@/components/ui/Button";

const ContactUs = () => {
  return (
    <Container
      component="section"
      className={css({
        marginTop: { base: "24px", md: "32px", lg: "40px" },
        paddingY: { base: "40px", md: "60px", lg: "80px" },
        backgroundColor: "gray.50",
      })}
    >
      <Box
        component="div"
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: { base: "16px", md: "20px" },
        })}
      >
        <h3
          className={css({
            fontSize: { base: "xl", md: "2xl", lg: "3xl" },
            fontWeight: "semibold",
            textAlign: "center",
            color: "gray.800",
          })}
        >
          Less important title
        </h3>
        <Box component="div">
          <Button href={LINKS.CONTACTS}>Contact us</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
