export const slicesResolvers = {
  Query: {
    async slices() {
      console.log('getting slices')
      return [
        {
          _id: 'some arrat',
          name: 'Good slice',
          description: 'A really awesome slice'
        }
      ]
    }
  }
}
