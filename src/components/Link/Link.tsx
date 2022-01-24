import NextLink from 'next/link'
import { link } from './Link.css'

export function Link({ href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a className={link} {...props} />
    </NextLink>
  )
}
