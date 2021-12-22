export enum Sizes {
  small,
  medium,
  large,
}

export type SizeKeys = keyof typeof Sizes
export type SizeProps = {
  size?: SizeKeys
}
