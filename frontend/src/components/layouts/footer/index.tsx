import React from "react";
import { css } from "../../../../styled-system/css";
import { Container } from "@mui/material";

const Footer = () => {
  return (
    <footer
      className={css({
        position: "sticky",
        bottom: "0",
        height: { base: "60px", md: "70px", lg: "80px" },
        display: "flex",
        alignItems: "center",
        zIndex: "50",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 0px 3px 0 rgb(0 0 0 / 0.1)",
      })}
    >
      <Container
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          paddingX: { base: "16px", md: "24px" },
        })}
      >
        <span
          className={css({
            fontSize: { base: "lg", md: "xl", lg: "2xl" },
            fontWeight: "medium",
            color: "gray.700",
          })}
        >
          Softline {new Date().getFullYear()}
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
