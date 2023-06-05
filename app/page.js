'use client'

import SideMenu from "@/components/SideMenu"
import ListCards from "@/components/ListCards"
import { useState, useEffect } from "react"


import React from 'react'

const Home = () => {
  const [category, setCategory] = useState("All")

  
  return (
    <div className="flex flex-row">
      <SideMenu setCategory={setCategory} />
      <ListCards category={category}/>
    </div>
  )
}

export default Home
