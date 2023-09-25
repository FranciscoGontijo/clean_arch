import Head from 'next/head';
import Image from 'next/image';
import type { GetServerSideProps, NextPage } from 'next';
import {http} from '../util/http';

const Home: NextPage = (props) => {

  return (
    <div>
      <h1>Ecommerce Full Cycle</h1>
      <ul>
        <li>
          <label>Name: </label> {props.name}
          <a href='#'>See</a>
        </li>
      </ul>
    </div>
  )
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {

  const {data: products} = await http.get("products");

  return {
    props: {
      products
    }
  };
};