"use client";
import React, { useState } from "react";
import { css } from "../../../../styled-system/css";
import { Box, FormLabel, TextareaAutosize } from "@mui/material";
import ErrorTextWrapper from "@/components/ui/ErrorTextWrapper";
import Button from "@/components/ui/Button";
import { Controller, useForm } from "react-hook-form";
import { useErrorMessage } from "@/hooks/useErrorMessage";
import { sendMessage } from "@/api/contacts";
import {
  ErrorObject,
  ErrorObjectArr,
  getFieldsErrors,
} from "@/helpers/getFieldsErrors";
import { ContactForm } from "@/app/contact-us/types";
import ContactFormField from "@/app/contact-us/components/ContactFormField";
import { ErrorMessage } from "@hookform/error-message";
import { checkIfFormErrorNotExist } from "@/helpers/checkIfFormErrorNotExist";

const Form = () => {
  const [state, setState] = useState({
    message: "",
    errors: {} as { [p: string]: string | boolean },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactForm>({
    mode: "onSubmit",
    reValidateMode: "onBlur",
  });

  const { ErrorMessages } = useErrorMessage();

  const handleSubmitForm = async (data: ContactForm) => {
    try {
      setState((s) => ({ ...s, errors: {} }));
      const res = await sendMessage(data);
      setState((prev) => ({ ...prev, message: res.message }));
    } catch (e) {
      if (e instanceof Error && "response" in e) {
        const errors = await (
          e as {
            response: { json: () => Promise<ErrorObject | ErrorObjectArr> };
          }
        ).response.json();
        const formattedErrors = getFieldsErrors(errors);
        setState((s) => ({ ...s, errors: formattedErrors }));
      } else {
        console.error("Unexpected error occurred:", e);
      }
    }
  };

  if (state.message) {
    return (
      <span className={css({ fontSize: "2xl", textAlign: "center" })}>
        {state.message}
      </span>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitForm)}
      className={css({
        padding: { base: "20px", md: "25px" },
        display: "flex",
        flexDirection: "column",
        width: { base: "100%", sm: "400px", md: "450px" },
        gap: "20px",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.12)",
      })}
      method="POST"
    >
      <Box
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        })}
      >
        <ContactFormField
          label="Name"
          placeholder="Type your name..."
          name="name"
          errors={errors}
          serverErrors={state.errors}
          control={control}
          ErrorMessages={ErrorMessages}
        />
      </Box>
      <Box
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        })}
      >
        <ContactFormField
          label="Email"
          placeholder="Type your email..."
          type="email"
          name="email"
          errors={errors}
          serverErrors={state.errors}
          control={control}
          ErrorMessages={ErrorMessages}
        />
      </Box>

      <FormLabel
        error={!checkIfFormErrorNotExist(errors, state.errors, "message")}
        className={css({
          fontSize: "14px",
          fontWeight: "medium",
          color: "gray.700",
        })}
      >
        Message
      </FormLabel>
      <Controller
        name="message"
        defaultValue={""}
        control={control}
        rules={{
          required: {
            value: true,
            message: ErrorMessages.required,
          },
          minLength: {
            value: 5,
            message: ErrorMessages.optionalMin(5),
          },
          maxLength: {
            value: 350,
            message: ErrorMessages.optionalMax(350),
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextareaAutosize
            className={css({
              border: "1px solid",
              borderColor: !checkIfFormErrorNotExist(
                errors,
                state.errors,
                "message",
              )
                ? "red.500"
                : "gray.300",
              padding: "12px 14px",
              borderRadius: "4px",
              fontSize: "16px",
              color: "gray.800",
              outline: "none",
              ring: "none",
              resize: "vertical",
              _hover: {
                borderColor: "blue.500",
              },
              _focus: {
                borderColor: "blue.500",
                borderWidth: "2px",
              },
              _invalid: {
                borderColor: "red.500",
              },
            })}
            minRows={4}
            maxRows={8}
            aria-label="message"
            placeholder="Type your message here..."
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <div>
        {state.errors?.message ? (
          <ErrorTextWrapper>{state.errors?.message}</ErrorTextWrapper>
        ) : (
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => (
              <ErrorTextWrapper>{message}</ErrorTextWrapper>
            )}
          />
        )}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default Form;
