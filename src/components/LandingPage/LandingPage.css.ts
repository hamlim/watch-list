import { style } from '@vanilla-extract/css'
import { vars } from '../../vars.css'

export let container = style({
  maxWidth: vars.sizes.content,
  margin: '0 auto',
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
  minHeight: '75vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.colors.background,
})

export let actions = style({
  minHeight: '25vh',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
})
