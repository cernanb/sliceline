import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import Slice from './Slice'
import Link from 'next/link'

const SLICES_QUERY = gql`
  query slicesQuery {
    slices {
      _id
      name
      description
      reviews {
        _id
      }
    }
  }
`

const SliceList = () => {
  const { data, loading, error } = useQuery(SLICES_QUERY)
  if (loading) return <div>Loading...</div>
  const { slices } = data
  return (
    <section>
      <h2>Slice List</h2>
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Don't have any slices listed?
            <br />
            List one today.
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link href="slices/new">
                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  List a Slice
                </a>
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-700 bg-orange-200 hover:text-orange-600 hover:bg-orange-100 focus:outline-none focus:shadow-outline focus:border-orange-300 transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {slices.map((slice) => (
          <Slice key={slice._id} slice={slice} />
        ))}
      </div>
    </section>
  )
}

export default withApollo({ ssr: true })(SliceList)
