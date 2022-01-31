import { ErrorBoundary, Redirect } from '../../components'
import EditListView from '../../views/EditList'

export default function List({ listId }) {
  if (!listId) {
    return <Redirect to="/app" />
  }

  return (
    <ErrorBoundary>
      <EditListView listId={listId} />
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
