import { toast } from "react-toastify";
import { ToastMsg } from "@/components/ui/toast/ToastMsg";
import React from "react";

export enum ERRORS {
  INVALID_LENGTH = "INVALID_LENGTH",
  INVALID_EMAIL = "INVALID_EMAIL",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
}

type ErrorFields = {
  [key in ERRORS]: { field: string; message: string };
};

const errorFields: {
  [key in ERRORS]: { field: string; message: string };
} = {
  [ERRORS.INVALID_EMAIL]: { field: "email", message: "Invalid email" },
  [ERRORS.INVALID_LENGTH]: { field: "field_name", message: "Invalid length" },
  [ERRORS.UNKNOWN_ERROR]: { field: "field_name", message: "Unexpected error" },
};

type PersonalErrorFields = {
  [key: string]: {
    [key in ERRORS]?: string;
  };
};

const personalErrorFields: PersonalErrorFields = {
  email: {
    [ERRORS.INVALID_EMAIL]: "Invalid email",
    [ERRORS.INVALID_LENGTH]: "Invalid length",
  },
  name: {
    [ERRORS.INVALID_LENGTH]: "Invalid length",
  },
  message: {
    [ERRORS.INVALID_LENGTH]: "Invalid length",
  },
};

export type ErrorObjectArr = {
  message: {
    property: string;
    original: {
      classValidatorLikeError: string;
    };
    message: string[];
  }[];
  error: string;
  statusCode: number;
};

export type ErrorObject = {
  message: string;
  statusCode: number;
};

export const getFieldsErrors = (
  errorObject: ErrorObject | ErrorObjectArr,
): { [key: string]: string | boolean } => {
  const errors: { [key: string]: string | boolean } = {};

  if (Array.isArray(errorObject.message)) {
    errorObject.message.forEach((error) => {
      const errorKey = Object.keys(errorFields).find(
        (key) => ERRORS[key as keyof typeof ERRORS] === error.message[0],
      );

      if (errorKey) {
        const fieldName = error?.property as string;
        errors[fieldName] =
          personalErrorFields?.[fieldName]?.[errorKey as keyof typeof ERRORS] ||
          true;
      }
    });

    return errors;
  } else {
    const errorMessage =
      errorFields[errorObject.message as keyof ErrorFields]?.message;

    toast.error(
      React.createElement(ToastMsg, {
        message: errorMessage,
      }),
      { icon: false },
    );

    return {
      global: true,
      message: errorMessage,
    };
  }
};

// types of errors
// global
// const errorObject = {
// 	message: "NOT_EXIST",
// 	statusCode: 504,
// }
//

// personal field error
// const errorObject = {
// 	message: [
// 		{
// 			property: "email",
// 			original: {
// 				classValidatorLikeError: "class validator like error",
// 			},
// 			message: ["ALREADY_USING"],
// 		},
// 		{
// 			property: "code",
// 			original: {
// 				classValidatorLikeError: "class validator like error",
// 			},
// 			message: ["BAD_CODE"],
// 		},
// 	],
// 	error: "Bad Request",
// 	statusCode: 400,
// }
