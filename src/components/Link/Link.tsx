import NextLink from 'next/link'
import { link } from './Link.css'
import Box from '../Box'

export function Link({ href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Box is="a" className={link} {...props} />
    </NextLink>
  )
}
