import { useRouter } from 'next/router'
import SliceShow from '../../components/SliceShow'

const SlicePage = (props) => {
  const router = useRouter()
  const { id } = router.query
  return <SliceShow id={id} />
}

export default SlicePage
