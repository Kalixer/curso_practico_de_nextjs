import ProductList from '@containers/ProductList';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kalixer</title>
      </Head>
      <ProductList />
    </>
  );
}
