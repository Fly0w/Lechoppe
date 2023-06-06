'use client'

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Caroussel from "@/components/Caroussel"
import ListReviews from "@/components/ListReviews"

export default function Product() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");
  const router = useRouter();

  const [itemInfo, setItemInfo] = useState({})

  useEffect(() => {
    const getItemInfo = async () => {
      const response = await fetch(`/api/items/${itemId}`);
      const data = await response.json();
      setItemInfo(data[0])

      console.log("resp itemInfo", data)
    }

    getItemInfo();
  }, [])
  

  return (
    <div className="text-center bg-slate-50 bg-opacity-90 py-5">
      <div className="flex justify-between w-auto my-5 px-6">
        <div>
          <button className="back_home_btn text-4xl" onClick={() => router.push("/")}> ❮ <span className="text-xl">HOME</span></button>
        </div>
        <div>
          <h1 className="capitalize font-montserrat text-3xl">{itemInfo.name}</h1>
          <h2 className="uppercase font-montserrat">{itemInfo.categories}</h2>
          <p className="text-lg border-2 border-cyan-600 w-96 mt-6 rounded-xl bg-slate-100 font-kanit py-10 px-4">{itemInfo.description}</p>
        </div>

        <div>
          <button className="add_to_cart_btn" onClick={() => console.log("add to cart")}>Add to cart</button>
          <h2>{itemInfo.price} ¥</h2>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <Caroussel urls={itemInfo.urls}/>
        <ListReviews reviews={itemInfo.reviews}/>
        <div className="flex flex-raw my-8">
          <button className="mx-5 modify_item_btn" onClick={() => console.log("modify item")}>Modify item</button>
          <button className="mx-5 delete_item_btn" onClick={() => console.log("delete item")}>Delete item</button>
        </div>
      </div>
      
      
    </div>



  )
}
