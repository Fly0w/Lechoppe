'use client'

import Form from "@/components/Form"

export default function CreateItem() {
  
  const submitForm = async (data) => {
    try {
      const response = await fetch('/api/items/new', {
        method: "POST",
        body: JSON.stringify({
          itemName : data.itemName,
          urls : data.urls,
          categories : data.categories,
          price : data.price,
          description : data.description
        })
      })
      console.log("sending'info patch")
      return(response)
      
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <div className="flex flex-center">
      <Form label={"Create"} submitForm={submitForm} redirect={"/"}/>
    </div>
    
  )
}
