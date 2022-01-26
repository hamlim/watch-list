import { Component, ReactNode } from 'react'
import Box from '../Box'
import Button from '../Button'

interface Props {
  children: ReactNode
  props?: {}
}

export default class ErrorBoundary extends Component<Props> {
  state = {
    err: null,
  }
  static getDerivedStateFromError(err: Error) {
    return { err }
  }

  render() {
    if (this.state.err) {
      return (
        <Box {...this.props.props}>
          <Box is="p" mb="2">
            An Error Occurred!
          </Box>
          <Box is="pre" mb="2">
            {this.state.err.message
              ? this.state.err.message
              : this.state.err.toString()}
          </Box>
          <Button variant="text" onClick={() => this.setState({ err: null })}>
            Reset
          </Button>
        </Box>
      )
    }
    return this.props.children
  }
}
