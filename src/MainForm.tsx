import * as React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  onSubmit: () => void;
}

export const MainForm: React.FC<Props> = () => {
  return <TextField />;
};
