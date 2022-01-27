import { ErrorBoundary, Redirect } from '../../components'
import ListView from '../../views/List'

export default function List({ listId }) {
  if (!listId) {
    return <Redirect to="/app" />
  }

  return (
    <ErrorBoundary>
      <ListView listId={listId} />
    </ErrorBoundary>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      listId: context.params.listId,
    },
  }
}
