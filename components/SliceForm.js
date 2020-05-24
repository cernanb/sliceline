import { useState } from 'react'
import Router from 'next/router'

const SliceForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        Router.replace('/slices')
      }}
    >
      <div>
        <div>
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">New Slice</h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Enter information on the new slice you are offering for purchase.
            </p>
          </div>
          <div class="mt-6">
            <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
              <div class="sm:col-span-6">
                <label for="name" class="block text-sm font-medium leading-5 text-gray-700">
                  Name
                </label>
                <div class="mt-1 rounded-md shadow-sm">
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="about" class="block text-sm font-medium leading-5 text-gray-700">
                Description
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="about"
                  rows="3"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                ></textarea>
              </div>
              <p class="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
            </div>

            <div class="sm:col-span-6">
              <label for="cover_photo" class="block text-sm leading-5 font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="text-center">
                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p class="mt-1 text-sm text-gray-600">
                    <button
                      type="button"
                      class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                    >
                      Upload a file
                    </button>
                    or drag and drop
                  </p>
                  <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-5">
        <div class="flex justify-end">
          <span class="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span class="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  )
}

export default SliceForm
