'use client'

import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import CartContext from "@/modules/CartContext";
import AuthContext from "@/modules/AuthContext";


const UserProfile = ({}) => {
  const [toggleInventory, setToggleInventory] = useState(true)
  const [toggleOrderHistory, setToggleOrderHistory] = useState(false)
  const [toggleChangePassword, setToggleChangePassword] = useState(false)
  const [toggleEditPhoto, setToggleEditPhoto] = useState(false)
  const [toggleEditUsername, setToggleEditUsername] = useState(false)

  const { user } = useContext(AuthContext);

  return (
    <div className='flex flex-col w-full p-4 border-2 border-teal-700 rounded-xl'>
      {user 
        ? <>
      <div className="flex flex-col justify-center text-center items-center ">
        <h1 className="font-montserrat text-3xl uppercase mb-3">Profile page</h1>
        <div className="relative z-0 top-0 left-0 p-3 mb-3" onMouseOver={() => setToggleEditPhoto(true)} onMouseOut={() => setToggleEditPhoto(false)}>
          <Image 
          src="/assets/images/woman-6328478_1280.jpg"
          alt=""
          height={200}
          width={200}
          style={{borderRadius: "50%"}} />
          {toggleEditPhoto
            ? 
            <button className="bg-white border border-black p-2 rounded-full absolute top-5 right-6 z-2 bg-opacity-90" onClick={() => console.log("change picture")}>
              <Image 
                src="/assets/icons/editing.png"
                alt=""
                height={18}
                width={18} />
            </button>
            :<></>
          }                    
        </div>

      <div className="px-8 flex flex-raw flex-nowrap justify-center" onMouseOver={() => setToggleEditUsername(true)} onMouseOut={() => setToggleEditUsername(false)}>
        <h1 className="font-montserrat text-2xl">{user.username}</h1>
        {toggleEditUsername
            ? 
            <button className="p-2 rounded-full" onClick={() => console.log("change username")}>
              <Image 
                src="/assets/icons/editing.png"
                alt=""
                height={14}
                width={14} />
            </button>
            :<></>
          } 
      </div>
      
      <p className="text-xs text-slate-500">{user.email}</p> 
             
      </div>


      <div className="flex flex-col items-start border">
        {/* My inventory */}
        <div className="w-full mx-auto mb-4">
          <button className="text-white font-montserrat px-4 py-1 mx-3 rounded-full bg-cyan-400 border-2 border-teal-700 hover:scale-105 transition-all relative z-10 top-0" onClick={() => setToggleInventory(!toggleInventory)}>
          My Inventory
          </button>
          {toggleInventory
            ? <div className="bg-slate-100 flex flex-col align-middle justify-center items-center transition-all rounded-2xl p-3 h-64 w-full border-2 border-teal-700 relative -top-5 z-0 ">
                <p className="">Hello, I'm the inventory</p>
              </div>
            : <></>
          }
        </div>

        {/* My orders */}
        <div className="w-full mx-auto mb-4">
          <button className="text-white font-montserrat px-4 py-1 mx-3 rounded-full bg-teal-400 border-2 border-cyan-700 hover:scale-105 relative z-10 top-0" onClick={() => setToggleOrderHistory(!toggleOrderHistory)}>
          My Orders
          </button>
          {toggleOrderHistory
            ? <div className="bg-slate-100 flex flex-col align-middle justify-center items-center rounded-2xl p-3 h-64 w-full border-2 border-cyan-700 relative -top-5 z-0 ">
                <p className="">Previous orders</p>
              </div>
            : <></>
          }
        </div>    

        {/* Change password */}
        <div className="w-full mx-auto mb-4">
          <button className="text-white font-montserrat px-4 py-1 mx-3 rounded-full bg-fuchsia-400 border-2 border-red-700 hover:scale-105 relative z-10 top-0" onClick={() => setToggleChangePassword(!toggleChangePassword)}>
          Change password
          </button>
          {toggleChangePassword
            ? <div className="bg-slate-100 flex flex-col align-middle justify-center items-center rounded-2xl p-3 h-64 w-full border-2 border-red-700 relative -top-5 z-0 ">
                <p className="">Change password here</p>
              </div>
            : <></>
          }
        </div>        
      </div>
      </>
        : <p>Please log in to see your profile page !</p>
      }
    </div>
  )
}

export default UserProfile