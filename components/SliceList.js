import Slice from './Slice'
import Link from 'next/link'

const SliceList = () => {
  return (
    <section>
      <h2>Slice List</h2>
      <div class="bg-white">
        <div class="max-w-screen-xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Don't have any slices listed?
            <br />
            List one today.
          </h2>
          <div class="mt-8 flex justify-center">
            <div class="inline-flex rounded-md shadow">
              <Link href="/slices/new">
                <a class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Get started
                </a>
              </Link>
            </div>
            <div class="ml-3 inline-flex">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        <Slice />
        <Slice />
        <Slice />
      </div>
    </section>
  )
}

export default SliceList
