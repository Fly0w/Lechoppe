'use client'

import SideMenu from "@/components/SideMenu"
import ListCards from "@/components/ListCards"
import SelectionSearch from "@/components/SelectionSearch"
import { useState, useEffect } from "react"

const Home = () => {
  const [searchCategories, setSearchCategories] = useState("All")
  const [listItems, setListItems] = useState([])
  const [valueSearch, setValueSearch] = useState(50)

  useEffect(() => {
    getItems();
  }, [])

// Everytime the categories changes, we have to fetch the categories's items
// from the database and update
    useEffect(() => {
      getItems();
  }, [searchCategories, valueSearch])
  
  const getItems = async () => {
    try {
      const response = await fetch('/api/items', {
        method: "POST",
        body: JSON.stringify({
          categories : searchCategories,
          number : valueSearch
        })
      })
      const data = await response.json()
      setListItems(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-row">
      <SideMenu setSearchCategories={setSearchCategories} />
      <div className="flex flex-col justify-start items-center px-5 w-full">
        <SelectionSearch setValueSearch={setValueSearch} valueSearch={valueSearch}/>
        <ListCards categories={searchCategories} listItems={listItems}/> 
      </div>
   
    </div>
  )
}

export default Home
