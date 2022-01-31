import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export let list = style({
  listStyleType: 'none',
})

export let banner = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: vars.colors.background,
  padding: vars.space[4],
  paddingTop: 0,
  opacity: 0.85,
  boxShadow: `0px -10px 10px 5px ${vars.colors.background}`,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
})
