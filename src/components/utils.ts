// Classnames function
// Usage:
// cx({ 'class-name': some conditional })
// cx(foo && 'class-name', bar && 'another-class')
export function cx(...args) {
  switch (args.length) {
    case 1: {
      return Object.entries(args[0])
        .filter(([, predicate]) => !!predicate)
        .reduce((cls, [part]) => `${cls} ${part}`, '')
    }
    default: {
      return args.filter(Boolean).join(' ')
    }
  }
}
