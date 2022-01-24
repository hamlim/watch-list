import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let header = style({
  padding: vars.space[4],
})

export let container = style({
  maxWidth: vars.sizes.content,
  margin: '0 auto',
  display: 'grid',
  gridTemplateRows: '1fr 2fr 1fr',
  minHeight: '100vh',
})

export let title = style({
  fontSize: vars.fontSizes[3],
  textAlign: 'center',
})

export let subhead = style({
  fontSize: vars.fontSizes[2],
  textAlign: 'center',
})

export let titleWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.background,
})

export let actions = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
})
