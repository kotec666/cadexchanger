import React from "react";
import { css } from "../../../styled-system/css";
import { Box, Container } from "@mui/material";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import Video from "@/app/components/Video";

const Hero = () => {
  return (
    <Container
      component="section"
      className={css({
        display: "grid",
        gridTemplateColumns: { base: "1fr", lg: "1fr 1fr" },
        gap: { base: "24px", lg: "40px" },
        paddingTop: { base: "24px", lg: "40px" },
      })}
    >
      <Box
        component="div"
        className={css({
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          gap: { base: "16px", lg: "24px" },
        })}
      >
        <h1
          className={css({
            fontSize: { base: "2xl", md: "3xl", lg: "5xl" },
            fontWeight: "600",
            lineHeight: "tight",
          })}
        >
          Most important title on the page
        </h1>
        <p
          className={css({
            fontSize: { base: "sm", md: "md", lg: "lg" },
            lineHeight: "relaxed",
            color: "gray.600",
            maxWidth: "550px",
          })}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </p>
      </Box>
      <Box
        component="div"
        className={css({
          width: "100%",
        })}
      >
        <Video
          id="dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
        />
      </Box>
      <hr
        className={css({
          width: "100%",
          gridColumn: "1 / -1",
          borderColor: "gray.200",
          marginTop: { base: "24px", lg: "40px" },
        })}
      />
    </Container>
  );
};

export default Hero;
