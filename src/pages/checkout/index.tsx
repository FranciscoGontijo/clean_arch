import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useContext } from "react";
import { CartContext } from "@/context/cart.provider";
import { http } from "@/util/http";

type Props = {

}; 

export const CheckoutPage: NextPage = (props: Props) => {

    const cartContext = useContext(CartContext);
    
    const router = useRouter();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const credit_card_number = event.currentTarget.credit_card_number.value;
        const {data: order} = await http.post('orders', {
            products: cartContext.products,
            credit_card_number,
        });
        router.push(`/checkout/${order.id}/success`);
    };

    return (
        <div>           
            <h3>My cart</h3>
            <ul>
                {cartContext.products.map((product) => (
                    <li key={product.id}>
                        Product {product.name} - {product.price}
                    </li>
                ))}
            </ul>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="">Credit Card</label>
                    <input
                    type="text"
                    name="credit_card_number"
                    id="credit_card_number"
                    />
                </div>
                <div>
                    <button type="submit">Buy</button>
                </div>
            </form>
        </div>
    )
};

export default CheckoutPage;