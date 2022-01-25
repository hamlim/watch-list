import { forwardRef, ReactNode } from 'react'
import Box from '../Box'
import { cx } from '../utils'
import { useTapable } from '@ds-pack/components'
import * as styles from './Button.css'

export interface Props {
  variant: 'primary' | 'secondary' | 'ghost' | 'text'
  disabled?: boolean
  children: ReactNode
  onClick: () => void
}

let Tapable = forwardRef(function Tapable(props, ref) {
  let tapableProps = useTapable(props, ref)
  return <div ref={ref} {...tapableProps} {...props} />
})

export let Button = forwardRef(function Button(
  { variant = 'primary', ...props }: Props,
  ref,
) {
  return (
    <Box
      is={Tapable}
      className={cx({
        [styles.button]: true,
        [styles[variant]]: !!variant,
      })}
      ref={ref}
      {...props}
    />
  )
})
