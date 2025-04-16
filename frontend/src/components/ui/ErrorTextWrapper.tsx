"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { css } from "../../../styled-system/css";

interface ErrorTextWrapperProps {
  children?: React.ReactNode;
}

const ErrorTextWrapper = ({ children }: ErrorTextWrapperProps) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: "auto",
          opacity: 1,
          transition: {
            height: {
              duration: 0.3,
            },
            opacity: {
              duration: 0.25,
              // delay: 0.15,
              delay: 0,
            },
          },
        }}
        exit={{
          height: 0,
          opacity: 0,
          transition: {
            height: {
              duration: 0.3,
            },
            opacity: {
              duration: 0.5,
              delay: 0,
            },
          },
        }}
        className={css({
          color: "red.500",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          overflow: "hidden",
        })}
      >
        <div className="min-w-[13px] min-h-[13px]">
          <Image
            alt="input-error"
            height={20}
            src="/svg/error.svg"
            width={20}
          />
        </div>
        <span className="text-xs font-normal mt-[2px]">{children}</span>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorTextWrapper;
