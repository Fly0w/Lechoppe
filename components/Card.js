'use client'

//Todo
// - Clic redirige sur page item
// - récupère item database


import { useState, useEffect } from 'react'


const Card = ({ itemName, listImg, price }) => {
    const [selectedImg, setSelectedImg] = useState(listImg[0].title);
    const [selectedUrl, setSelectedUrl] = useState(listImg[0].src);
    const [selectedAlt, setSelectedAlt] = useState(listImg[0].alt);


    useEffect(() => {
        console.log(selectedImg)
    
    }, [selectedImg])
    

  return (
    <div className="card box">
        <h2 className='capitalize text-center text-2xl cursor-pointer'
            onClick={() => console.log("click titre")}
        >{itemName}</h2>
        <div className='w-fit'>

            <figure className='my-3 mx-1 flex justify-center items-center w-72'>
                <img className='h-40 cursor-pointer bg-white'
                    src={selectedUrl}
                    alt={selectedAlt}
                    onClick={() => console.log("click image principale")}
                />
            </figure>

            <div className='flex flex-raw justify-start w-72'>
            {listImg.map((image, key) => (
                image.src 
                ?
                <figure className='mx-1' key={key}>
                    <img className="h-10 cursor-pointer bg-white"
                        src={image.src}
                        alt={image.alt}
                        onClick={() => {
                            setSelectedImg(image.title);
                            setSelectedUrl(image.src);
                            setSelectedAlt(image.alt)
                        }}
                    />
                </figure>
                : <div key={key}></div> //If url doesn't exist
            ))}
            </div>
        </div>

        <div className='flex flex-raw align-middle items-center my-2'>
            <p className='my-2 mx-3 text-xl text-emerald-900'>{price} ¥</p>
            <button 
                type="button" 
                className="add_to_cart_btn"
                onClick={()=> console.log("add to cart")}>Add to cart
            </button>
        </div>
        
    </div>
  )
}

export default Card