import { createGlobalTheme } from '@vanilla-extract/css'

let baseBreakpoint = 20

let breakpoints = [
  baseBreakpoint,
  baseBreakpoint * 2,
  baseBreakpoint * 3,
  baseBreakpoint * 4,
].reduce((acc, val) => ({ ...acc, [val]: `${val}em` }), {})

let fontScale = 1.2

let baseFontSize = 18

let fontSizes = {
  0: `${0.8 * baseFontSize}px`,
  1: `${baseFontSize}px`,
  2: `${baseFontSize * fontScale}px`,
  3: `${baseFontSize * (fontScale * 2)}px`,
  4: `${baseFontSize * (fontScale * 3)}px`,
  get h1() {
    return this[4]
  },
  get h2() {
    return this[3]
  },
  get h3() {
    return this[2]
  },
  get h4() {
    return this[1]
  },
  get h5() {
    return this[1]
  },
  get h6() {
    return this[1]
  },
}

let baseColors = {
  black: '#374047',
  gray000: '#f8f9f9',
  gray100: '#ebedee',
  gray200: '#dee1e3',
  gray300: '#cfd3d6',
  gray400: '#bec4c8',
  gray500: '#acb4b9',
  gray600: '#97a1a7',
  gray700: '#7f8a93',
  gray800: '#5f6e78',
  gray900: '#374047',

  blue000: '#e4f0f9',
  blue100: '#c6e1f3',
  blue200: '#a5cfed',
  blue300: '#7db9e5',
  blue400: '#4a9eda',
  blue500: '#0077cc',
  blue600: '#006bb7',
  blue700: '#005da0',
  blue800: '#004d84',
  blue900: '#00365d',
  indigo000: '#eaebfa',
  indigo100: '#d2d5f6',
  indigo200: '#b7bbf0',
  indigo300: '#959ce9',
  indigo400: '#6872e0',
  indigo500: '#0011cc',
  indigo600: '#000fb7',
  indigo700: '#000da0',
  indigo800: '#000a83',
  indigo900: '#00075c',
  violet000: '#f0e9fa',
  violet100: '#e1d2f6',
  violet200: '#ceb6f0',
  violet300: '#b894e9',
  violet400: '#9966e0',
  violet500: '#5500cc',
  violet600: '#4c00b8',
  violet700: '#4300a1',
  violet800: '#370084',
  violet900: '#27005e',
  ffuschia000: '#f9e9fa',
  ffuschia100: '#f2d1f5',
  ffuschia200: '#ebb5f0',
  ffuschia300: '#e293e9',
  ffuschia400: '#d665e0',
  ffuschia500: '#bb00cc',
  ffuschia600: '#a900b8',
  ffuschia700: '#9400a2',
  ffuschia800: '#7b0086',
  ffuschia900: '#580061',
  pink000: '#fae9f3',
  pink100: '#f5d1e6',
  pink200: '#f0b6d8',
  pink300: '#e994c6',
  pink400: '#e066ad',
  pink500: '#cc0077',
  pink600: '#b8006b',
  pink700: '#a2005e',
  pink800: '#86004e',
  pink900: '#610038',
  red000: '#faeaeb',
  red100: '#f6d2d5',
  red200: '#f0b7bc',
  red300: '#ea969d',
  red400: '#e16973',
  red500: '#cc0011',
  red600: '#b8000f',
  red700: '#a2000d',
  red800: '#86000b',
  red900: '#610008',
  orange000: '#f9ede4',
  orange100: '#f3d9c6',
  orange200: '#ecc2a4',
  orange300: '#e4a87c',
  orange400: '#da864a',
  orange500: '#cc5500',
  orange600: '#b84c00',
  orange700: '#a04300',
  orange800: '#843700',
  orange900: '#5e2700',
  yellow000: '#f8f6de',
  yellow100: '#f1ecba',
  yellow200: '#e9e293',
  yellow300: '#e0d668',
  yellow400: '#d7c938',
  yellow500: '#ccbb00',
  yellow600: '#b8a900',
  yellow700: '#a29400',
  yellow800: '#867b00',
  yellow900: '#615800',
  lime000: '#eef8df',
  lime100: '#dcf1bd',
  lime200: '#c7ea97',
  lime300: '#b1e16c',
  lime400: '#96d73b',
  lime500: '#77cc00',
  lime600: '#6bb800',
  lime700: '#5ea200',
  lime800: '#4e8600',
  lime900: '#386100',
  green000: '#e5f9e4',
  green100: '#c9f3c6',
  green200: '#a9eca3',
  green300: '#84e47b',
  green400: '#54da48',
  green500: '#11cc00',
  green600: '#0fb800',
  green700: '#0da200',
  green800: '#0b8600',
  green900: '#086100',
  teal000: '#e3f9ec',
  teal100: '#c5f3d8',
  teal200: '#a2ecc1',
  teal300: '#79e4a6',
  teal400: '#46da84',
  teal500: '#00cc55',
  teal600: '#00b84c',
  teal700: '#00a243',
  teal800: '#008638',
  teal900: '#006128',
  cyan000: '#e3f9f7',
  cyan100: '#c4f3ef',
  cyan200: '#a0ece5',
  cyan300: '#77e3da',
  cyan400: '#44d9cd',
  cyan500: '#00ccbb',
  cyan600: '#00b8a9',
  cyan700: '#00a294',
  cyan800: '#00867b',
  cyan900: '#006159',
}

let colors = {
  ...baseColors,
  white: '#fdfefe',
  get primary() {
    return this.blue500
  },
  get primaryLight() {
    return this.blue200
  },
  get primaryDark() {
    return this.blue700
  },
  get secondary() {
    return this.teal500
  },
  get secondaryLight() {
    return this.teal200
  },
  get secondaryDark() {
    return this.teal700
  },
  get tertiary() {
    return this.violet500
  },
  get tertiaryLight() {
    return this.violet200
  },
  get tertiaryDark() {
    return this.violet700
  },

  get disabledBg() {
    return this.gray200
  },
  get disabledFill() {
    return this.gray500
  },
}

export let vars = createGlobalTheme(':root', {
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40].reduce(
    (acc, val) => ({ ...acc, [val]: `${val}px` }),
    {},
  ),
  fontSizes,
  fonts: {
    base: 'system-ui, sans-serif',
    serif: '"Times New Roman", serif',
    monospace: 'monospace',
  },
  fontWeights: {
    base: '500',
    bold: '700',
  },
  sizes: {
    content: '60em',
  },
  radii: {
    small: '4px',
    medium: '1rem',
    rounded: '50%',
  },
  zIndices: {
    low: '1',
    medium: '5',
    high: '10',
    extraHigh: '20',
    top: '50',
  },
  breakpoints,
  get mediaQueries() {
    return {
      small: `@media screen and (min-width: ${this.breakpoints[0]})`,
      medium: `@media screen and (min-width: ${this.breakpoints[1]})`,
      large: `@media screen and (min-width: ${this.breakpoints[2]})`,
      xLarge: `@media screen and (min-width: ${this.breakpoints[3]})`,
    }
  },
  colors,
  lists: {
    base: {
      listStyleType: 'none',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      marginBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingTop: '0',
    },
    ordered: {
      listStyleType: 'decimal',
      listStylePosition: 'inside',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      marginBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingTop: '0',
    },
    unordered: {
      listStyleType: 'disc',
      listStylePosition: 'inside',
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      marginBottom: '0',
      paddingLeft: '0',
      paddingRight: '0',
      paddingBottom: '0',
      paddingTop: '0',
    },
  },
  get banners() {
    return {
      success: {
        color: this.colors.black,
        backgroundColor: this.colors.teal200,
        border: `solid 2px ${this.colors.teal600}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      info: {
        color: this.colors.black,
        backgroundColor: this.colors.blue200,
        border: `solid 2px ${this.colors.blue600}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      error: {
        color: this.colors.black,
        backgroundColor: this.colors.red200,
        border: `solid 2px ${this.colors.red600}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
      warning: {
        color: this.colors.black,
        backgroundColor: this.colors.yellow200,
        border: `solid 2px ${this.colors.yellow600}`,
        borderRadius: this.radii[0],
        padding: this.space[3],
        display: 'flex',
        alignItems: 'center',
      },
    }
  },
  get headings() {
    return {
      h1: {
        fontSize: this.fontSizes.h1,
        fontWeight: this.fontWeights.bold,
      },
      lead: {
        fontSize: this.fontSizes.h1,
        fontWeight: this.fontWeights.bold,
        fontFamily: this.fonts.serif,
      },
      h2: {
        fontSize: this.fontSizes.h2,
        fontWeight: this.fontWeights.bold,
      },
      h3: {
        fontSize: this.fontSizes.h3,
        fontWeight: this.fontWeights.bold,
      },
      subhead: {
        fontSize: this.fontSizes.h4,
        fontWeight: this.fontWeights.bold,
      },
    }
  },
  get chips() {
    return {
      primary: {
        backgroundColor: this.colors.primary,
        color: this.colors.black,
      },
    }
  },
  get focusShadow() {
    return `0 0 4px 2px ${this.colors.primaryDark}`
  },
  get shadows() {
    return {
      focusShadow: this.focusShadow,
    }
  },
})
