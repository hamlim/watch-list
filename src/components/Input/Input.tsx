import { forwardRef, ReactNode } from 'react'
import Box from '../Box'
import { SystemProps } from '../Box/system-props'
import { input } from './Input.css'

interface LabelProps extends SystemProps {
  children: ReactNode
  [key: string]: any
}

let Label = forwardRef(function Label(props: LabelProps, ref) {
  return (
    <Box
      is="label"
      display="flex"
      flexDirection="column"
      {...props}
      ref={ref}
    />
  )
})

interface InputProps extends SystemProps {
  disabled?: boolean
  value: string
  onChange: (val: string) => void
  children: ReactNode
  placeholder?: string
  inputProps?: {}
}

export let Input = forwardRef(function Input(
  {
    disabled,
    value,
    onChange,
    children,
    placeholder,
    inputProps,
    ...props
  }: InputProps,
  ref,
) {
  return (
    <Label {...props}>
      {children}
      <Box
        is="input"
        mt="1"
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        value={value}
        {...inputProps}
        className={input}
        ref={ref}
        onChange={({ target: { value } }) => onChange(value)}
      />
    </Label>
  )
})
