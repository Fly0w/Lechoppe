'use client'

import { useState, useEffect } from "react"

const SubCategories = ({ category, subcategories, setSearchCategories, userSearch, createNewSubCategory }) => {
  const [newSubCat, setNewSubCat] = useState(false)

  const [newSubCatName, setNewSubCatName] = useState("")

  return (
    <div>
      <div className="flex flex-raw items-center">
        <h2 onClick={() => setSearchCategories(category)} className=" text-teal-950 font-bold cursor-pointer">{category}</h2> 
        <img className="ml-2 cursor-pointer" onClick={() => setNewSubCat(!newSubCat)} src="assets/icons/plus.png" height={17} width={17}/>
      </div>

      <ul className="px-8 list-disc">
        {subcategories[0]
          ?subcategories.map((subCat) => {
          if (subCat.toLowerCase().includes(userSearch.toLowerCase())){
            return (<li key={subCat} onClick={() => setSearchCategories(subCat)} className="cursor-pointer hover:text-slate-50">{subCat}</li>)
          }
        })
          :<></>
        }
      </ul>

      {newSubCat
        ? <div className="flex flex-raw items-center">
            <input
                type="text"
                onChange={(event) => setNewSubCatName(event.target.value)}
                placeholder={`New ${category}`}
                required
                className="add_category"
            />
            <button className="bg-green-500 text-white rounded-full py-1.5 px-3 h-min" onClick={() => createNewSubCategory(category, newSubCatName)}>Add</button>
        </div>
        : <div></div>
      }
    </div>
  )
}

export default SubCategories