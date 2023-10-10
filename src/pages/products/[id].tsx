import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { http } from "@/util/http";
import { Product } from "@/util/models";

type ProductDetailPageProps = {
    product: Product;
}

export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <label>Price: </label> {product.price}
            <button>Add to cart</button>
        </div>
    )
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
};

export const getStaticProps: GetStaticProps = async (context) => {

    const { id } = context.params || {};
    const { data: product } = await http.get(`products/${id}`)

    return {
        props: {
            product,
        }
    };
};
