'use client'

import Card from "./Card"

const ListCards = ({ categories, listItems }) => {
  return (
    <div className="list_card">
      {listItems[0]?
      listItems.map((item, key) => {
            if(categories === "All" || item.categories.includes(categories)){
                return (<Card key={key} item={item}/>)
        }})
      :<p className="text-slate-700 font-montserrat text-lg">This shop is empty...</p>}
    </div>
  )
}

export default ListCards