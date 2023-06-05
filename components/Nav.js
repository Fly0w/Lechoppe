'use client'

import Link from "next/link";
import Image from "next/image";
import { SlBasket } from "react-icons/sl";


const Nav = () => {
  return (    
    <>   
      <nav className="navig">
        <div className="flex items-center">
          <Link href="/" >
            <p className="mx-6">Home</p>
          </Link>
          <Link href="/about-us" >
            <p className="mx-6">About us</p>
          </Link>
        </div>

        <div className="flex items-center">
          <SlBasket className="mx-6"/>
          <Link href="/profile" >
            <p className="mx-6">Profile</p>
          </Link>
        </div>
      </nav>
    </>
  )
}




export default Nav