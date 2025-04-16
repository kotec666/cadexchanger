import React from "react";
import { css } from "../../../styled-system/css";
import { LINKS } from "@/consts/links";
import { Box, Container } from "@mui/material";
import Button from "@/components/ui/Button";
import DescriptionItem from "@/app/components/DescriptionItem";

const Description = () => {
  return (
    <Container
      component="section"
      className={css({
        paddingTop: { base: "24px", md: "32px", lg: "40px" },
      })}
    >
      <h2
        className={css({
          textAlign: "center",
          fontSize: { base: "2xl", md: "3xl", lg: "4xl" },
          fontWeight: "600",
          marginBottom: { base: "24px", md: "32px", lg: "40px" },
        })}
      >
        Also very important title
      </h2>
      <Box
        component="div"
        className={css({
          display: "grid",
          paddingY: { base: "24px", md: "32px", lg: "40px" },
          gridTemplateColumns: {
            base: "1fr",
            sm: "1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: { base: "20px", md: "25px", lg: "30px" },
        })}
      >
        {[...Array(6)].map((_, i) => (
          <DescriptionItem key={i} />
        ))}
      </Box>
      <Box
        component="div"
        className={css({
          display: "flex",
          justifyContent: "center",
          paddingBottom: { base: "24px", md: "32px", lg: "40px" },
        })}
      >
        <Button href={LINKS.CONTACTS}>Contact us</Button>
      </Box>
    </Container>
  );
};

export default Description;
