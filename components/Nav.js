'use client'

import Link from "next/link";
import { SlBasket } from "react-icons/sl";
import { useAuth } from "@/app/auth"
import { useEffect, useState } from "react";

const Nav = () => {
  const { isLoggedIn, logout } = useAuth();

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
          <SlBasket className="mx-6"/>

          {isLoggedIn
          ?<div className="flex flex-raw">
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