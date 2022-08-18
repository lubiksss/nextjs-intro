import { useRouter } from 'next/router';
import Seo from '../../components/Seo';
import { useEffect, useState } from 'react';

export default function Detail() {
  const [title, setTitle] = useState('Loading...');
  const router = useRouter();
  useEffect(() => {
    setTitle(router.query.params[0]);
  }, []);
  console.log(title);
  return <div>
    <Seo title={title}></Seo>
    <h4>{title}</h4>
  </div>;
}