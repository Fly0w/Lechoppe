'use client'

import { useEffect, useContext, useState } from "react"
import CartContext from "@/modules/CartContext";

const Checkout = ({totalPrice, shipping}) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="border-2 border-black w-full">
      <div className="border-b-2 border-b-black text-sm font-bold flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
            <div className="w-12 "></div>
            <p className="w-32">Item</p>
            <p className="w-20">Unit Price</p>
            <p className="w-12">Quantity</p>
            <p className="w-20">Total Price</p>
        </div>

      <div className="border-b-2 border-black">
        {cartItems[0]
        ? cartItems.map((item) => (
          <div className="border flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
            <img src={item.image} width={50} className="w-12 "/>
            <p className="w-32">{item.itemName}</p>
            <p className="w-20">{item.price}</p>
            <p className="w-12">{item.quantity}</p>
            <p className="w-20">{item.price * item.quantity}</p>
          </div>)
        )
        : <p>No item in the basket :'(</p>
        }
      </div>

        {shipping
        ?
        <div className="border-b-2 border-b-black flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
          <div className="w-12 "></div>
          <div className="w-32"></div>
          <p className="w-48 font-semibold">{shipping.method}</p>
          <p className="w-20">{shipping.price}</p>
        </div>
        : <></>

        }
      

      <div className="border-b-2 border-b-black">
        <div className=" border flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
          <div className="w-12 "></div>
          <div className="w-32"></div>
          <p className="w-48 font-semibold">Total <span className="italic text-sm font-normal">(without tax)</span></p>
          <p className="w-20">{totalPrice}</p>
        </div>
        <div className="border flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
          <div className="w-12 "></div>
          <div className="w-32"></div>
          <p className="w-48 font-semibold">Tax <span className="italic text-sm font-normal">(20%)</span></p>
          <p className="w-20">{totalPrice * 0.2}</p>
        </div>
      </div>

      <div className="border-b-2 border-b-black flex flex-raw flex-nowrap w-full justify-around h-12 items-center">
        <div className="w-12 "></div>
        <div className="w-32"></div>
        <p className="w-48 font-semibold">TOTAL</p>
        <p className="w-20">{totalPrice * 1.2}</p>
      </div>
          
           

    </div>
  )
}

export default Checkout