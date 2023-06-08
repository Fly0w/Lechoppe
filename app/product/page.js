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
  const [review, setReview] = useState("")


  useEffect(() => {
    getItemInfo();
  }, [])

  useEffect(() => {
    console.log(review);
  }, [review])

  
  const getItemInfo = async () => {
    const response = await fetch(`/api/items/${itemId}`);
    const data = await response.json();
    setItemInfo(data[0])

    console.log("resp itemInfo", data)
  }

  const goToEditItem = () => {
    router.push(`/edit-item?id=${itemId}`)
  }

  const addReview = async(e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/items/${itemId}/reviews`, {
        method: "PATCH",
        body: JSON.stringify({
          creator: "User",
          text: review
        })
      })

      //We want to update our list of reviews after adding a new one
      getItemInfo()

    } catch (error) {
      console.log(error)
    }
  }


  const deleteItem = async () => {
    const validation = confirm("Are you sure you want to delete this Item ?");
    try {
      if (validation){
        const response = await fetch(`/api/items/${itemId}`, {
          method: "DELETE"
        })
        router.push("/")  
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="text-center bg-slate-50 bg-opacity-90 py-5">
      {itemInfo?
      <div>
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
          <div className="flex flex-raw w-full px-8 items-start justify-around">
            <ListReviews reviews={itemInfo.reviews}/>
            <form 
              className=" flex flex-col items-center w-3/6"
              onSubmit={(e) => addReview(e)}>
              <label className="font-montserrat">Add a review</label>
              <textarea 
                className="h-24 w-4/6 border-2 border-sky-400 rounded-2xl p-2 font-kanit" 
                onChange={(event) => setReview(event.target.value)} />
              <button className="my-2 w-3/6 add_review_btn" type="submit">Submit Review</button>
            </form>
          </div>
          
          <div className="flex flex-raw my-8">
            <button className="mx-5 modify_item_btn" onClick={() => goToEditItem()}>Modify item</button>
            <button className="mx-5 delete_item_btn" onClick={() => deleteItem()}>Delete item</button>
          </div>
        </div>
      </div>
      : <p>Loading...</p>
    }
    </div>
      
    



  )
}
