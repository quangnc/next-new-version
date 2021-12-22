import type { CircularProgressProps } from "@mui/material";
import type { SizeProps } from "@frontend/framework/utils/sizes";

import { CircularProgress } from "@mui/material";

export type SpinnerProps = Omit<CircularProgressProps, "size"> & SizeProps;

export const Loading = ({
  size = "medium",
  color = "primary",
  ...props
}: SpinnerProps) => {
  let sizing = {};
  switch (size) {
    case "small":
      sizing = { size: 16, thickness: 6 };
      break;
    case "medium":
    default:
      sizing = { size: 24, thickness: 6 };
      break;
    case "large":
      sizing = { size: 32, thickness: 6 };
      break;
  }

  return <CircularProgress color={color} {...sizing} {...props} />;
};
