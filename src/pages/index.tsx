import type { GetServerSideProps, NextPage } from 'next';
import { http } from '../util/http';

//import types
import { Product } from "../util/models";
import Link from 'next/link';

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
  try {
    // Fetch data from the "products" endpoint
    const response = await http.get('products');

    // Check if the response status is successful (e.g., 200 OK)
    if (response.status === 200) {
      const products = response.data; // Assuming the data is in the response's data property

      // Return the fetched products as props
      return {
        props: {
          products,
        },
      };
    } else {
      // Handle error cases if the API call is not successful
      console.error('Failed to fetch data:', response.statusText);
      return {
        props: {
          products: [], // Return an empty array or appropriate default value
        },
      };
    }
  } catch (error) {
    // Handle network errors or other exceptions that might occur during the API call
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [], // Return an empty array or appropriate default value
      },
    };
  }
};
