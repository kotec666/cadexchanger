import Image from "next/image";
import Link from "next/link";
import { css } from "../../../../styled-system/css";
import { Container } from "@mui/material";
import { LINKS } from "@/consts/links";
import Button from "@/components/ui/Button";

const Header = () => {
  return (
    <header
      className={css({
        position: "sticky",
        top: "0",
        zIndex: "50",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      })}
    >
      <Container
        className={css({
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          height: { base: "60px", md: "70px", lg: "80px" },
          px: { base: "4", md: "6" },
        })}
      >
        <Link href={LINKS.HOME} className={css({ _hover: { opacity: "0.8" } })}>
          <Image
            src="/images/logo.webp"
            alt="logo"
            width={125}
            height={25}
            className={css({
              transition: "transform 0.3s ease",
              _hover: {
                transform: "scale(1.01)",
              },
            })}
          />
        </Link>
        <nav>
          <Button href={LINKS.CONTACTS}>Contact us</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
