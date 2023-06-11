const Caroussel = ({ urls }) => {
  
  return (
    <div className="border border-y-slate-700 w-full h-80 flex flex-raw flex-nowrap scroll bg-white bg-opacity-90 my-16 rounded-sm">

      {urls?
      urls.map((url, key) =>
        url.src
        ? <img key={key} className="mr-1" src={url.src} alt={url.alt}/>
        : <div key={key}></div>
      )
    : <p>Loading...</p>}
      
      
    </div>
  )
}

export default Caroussel