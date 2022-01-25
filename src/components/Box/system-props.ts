// @ts-nocheck
import { rainbowSprinkles } from 'rainbow-sprinkles'
import type { AllSystemProps } from 'rainbow-sprinkles'
import { vars } from '../../vars.css'
import { breakpoints } from '../../theme'

const { createSystemPropCss, getBoxProps, properties, config } =
  rainbowSprinkles({
    conditions: {
      all: {},
      _: {},
      small: { '@media': `@media screen and (min-width: ${breakpoints[0]})` },
      medium: { '@media': `@media screen and (min-width: ${breakpoints[1]})` },
      large: { '@media': `@media screen and (min-width: ${breakpoints[2]})` },
      xLarge: { '@media': `@media screen and (min-width: ${breakpoints[3]})` },
    },
    defaultCondition: 'all',
    properties: {
      margin: vars.space,
      marginTop: vars.space,
      marginRight: vars.space,
      marginBottom: vars.space,
      marginLeft: vars.space,
      padding: vars.space,
      paddingTop: vars.space,
      paddingRight: vars.space,
      paddingBottom: vars.space,
      paddingLeft: vars.space,
      color: vars.colors,
      backgroundColor: vars.colors,
      maxWidth: vars.sizes,
      fontSize: vars.fontSizes,
      display: true,
      flexDirection: true,
      alignItems: true,
      justifyContent: true,
    },
    shorthands: {
      m: ['margin'],
      ml: ['marginLeft'],
      mr: ['marginRight'],
      mt: ['marginTop'],
      mb: ['marginBottom'],
      p: ['padding'],
      pl: ['paddingLeft'],
      pr: ['paddingRight'],
      pt: ['paddingTop'],
      pb: ['paddingBottom'],
      marginY: ['marginTop', 'marginBottom'],
      my: ['marginTop', 'marginBottom'],
      paddingy: ['paddingTop', 'paddingBottom'],
      py: ['paddingTop', 'paddingBottom'],
      marginX: ['marginLeft', 'marginRight'],
      mx: ['marginLeft', 'marginRight'],
      paddingX: ['paddingLeft', 'paddingRight'],
      px: ['paddingLeft', 'paddingRight'],
      bg: ['backgroundColor'],
    },
  })

const configCopy = { ...config }

export type SystemProps = AllSystemProps<typeof configCopy>

export { getBoxProps, createSystemPropCss, properties }
