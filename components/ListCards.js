'use client'

// Todo :
// - import categories
import Card from "./Card"

const ListCards = ({ categories, listItems }) => {
  return (
    <div className="list_card">
      {listItems.map((item, key) => {
            if(categories === "All" || item.categories.includes(categories)){
                return (<Card key={key} item={item}/>)
        }})}
    </div>
  )
}

export default ListCards