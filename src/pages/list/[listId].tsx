export default function List({ listId }) {
  console.log(listId)

  return null
}

export async function getServerSideProps(context) {
  return {
    props: {
      listId: context.params.listId,
    },
  }
}
