let baseBreakpoint = 10

export let breakpoints = [
  ['small', baseBreakpoint],
  ['medium', baseBreakpoint * 2],
  ['large', baseBreakpoint * 3],
  ['extraLarge', baseBreakpoint * 4],
].reduce((acc, [label, val]) => ({ ...acc, [label]: `${val}em` }), {})
