import { forwardRef, ReactNode, useState } from 'react'
import ReactDOM from 'react-dom'
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

// @see https://github.com/facebook/react/issues/18591#issuecomment-613026224
function flush(cb) {
  // @ts-ignore
  ReactDOM.flushSync(cb)
}

interface InputProps extends SystemProps {
  disabled?: boolean
  value: string
  onChange: (val: string) => void
  children: ReactNode
  autoFocus?: boolean
  placeholder?: string
  inputProps?: {}
}

export let Input = forwardRef(function Input(
  {
    disabled,
    value,
    onChange,
    children,
    autoFocus,
    placeholder,
    inputProps,
    ...props
  }: InputProps,
  ref,
) {
  let [focused, setFocused] = useState(autoFocus)

  function handleFocus() {
    setFocused(true)
  }
  function handleBlur() {
    setFocused(false)
  }

  return (
    <Label
      onFocus={() => flush(handleFocus)}
      onBlur={() => flush(handleBlur)}
      {...props}
    >
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
