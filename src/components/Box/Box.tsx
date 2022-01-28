import { ReactNode, forwardRef } from 'react'
import styles from './Box.css'
import { getBoxProps, properties, SystemProps } from './system-props'
import { extractAtomsFromProps } from 'rainbow-sprinkles'

interface BoxProps extends SystemProps {
  children?: ReactNode
  className?: string
  is?: any
  [key: string]: any
}

export let Box = forwardRef(
  (
    { children, className, style = {}, is: El = 'div', ...props }: BoxProps,
    ref: any,
  ) => {
    let { systemProps, otherProps } = extractAtomsFromProps(props, properties)
    let { className: localClassname, style: localStyle } = getBoxProps(
      styles,
      systemProps,
    )

    return (
      <El
        ref={ref}
        {...otherProps}
        className={
          className ? localClassname + ' ' + className : localClassname
        }
        style={{ ...style, ...localStyle }}
      >
        {children}
      </El>
    )
  },
)
