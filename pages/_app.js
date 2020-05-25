import '../styles/index.css'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next.js TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="h-screen flex overflow-hidden bg-white">
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>

            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4"></div>
                <nav className="mt-5 px-2">
                  <Link href="/">
                    <a className="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                      <svg
                        className="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                        />
                      </svg>
                      Home
                    </a>
                  </Link>
                  <Link href="/slices">
                    <a className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150">
                      <svg
                        className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Slices
                    </a>
                  </Link>
                  <a
                    href="#"
                    className="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Reports
                    <span class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                      Coming Soon
                    </span>
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a href="#" className="flex-shrink-0 group block focus:outline-none">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                      <p className="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-14"></div>
          </div>
        </div>

        <div className="hidden md:flex md:flex-shrink-0">
          <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
            <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">Sliceline</div>
              <nav className="mt-5 flex-1 px-2 bg-white">
                <span className="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150">
                  <svg
                    className="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </span>
                <span className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                  <Link href="/slices">
                    <a>Slices</a>
                  </Link>
                </span>
                <a className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150">
                  <svg
                    className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Reports
                  <span class="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                    Coming Soon
                  </span>
                </a>
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm leading-5 font-medium text-gray-700 group-hover:text-gray-900">User</p>
                    <p className="text-xs leading-4 font-medium text-gray-500 group-hover:text-gray-700 transition ease-in-out duration-150">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
          <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              aria-label="Open sidebar"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />W{' '}
              </svg>
            </button>
          </div>
          <main className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6" tabIndex="0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <Component {...pageProps} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default MyApp
