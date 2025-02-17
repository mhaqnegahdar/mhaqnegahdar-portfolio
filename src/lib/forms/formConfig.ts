// Hooks / Packages
import * as Yup from "yup";

// Types
import { FieldProps, FormikConfig } from "formik";
import { HTMLInputTypeAttribute } from "react";
// import {
//   CloudinaryUploadWidgetInfo,
//   CloudinaryUploadWidgetResults,
// } from "next-cloudinary";

type CustomInputTypeAttribute =
  | "textarea"
  | "combobox"
  | "editor"
  | HTMLInputTypeAttribute;

// Inputs
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  name: string;
  label?: string;
  type: CustomInputTypeAttribute;
  className?: string;
  disabled?: boolean;

  data?: Array<{ value: string; label: string }>;

  description?: string;
}

export interface SelectInputProps extends FieldProps {
  data: Array<{ value: string; label: string }>;
  defaultValue: string;
  className?: string;
}

export interface EditorInputProps extends FieldProps {
  className?: string;
  editable?: boolean;
}
export interface CheckboxInputProps extends FieldProps {
  defaultValue: string;
  className?: string;
  label: string;
  description?: string;
}

export interface ImageInputProps extends FieldProps {
  disabled: boolean;
  multiple?: boolean;
}

export type FormFieldConfig<T> = {
  [K in keyof T]: {
    initialValue: T[K] | Array<object>;
    validation: Yup.Schema<T[K]> | Yup.Schema<Array<object>> ;
    inputProps: Omit<InputProps, "name">;
  };
};

export type FormConfig<T extends Yup.AnyObject> = {
  initialValues: T | Array<object>;
  validationSchema: Yup.ObjectSchema<T  > ;
  fields: FormFieldConfig<T>;
};

export type FormSubmitType<T> = FormikConfig<T>["onSubmit"];

// Type Gaurd
// export function isCloudinaryUploadResult(
//   result: CloudinaryUploadWidgetResults
// ): result is CloudinaryUploadWidgetResults & {
//   info: CloudinaryUploadWidgetInfo;
// } {
//   return (
//     result.info != null &&
//     typeof result.info === "object" &&
//     result.info.secure_url != null
//   );
// }
