import { FormLabel, TextField } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { IErrorMessages } from "@/hooks/useErrorMessage";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { ContactForm } from "@/app/contact-us/types";
import ErrorTextWrapper from "@/components/ui/ErrorTextWrapper";
import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { checkIfFormErrorNotExist } from "@/helpers/checkIfFormErrorNotExist";

interface FormFieldProps {
  label: string;
  name: "email" | "message" | "name";
  placeholder: string;
  type?: "email";
  control: Control<ContactForm>;
  errors: FieldErrors<ContactForm>;
  serverErrors: { [p: string]: string | boolean };
  ErrorMessages: IErrorMessages;
}

const ContactFormField = (props: FormFieldProps) => {
  const { type = "text" } = props;

  const displayError = !checkIfFormErrorNotExist(
    props.errors,
    props.serverErrors,
    props.name,
  );
  return (
    <>
      <FormLabel
        error={displayError}
        className={css({
          fontSize: "14px",
          fontWeight: "medium",
          color: "gray.700",
        })}
      >
        {props.label}
      </FormLabel>
      <Controller
        name={props.name}
        defaultValue={""}
        control={props.control}
        rules={{
          required: {
            value: true,
            message: props.ErrorMessages.required,
          },
          ...(props.type === "email"
            ? {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: props.ErrorMessages.email,
                },
              }
            : {}),
          minLength: {
            value: 1,
            message: props.ErrorMessages.optionalMin(1),
          },
          maxLength: {
            value: 60,
            message: props.ErrorMessages.optionalMax(60),
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextField
            size="small"
            error={displayError}
            className={css({
              "& .MuiOutlinedInput-root": {
                height: "52px",
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "blue.300",
                },
                "&:hover:not(.Mui-disabled):not(.Mui-error) fieldset": {
                  borderColor: "blue.500 !important",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "blue.500",
                  borderWidth: "2px",
                },
                "&.Mui-error fieldset": {
                  borderColor: "red.500",
                },
              },
              "& .MuiInputBase-input": {
                padding: "12px 14px",
              },
            })}
            variant="outlined"
            placeholder={props.placeholder}
            type={type}
            value={value}
            onBlur={onBlur}
            onChange={(value) => {
              if (!value.target.value.includes(" ")) {
                onChange(value);
              }
            }}
          />
        )}
      />
      <div>
        {props.serverErrors?.[props.name] ? (
          <ErrorTextWrapper>
            {props.serverErrors?.[props.name]}
          </ErrorTextWrapper>
        ) : (
          <ErrorMessage
            errors={props.errors}
            name={props.name}
            render={({ message }) => (
              <ErrorTextWrapper>{message}</ErrorTextWrapper>
            )}
          />
        )}
      </div>
    </>
  );
};

export default ContactFormField;
