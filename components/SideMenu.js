'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import SearchBar from "./SearchBar"
import SubCategories from "./SubCategories"

const SideMenu = ({ setSearchCategories }) => {
  const router = useRouter();

  const [userSearch, setUserSearch] = useState("");

  const [categories, setCategories] = useState([])
  const [newCat, setNewCat] = useState(false)
  const [newCatName, setNewCatName] = useState("")

  useEffect(() => {
    getCategories()
    // console.log("start", categories)
  }, [])

  useEffect(() => {
    // console.log("cat", categories)
  }, [categories])
  
  
  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories")
      const data = await response.json()
      setCategories(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const createNewSubCategory = async (cat, subcat) => {
    try {
      const response = await fetch("/api/categories", {
        method: "PATCH",
        body : JSON.stringify({
          category : cat,
          subcategory : subcat
        })
      })

      getCategories()
    } catch (error) {
      console.log(error)
    }
  }

  const createNewCategory = async (cat) => {
    try {
      const response = await fetch("/api/categories", {
        method: "POST",
        body : JSON.stringify({
          category : cat,
        })
      })

      getCategories()
    } catch (error) {
      console.log(error)
    }
  }

  const handleSearch = (search) => {
    setUserSearch(search) 
  }

  return (    
    <div className="side_menu" >
      <SearchBar handleSearch={handleSearch} placeHolder="Search for a category"/>
      <div className="flex flex-raw items-center mb-3">
        <h1 className="text-teal-950 font-bold text-2xl ">Categories</h1>
        <img className="ml-2 cursor-pointer" onClick={() => setNewCat(!newCat)} src="assets/icons/plus.png" height={17} width={17}/>
      </div>

      {newCat
        ? <div className="flex flex-raw items-center">
            <input
                type="text"
                onChange={(event) => setNewCatName(event.target.value)}
                placeholder="New Category"
                required
                className="add_category"
            />
            <button className="bg-green-500 text-white rounded-full py-1.5 px-3 h-min" onClick={() => createNewCategory(newCatName)}>Add</button>
        </div>
        : <div></div>
      }
      <h2 onClick={() => setSearchCategories("All")} className=" text-teal-950 font-bold cursor-pointer mb-2">All Categories</h2>

{/* List of categories */}
      {categories[0]
      ?categories.map((list, key) => 
        <SubCategories 
          key={key}
          category={list.category} 
          subcategories={list.subcategories} 
          userSearch={userSearch}
          createNewSubCategory={createNewSubCategory}
          setSearchCategories={setSearchCategories}/>
      )
      :<></>
      }
    
      <button 
        type="button" 
        className="new_item"
        onClick={()=> router.push("/new-item")}>Create Item        
      </button>
    
    </div>
  )
}

export default SideMenu