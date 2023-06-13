const SelectionSearch = ({ setValueSearch, valueSearch }) => {

  return (
    <div className='my-3 border-4 border-cyan-600 rounded-2xl w-full p-3 bg-slate-50'>
      <label className=" font-montserrat">Items per page</label>
        <select 
            onChange={(e) => setValueSearch(e.target.value)}
            value={valueSearch}
            className='search_input'>
              <option value={2}>2</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
        </select>
    </div>
  )
}

export default SelectionSearch