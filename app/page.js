'use client'

import SideMenu from "@/components/SideMenu"
import ListCards from "@/components/ListCards"
import { useState, useEffect } from "react"


import React from 'react'

const Home = () => {
  const [categories, setCategories] = useState("All")
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

  

// Everytime the categories changes, we have to fetch the categories's items
// from the database and update
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch('/api/items', {
          method: "POST",
          body: JSON.stringify({
            categories : categories
          })
      })
      //fonction qui va fetch les items depuis la database
      // setListItems([])
      console.log("resp cat", response.json())
    }
      getItems();
      console.log(categories)
  }, [categories])
  
  return (
    <div className="flex flex-row">
      <SideMenu setCategories={setCategories} />
      <ListCards categories={categories} listItems={listItems}/>    
    </div>
  )
}

export default Home
