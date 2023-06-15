'use client'

// TO DO:
// - Fix LOGIN LOGOUT affichage pas actualisé

import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState, useContext } from "react";
import CartContext from "@/modules/CartContext";
import AuthContext from "@/modules/AuthContext";

const Nav = () => {
  const [toggleCart, setToggleCart] = useState(false)

  const { isLoggedIn, logout, user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  return (    
    <>   
      <nav className="navig">
        <div className="flex items-center">
          <Link href="/" >
            <p className="mx-6 hover:text-white">Home</p>
          </Link>
          <Link href="/about-us" >
            <p className="mx-6 hover:text-white">About us</p>
          </Link>
        </div>

        <div className="flex items-center">
          
          

          {isLoggedIn
          ?<div className="flex flex-raw">
            <button onClick={() => setToggleCart(!toggleCart)}>
              <SlBasket className="mx-6"/>
            </button>
            {toggleCart
              ?
              <div className="absolute top-7 flex flex-col flex-nowrap w-fit h-fit p-2 text-center justify-start items-center border-2 rounded-xl border-teal-700 bg-white bg-opacity-95">
                <p className="mb-2">Your Inventory</p>
                <button className=" px-3 border-2 border-orange-400 bg-yellow-200 rounded-full font-bold text-lg">Proceed to checkout</button>

              </div>
              : <></>
            }
            <Link href="/profile" >
              <p className="mx-6 hover:text-white">Profile</p>
            </Link>
            <p className="mx-6 hover:text-white cursor-pointer" onClick={() => logout()}>Logout</p>
            </div>
          :<Link href="/log-in" >
            <p className="mx-6 hover:text-white">Login</p>
          </Link>
          }

        </div>
      </nav>
    </>
  )
}

export default Nav