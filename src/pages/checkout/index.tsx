import { NextPage } from "next";
import { FormEvent } from "react";

type Props = {

}; 

export const CheckoutPage: NextPage = (props: Props) => {

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <h3>My cart</h3>
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