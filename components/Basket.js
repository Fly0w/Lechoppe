import { useContext } from "react";
import Link from "next/link";
import CartCard from "./CartCard";
import CartContext from "@/modules/CartContext";
  

const Basket = () => {
const { cartItems } = useContext(CartContext);
  return (
    <div className="absolute top-7 flex flex-col flex-nowrap w-fit h-fit p-2 text-center justify-start items-center border-2 rounded-xl border-teal-700 bg-white bg-opacity-95">
        <p className="my-2 text-2xl">Your Inventory</p>          
        {cartItems[0]
        ?
        <div>
        {cartItems.map((item, key) => <CartCard item={item} key={key}/>)}
        <Link href={"/checkout"}>
            <button className=" px-3 border-2 border-orange-400 bg-yellow-200 rounded-full font-bold text-lg my-2" onClick={() => console.log("checkout")}>Proceed to Checkout</button>
        </Link>
        </div>
        : <p className=" normal-case text-sm">Your inventory is empty :'(</p>}
        
        
    </div>
  )
}

export default Basket