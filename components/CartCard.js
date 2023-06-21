'use client'

import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CartContext from '@/modules/CartContext';


const CartCard = ({item}) => {
  const { increaseQty, decreaseQty, removeFromCart  } = useContext(CartContext);

  useEffect(() => {

  }, [])
    
  const router = useRouter();

  const goToItem = () => {
    router.push(`/product?id=${item.id}`)
  }

  return (
      <div className="border-2 border-cyan-500 rounded-xl w-full h-14 flex flex-raw items-center align-middle p-1 justify-between my-1 text-center">
        <button className='bg-red-700 px-1 pb-0.5 text-white absolute left-0 rounded-full leading-none' onClick={() => removeFromCart(item) }>x</button>
        <img onClick={() => goToItem()} className='mr-2 cursor-pointer' src={item.image} width={50}/>
        <p className=' font-semibold'>{item.itemName}</p>
        <div className='flex flex-raw align-middle items-center justify-center content-center'>
          <div className='flex flex-col w-4 my-2 leading-none '>
            <button className='bg-green-500 text-white w-5 h-5 mb-0.5 rounded-full' onClick={() => increaseQty(item) }>+</button>
            <button className='bg-red-500 text-white w-5 h-5 rounded-full' onClick={() => decreaseQty(item) }>-</button>
          </div>
          <p className='mx-3 w-3'>{item.quantity}</p>
        </div>
      </div>
  )
}

export default CartCard