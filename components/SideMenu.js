'use client'

import { useState } from "react"
import SearchBar from "./SearchBar"

const SideMenu = ({ setCategory }) => {
  const [userSearch, setUserSearch] = useState("")

  const categories = {
    games : ["Minecraft", "Pokemon", "Genshin Impact"],
    animes : ["Attack On Titan", "Demon Slayer", "Bleach"],
  }

  const handleSearch = (search) => {
    setUserSearch(search) 
  }

  return (    
    <nav className=" w-60 h-screen border-2 border-indigo-600 bg-stone-400" >
      <SearchBar handleSearch={handleSearch} placeHolder="Search for a category"/>
      <h1 className=" text-teal-950 font-bold text-2xl">Categories</h1>
      <h2 onClick={() => setCategory("All")} className=" text-teal-950 font-bold cursor-pointer">All Categories</h2>

      <h2 onClick={() => setCategory("Games")} className=" text-teal-950 font-bold cursor-pointer">Games</h2>
      <ul className=" px-8 list-disc">
        {categories.games.map((game) => {
          if (game.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={game} onClick={() => setCategory(game)} className=" cursor-pointer">{game}</li>)
          }
        })}
      </ul>

      <h2 onClick={() => setCategory("Anime")} className=" text-teal-950 font-bold cursor-pointer">Anime</h2>
      <ul className=" px-8 list-disc">
      {categories.animes.map((anime) => {
          if (anime.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={anime} onClick={() => setCategory(anime)} className=" cursor-pointer">{anime}</li>)
          }
      })}
      </ul>


    </nav>
  )
}




export default SideMenu