import type { TextFieldProps } from '@mui/material'
import { TextField } from '@mui/material'

export const TextInput = ({
  id,
  label,
  InputProps = TextInputDefaultProps.InputProps,
  ...rest
}: TextInputProps) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      {label && (
        <span className="text-sm font-inter font-semibold text-blue-600 pl-[1px]">
          {label}
        </span>
      )}
      <TextField hiddenLabel id={id} InputProps={InputProps} {...rest} />
    </label>
  )
}

export const TextInputDefaultProps = {
  InputProps: {
    classes: {
      root: 'h-10 text-sm bg-blue-100',
    },
  },
}

export type TextInputProps = TextFieldProps & {
  id: string
  label?: string
}
