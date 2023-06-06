const Caroussel = ({ urls }) => {
  
  return (
    <div className="border border-y-slate-700 w-full h-80 flex flex-raw flex-nowrap scroll bg-white bg-opacity-90 my-16 rounded-sm">

      {urls?
      urls.map((url) =>
        url.src
        ? <img className="mr-1" src={url.src} alt={url.alt}/>
        : <div></div>
      )
    : <p>Loading...</p>}
      
      
    </div>
  )
}

export default Caroussel