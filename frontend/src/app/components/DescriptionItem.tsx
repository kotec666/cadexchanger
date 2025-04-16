import React from "react";
import { css } from "../../../styled-system/css";
import { Box } from "@mui/material";

const DescriptionItem = () => {
  return (
    <Box
      component="div"
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        gap: { base: "8px", md: "12px" },
      })}
    >
      <span
        className={css({
          fontSize: { base: "xl", md: "2xl" },
          fontWeight: "semibold",
        })}
      >
        Title
      </span>
      <p
        className={css({
          fontSize: { base: "sm", md: "md", lg: "lg" },
          paddingX: "2px",
          color: "gray.600",
          lineHeight: "relaxed",
        })}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
        leo et condimentum
      </p>
    </Box>
  );
};

export default DescriptionItem;
