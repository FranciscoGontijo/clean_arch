import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { http } from "@/util/http";
import { Order } from "@/util/models";

type CheckoutSuccessPageProps = {
    order: Order
};

const CheckoutSuccessPage: NextPage<CheckoutSuccessPageProps> = ({order}) => {
    return (
        <div>
            <h3>Congrats, your purchase was completed</h3>
            <ul>
                {order.products.map((product) => (
                    <li key={product.id}>
                        Product {product.name} - {product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CheckoutSuccessPage;

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [],
        fallback: 'blocking'
    }
};


export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params || {};
    const { data: order } = await http.get(`/orders/${id}`)

    return {
        props: {
            order
        },
    }
};