import { ReactNode, forwardRef } from 'react'
import styles from './Box.css'
import { getBoxProps, properties, SystemProps } from './system-props'
import { extractAtomsFromProps } from 'rainbow-sprinkles'

interface BoxProps extends SystemProps {
  children?: ReactNode
  className?: string
}

export let Box = forwardRef(
  ({ children, className, ...props }: BoxProps, ref: any) => {
    let { systemProps, otherProps } = extractAtomsFromProps(props, properties)
    let { className: localClassname, style } = getBoxProps(styles, systemProps)

    return (
      <div
        ref={ref}
        {...otherProps}
        className={
          className ? localClassname + ' ' + className : localClassname
        }
        style={style}
      >
        {children}
      </div>
    )
  },
)
