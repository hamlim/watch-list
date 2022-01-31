import ErrorBoundary from '../components/ErrorBoundary'
import ConfirmView from '../views/Confirm'

export default function App() {
  return (
    <ErrorBoundary>
      <ConfirmView />
    </ErrorBoundary>
  )
}
