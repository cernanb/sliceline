import { withApollo } from '../../lib/apollo'
import SliceList from '../../components/SliceList'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const SLICES_QUERY = gql`
  query SLICES_QUERY {
    slices {
      _id
      name
      description
    }
  }
`

function Slices() {
  const { data, loading, error } = useQuery(SLICES_QUERY)
  if (loading) return <div>Loading...</div>
  console.log(data.slices)
  return (
    <div className="py-4 flex">
      <SliceList slices={data.slices} />
    </div>
  )
}

export default withApollo({ ssr: true })(Slices)
