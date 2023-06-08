'use client'

import Form from "@/components/Form"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditItem() {
  const searchParams = useSearchParams();
  const itemId = searchParams.get("id");

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

  const submitForm = async (data) => {
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: "PATCH",
        body: JSON.stringify({
          itemName : data.itemName,
          urls : data.urls,
          categories : data.categories,
          price : data.price,
          description : data.description
        })
      })
      return(response)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="flex flex-center">
      <Form submitForm={submitForm} itemInfo={itemInfo} redirect={`/product?id=${itemId}`}/>
    </div>
    
  )
}
