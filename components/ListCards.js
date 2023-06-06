'use client'


// Todo :
// - import categories





import Card from "./Card"
import { useState, useEffect } from "react"

const ListCards = ({ category }) => {
    const [listItems, setListItems] = useState([])

    useEffect(() => {
      const get50Items = async () => {
        const response = await fetch('/api/items');
        const data = await response.json();
        setListItems(data)
  
        console.log("resp 50 items", data)
      }

    get50Items();
      
    }, [])

// Everytime the category changes, we have to fetch the category's items
// from the database and update
    useEffect(() => {
      const getItems = async () => {
        const response = await fetch('/api/items', {
            method: "POST",
            body: JSON.stringify({
                category : category
            })
        })
        //fonction qui va fetch les items depuis la database
        // setListItems([])
        console.log("resp cat", response.json())
      }
    
      return () => {
        getItems();
      }
    }, [category])
    

  return (
    <div className="list_card">
        {listItems.map((item, key) => {
            if(category === "All" || item.categories.includes(category.toLowerCase())){
                return (<Card key={key} item={item}/>)
        }})}
        
    </div>
  )
}

export default ListCards