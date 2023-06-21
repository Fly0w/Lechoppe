'use client'

// TO DO:

import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { useEffect, useState, useContext } from "react";
import AuthContext from "@/modules/AuthContext";
import CartContext from "@/modules/CartContext";
import Basket from "./Basket";


const Nav = () => {
  const { toggleCart, setToggleCart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

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
              <Basket />
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