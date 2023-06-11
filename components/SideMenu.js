'use client'

import { useState, useEffect } from "react"
import SearchBar from "./SearchBar"
import { useRouter } from "next/navigation"

const SideMenu = ({ setSearchCategories }) => {
  const router = useRouter();

  const [userSearch, setUserSearch] = useState("");

  const [categories, setCategories] = useState([])

  const [newCat, setNewCat] = useState(false)
  const [newCatGames, setNewCatGames] = useState(false)
  const [newCatAnime, setNewCatAnime] = useState(false)

  const [newCatName, setNewCatName] = useState("")
  const [newCatGamesName, setNewCatGamesName] = useState("")
  const [newCatAnimeName, setNewCatAnimeName] = useState("")

  useEffect(() => {
    getCategories()
    console.log("start", categories)
  }, [])

  useEffect(() => {
    console.log("cat", categories)
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

  // const category = {
  //   games : ["Minecraft", "Pokemon", "Genshin Impact"],
  //   animes : ["Attack On Titan", "Demon Slayer", "Bleach"],
  // }

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


{/* Games */}
      <h2 onClick={() => setSearchCategories("All")} className=" text-teal-950 font-bold cursor-pointer mb-2">All Categories</h2>

      <div className="flex flex-raw items-center">
       <h2 onClick={() => setSearchCategories("Games")} className=" text-teal-950 font-bold cursor-pointer">Games</h2> 
       <img className="ml-2 cursor-pointer" onClick={() => setNewCatGames(!newCatGames)} src="assets/icons/plus.png" height={17} width={17}/>
      </div>

      <ul className=" px-8 list-disc">
        {categories[0]
          ?categories[0].subcategories.map((game) => {
          if (game.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={game} onClick={() => setSearchCategories(game)} className="cursor-pointer hover:text-slate-50">{game}</li>)
          }
        })
          :<></>
        }
      </ul>
      {newCatGames
        ? <div className="flex flex-raw items-center">
            <input
                type="text"
                onChange={(event) => setNewCatGamesName(event.target.value)}
                placeholder="New Game"
                required
                className="add_category"
            />
            <button className="bg-green-500 text-white rounded-full py-1.5 px-3 h-min" onClick={() => createNewSubCategory("Games", newCatGamesName)}>Add</button>
        </div>
        : <div></div>
      }


{/* Anime */}
      <div className="flex flex-raw items-center mt-5">
        <h2 onClick={() => setSearchCategories("Anime")} className=" text-teal-950 font-bold cursor-pointer ">Anime</h2>
        <img className="ml-2 cursor-pointer" onClick={() => setNewCatAnime(!newCatAnime)} src="assets/icons/plus.png" height={17} width={17}/>
      </div>

      <ul className=" px-8 list-disc">
      {categories[0]
        ?categories[1].subcategories.map((anime) => {
        if (anime.toLowerCase().includes(userSearch.toLowerCase())){
          return (<li key={anime} onClick={() => setSearchCategories(anime)} className="cursor-pointer hover:text-slate-50">{anime}</li>)
        }
      })
        :<></>
        }
      </ul>
      {newCatAnime
        ? <div className="flex flex-raw items-center">
            <input
                type="text"
                onChange={(event) => setNewCatAnimeName(event.target.value)}
                placeholder="New Anime"
                required
                className="add_category"
            />
            <button className="bg-green-500 text-white rounded-full py-1.5 px-3 h-min" onClick={() => createNewSubCategory("Anime",newCatAnimeName)}>Add</button>
        </div>
        : <div></div>
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