import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { useContext } from "react";
import { http } from "@/util/http";
import { Product } from "@/util/models";
import { CartContext } from "@/context/cart.provider";

type ProductDetailPageProps = {
    product: Product;
}

export const ProductDetailPage: NextPage<ProductDetailPageProps> = ({product}) => {

    const cartContext = useContext(CartContext);
    
    return (
        <div>
            <h3>{product.name}</h3>
            <label>Price: </label> {product.price}
            <button onClick={() => cartContext.addProduct(product)}>Add to cart</button>
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
