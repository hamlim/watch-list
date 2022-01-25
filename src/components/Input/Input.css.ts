import { style } from '@vanilla-extract/css'
import { vars } from '../../vars.css'

export let input = style({
  border: 'solid 2px',
  width: '100%',
  display: 'inline-flex',
  flexGrow: 1,
  flexShrink: 0,
  padding: '0.5em 0.5em',
  borderRadius: vars.radii.small,
  color: vars.colors.black,
  outline: 'none',
  fontSize: vars.fontSizes[0],
  selectors: {
    '&:focus': {
      boxShadow: vars.focusShadow,
    },
  },
})
