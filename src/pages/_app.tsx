import { MyCart } from '@/components/my-cart'
import type { AppProps } from 'next/app'
import { CartProvider } from '@/context/cart.provider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <MyCart />
      <Component {...pageProps} />
    </CartProvider>
  )
}
