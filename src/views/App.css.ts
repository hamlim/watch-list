import { style } from '@vanilla-extract/css'
import { vars } from '../vars.css'

// export let layout = style({
//   minHeight: '100vh',
//   '@media': {
//     'not all and (min-resolution:.001dpcm)': {
//       '@supports': {
//         '(-webkit-appearance:none) and (stroke-color:transparent)': {
//           minHeight: '-webkit-fill-available',
//         },
//       },
//     },
//   },
// })

export let list = style({
  listStyleType: 'none',
  boxShadow: `20px 20px 50px ${vars.colors.orange200}, 
    -30px -30px 60px ${vars.colors.orange000}`,
  borderRadius: vars.radii.medium,
  marginTop: vars.space[8],
  padding: vars.space[4],
})
