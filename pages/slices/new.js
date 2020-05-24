import SliceForm from '../../components/SliceForm'
import { withApollo } from '../../lib/apollo'

import { useMutation } from '@apollo/react-hooks'
import Router from 'next/router'
import gql from 'graphql-tag'

const CREATE_SLICE_MUTATION = gql`
  mutation CREATE_SLICE_MUTATION($name: String!, $description: String!) {
    addSlice(slice: { name: $name, description: $description }) {
      _id
    }
  }
`

const NewSlice = () => {
  const [addSlice, { data }] = useMutation(CREATE_SLICE_MUTATION)
  const createSlice = (slice) => {
    addSlice({ variables: { name: slice.name, description: slice.description } })
    Router.replace('/slices')
  }
  return <SliceForm createSlice={createSlice} />
}

export default withApollo()(NewSlice)
