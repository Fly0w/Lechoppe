'use client'

import { useState } from "react"
import Link from "next/link"
import SearchBar from "./SearchBar"
import { useRouter } from "next/navigation"

const SideMenu = ({ setCategory }) => {
  const [userSearch, setUserSearch] = useState("");
  const router = useRouter();

  const categories = {
    games : ["Minecraft", "Pokemon", "Genshin Impact"],
    animes : ["Attack On Titan", "Demon Slayer", "Bleach"],
  }

  const handleSearch = (search) => {
    setUserSearch(search) 
  }

  return (    
    <nav className="side_menu" >
      <SearchBar handleSearch={handleSearch} placeHolder="Search for a category"/>
      <h1 className="text-teal-950 font-bold text-2xl mb-3">Categories</h1>
      <h2 onClick={() => setCategory("All")} className=" text-teal-950 font-bold cursor-pointer mb-2">All Categories</h2>

      <h2 onClick={() => setCategory("Games")} className=" text-teal-950 font-bold cursor-pointer">Games</h2>
      <ul className=" px-8 list-disc">
        {categories.games.map((game) => {
          if (game.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={game} onClick={() => setCategory(game)} className="cursor-pointer hover:text-slate-50">{game}</li>)
          }
        })}
      </ul>

      <h2 onClick={() => setCategory("Anime")} className=" text-teal-950 font-bold cursor-pointer">Anime</h2>
      <ul className=" px-8 list-disc">
      {categories.animes.map((anime) => {
          if (anime.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={anime} onClick={() => setCategory(anime)} className="cursor-pointer hover:text-slate-50">{anime}</li>)
          }
      })}
      </ul>
      <button 
        type="button" 
        className="new_item"
        onClick={()=> router.push("/new-item")}>Create Item        
      </button>
      


    </nav>
  )
}




export default SideMenu