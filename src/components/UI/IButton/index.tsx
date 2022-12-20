import { FC } from "react";

import Button from "@mui/material/Button";

import { ButtonProps } from "./types";

import ILoading from "components/UI/ILoading";

const IButton: FC<ButtonProps> = ({
  children,
  variant = "contained",
  size,
  fullWidth = false,
  startIcon,
  endIcon,
  disabled,
  color = "primary",
  loading = false,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      color={color}
    >
      {loading ? <ILoading /> : children}
    </Button>
  );
};

export default IButton;
