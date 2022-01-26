import ErrorBoundary from '../components/ErrorBoundary'
import CreateView from '../views/Create'

export default function Create() {
  return (
    <ErrorBoundary>
      <CreateView />
    </ErrorBoundary>
  )
}
