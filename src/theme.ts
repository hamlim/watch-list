let baseBreakpoint = 20

export let breakpoints = [
  baseBreakpoint,
  baseBreakpoint * 2,
  baseBreakpoint * 3,
  baseBreakpoint * 4,
].reduce((acc, val) => ({ ...acc, [val]: `${val}em` }), {})
