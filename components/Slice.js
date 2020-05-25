import Link from 'next/link'
const Slice = ({ slice }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="h-48 w-full object-cover" src="https://via.placeholder.com/150" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link href={`slices/[id]`} as={`/slices/${slice._id}`}>
            <a>{slice.name}</a>
          </Link>
        </div>
        <p className="text-gray-700 text-base">{slice.description}</p>
      </div>
    </div>
  )
}

export default Slice

// <div className="px-6 py-4">
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//     #photography
//   </span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//     #travel
//   </span>
//   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//     #winter
//   </span>
// </div>
