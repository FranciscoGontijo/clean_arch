
import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '@/context/cart.provider';

type Props = {};

export const MyCart = (props: Props) => {

    const cartContext = useContext(CartContext);
    
    return (
        <nav>
            Cart - Total {cartContext.total} | Items {cartContext.products.length}
        </nav>
    )
};

