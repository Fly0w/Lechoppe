'use client'
// const item = {
//     _id: "3472697Fiegfze3",
//     categories: ['games'],
//     description: "A beautiful dagger",
//     name: "Dagger game",
//     price: 2000,
//     reviews: [],
//     urls: [
//         {   
//         title: 'img1', 
//         src: 'https://cdna.artstation.com/p/marketplace/presentation_asse', 
//         alt: 'dagger', _id: '647c7abb5899c613907b36cd'
//         },
//         {   
//         title: 'img1', 
//         src: 'https://cdna.artstation.com/p/marketplace/presentatio', 
//         alt: 'dagger', _id: '647c7abb5899c613907b36cd'
//         },
//         {   
//         title: 'img1', 
//         src: 'https://cdna.artstation.com/p/marketplace/presentation_', 
//         alt: 'dagger', _id: '647c7abb5899c613907b36cd'
//         }
//     ]
// }



import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';


const Card = ({ item }) => {
    const [selectedImg, setSelectedImg] = useState(item.urls[0].title);
    const [selectedUrl, setSelectedUrl] = useState(item.urls[0].src);
    const [selectedAlt, setSelectedAlt] = useState(item.urls[0].alt);


    const router = useRouter();

    // useEffect(() => {
    //     console.log(selectedImg)
    
    // }, [selectedImg])
    
    const goToItem = () => {
        router.push(`/product?id=${item._id}`)
    }

  return (
    <div className="card box">
        <h2 className='capitalize text-center text-2xl cursor-pointer'
            onClick={() => goToItem()}
        >{item.name}</h2>
        <div className='w-fit'>

            <figure className='my-3 mx-1 flex justify-center items-center w-72'>
                <img className='h-40 cursor-pointer bg-white'
                    src={selectedUrl}
                    alt={selectedAlt}
                    onClick={() => goToItem()}
                />
            </figure>

            <div className='flex flex-raw justify-start w-72'>
            {item.urls.map((image, key) => (
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
            <p className='my-2 mx-3 text-xl text-emerald-900'>¥{item.price}</p>
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