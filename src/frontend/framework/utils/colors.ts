export enum Colors {
  inherit,
  primary,
  secondary,
  error,
  info,
  success,
  warning,
}

export type ColorKeys = keyof typeof Colors
export type ColorProps = {
  color?: ColorKeys
}
