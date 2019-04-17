import * as React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";

interface Props extends FieldProps {
  placeholder: string;
}

// can add form for errors
export const MainField: React.FC<Props> = ({ placeholder, field }) => {
  return <TextField placeholder={placeholder} {...field} name="firstName" />;
};
