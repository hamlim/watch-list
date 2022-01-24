import { rainbowSprinkles } from 'rainbow-sprinkles'
import type { AllSystemProps } from 'rainbow-sprinkles'
import { vars } from '../../vars.css'

// const makeQuery = (val: number) => {
//   return { '@media': `screen and (min-width: ${val})` }
// }

const { createSystemPropCss, getBoxProps, properties, config } =
  rainbowSprinkles({
    conditions: {
      all: {},
      _: {},
      ...vars.mediaQueries,
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
