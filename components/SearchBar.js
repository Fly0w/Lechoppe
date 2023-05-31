import React from 'react'

const SearchBar = ({ handleSearch, placeHolder }) => {
  return (
    <div className=''>
        <input 
            type='text' 
            placeholder={placeHolder}
            onChange={(e) => handleSearch(e.target.value)}
            className='search_input'>
        </input>
    </div>
  )
}

export default SearchBar