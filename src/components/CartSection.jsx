import React from 'react'
import useCartStore from '../store/useCartStore'
import CartItem from './CartItem';

const CartSection = () => {
    const {cartItems} = useCartStore();
  return (
    <div className='my-4'>
        {
            cartItems.map(item => <CartItem key={item.id} item={item} />)
        }
    </div>
  )
}

export default CartSection