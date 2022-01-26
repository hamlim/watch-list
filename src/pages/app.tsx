import ErrorBoundary from '../components/ErrorBoundary'
import AppView from '../views/App'

export default function App() {
  return (
    <ErrorBoundary>
      <AppView />
    </ErrorBoundary>
  )
}
