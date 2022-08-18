import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function Detail() {
  const router = useRouter();
  const title = router.query.params?.get(0);
  return <div>
    <Seo title={title}></Seo>
    <h4>{title}</h4>
  </div>;
}