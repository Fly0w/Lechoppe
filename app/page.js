'use client'

import SideMenu from "@/components/SideMenu"
import ListCards from "@/components/ListCards"
import { useState, useEffect } from "react"


import React from 'react'

const Home = () => {
  const [category, setCategory] = useState("all")

  useEffect(() => {
    console.log(category)
  }, [category])
  
  return (
    <div className="flex flex-row">
      <SideMenu setCategory={setCategory} />
      <ListCards />
      {/* <p className="col-start-4 col-end-8">The <span className="text-3xl">{category}</span> category is selected</p> */}
    </div>
  )
}

export default Home
