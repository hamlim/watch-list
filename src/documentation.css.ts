import { style } from '@vanilla-extract/css'
import { vars } from './vars.css'

export let wrap = style({
  maxWidth: vars.sizes.content,
  margin: `0 auto`,
})

export let title = style({
  // @ts-ignore
  fontSize: vars.fontSizes.h1,
})

export let sectionTitle = style({
  // @ts-ignore
  fontSize: vars.fontSizes.h3,
})

export let container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: vars.space[4],
})

export let swatch = style({
  backgroundColor: 'var(--color)',
  color: vars.colors.black,
  borderRadius: vars.radii.small,
  height: 150,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export let name = style({
  backgroundColor: 'rgba(255, 255, 255, .6)',
  padding: vars.space[4],
  borderRadius: vars.radii.small,
})
