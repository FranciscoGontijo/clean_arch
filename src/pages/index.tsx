import type { GetServerSideProps, NextPage } from 'next';
import { http } from '../util/http';

//import types
import { Product } from "../util/models";
import Link from 'next/link';
import { ListProductUseCase } from '@/@core/application/products/list-products.use-case';
import { ProductHttpGateway } from '@/@core/infra/gateways/product-http.gateway';

type HomeProps = {
  products: Product[]
}

const Home: NextPage<HomeProps> = ({ products }) => {
  if (!products) {
    return <div>Loading...</div>; // Render a loading message while products are being fetched
  }

  return (
    <div>
      <h1>Ecommerce Full Cycle</h1>
      <ul>
        {products.map((product, key) => (
          <li key={key}>
            <label>Name: </label> {product.name}
            <Link href={`/products/${product.id}`} passHref>See</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const gateway = new ProductHttpGateway(http);
  const useCase = new ListProductUseCase(gateway);
  const products = await useCase.execute();

  return {
    props: {
      products: products.map((product) => product.toJSON()),
    }
  }
};
