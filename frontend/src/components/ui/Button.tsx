import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { css } from "../../../styled-system/css";

interface Props extends PropsWithChildren {
  href?: string;
}

const Button = (props: Props) => {
  const styles = css({
    cursor: "pointer",
    fontSize: { base: "sm", md: "md" },
    padding: { base: "8px 16px", md: "10px 20px" },
    fontWeight: "medium",
    color: "white",
    borderRadius: "md",
    transition: "background-color 0.2s ease",
    willChange: "background-color",
    backgroundColor: "rgba(44, 44, 44, 1)",
    _hover: {
      backgroundColor: "rgba(44, 44, 44, .8)",
    },
    _focus: {
      borderColor: "blue.500",
      outline: "2px solid #3b82f6",
      outlineOffset: "2px",
    },
  });

  if (!props.href) {
    return <button className={styles}>{props.children}</button>;
  }

  if (props.href) {
    return (
      <Link href={props.href} className={styles}>
        {props.children}
      </Link>
    );
  }

  return null;
};

export default Button;
