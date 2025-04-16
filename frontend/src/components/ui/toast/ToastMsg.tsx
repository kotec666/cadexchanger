import React from "react";
import Image from "next/image";
import { css } from "../../../../styled-system/css";

type Props = {
  message?: string | boolean;
  success?: boolean;
};
export const ToastMsg = (props: Props) => (
  <div className={css({ display: "flex", gap: "8px" })}>
    {!props.success && (
      <Image alt="error" height={16} src="/svg/error.svg" width={16} />
    )}
    <span className={css({ fontWeight: "400", fontSize: "md" })}>
      {props.message || "Something went wrong, try again"}
    </span>
  </div>
);
