import type { ButtonProps as MuiButtonProps } from "@mui/material";

import cx from "classnames";

import { Button as MuiButton } from "@mui/material";
import { Loading } from "@frontend/framework/Loading";

export type ButtonProps = MuiButtonProps & {
  loading?: boolean;
};

export const Button = ({
  loading = false,
  color = "primary",
  variant = "contained",
  children,
  startIcon,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <MuiButton
      color={color}
      variant={variant}
      disableElevation
      startIcon={loading ? <Loading size="small" color="inherit" /> : startIcon}
      classes={{
        root: cx("rounded-lg normal-case h-12 font-semibold", {
          "text-white":
            color !== "inherit" && variant !== "outlined" && variant !== "text",
          "bg-white": variant === "outlined" && color === "inherit",
        }),
      }}
      onClick={(e) => {
        if (!loading && onClick) {
          onClick(e);
        }
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};
