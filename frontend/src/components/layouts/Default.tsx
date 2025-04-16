import React from "react";
import Header from "./header";
import Footer from "./footer";
import { css } from "../../../styled-system/css";
import ToastComponent from "@/components/ui/toast/ToastComponent";

interface DefaultProps extends React.PropsWithChildren {
  noPadding?: boolean;
}

const Default = (props: DefaultProps) => {
  const { noPadding = false } = props;

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      })}
    >
      <Header />
      <main
        className={css({
          paddingBottom: noPadding ? "0" : "40px",
          flex: "1 1 auto",
        })}
      >
        {props.children}
      </main>
      <Footer />
      <ToastComponent position="bottom-right" />
    </div>
  );
};

export default Default;
