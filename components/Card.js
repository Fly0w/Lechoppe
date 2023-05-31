import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Card = ({ listImg  }) => {
  return (
    <article className=' m-4 h-72 w-72 border-2 border-indigo-600 bg-stone-400'>
        <div className='flex flex-row'>
            <figure className='m-3 w-4/6'>
                <img 
                    src={listImg.img1.src}
                    alt={listImg.img1.alt}
                />
            </figure>
        
            <div className='flex flex-col'>
                <figure className='my-1'>
                    <img 
                        src={listImg.img2.src}
                        alt={listImg.img2.alt}
                        height={100}
                        width={100}
                    />
                </figure>
                <figure className='my-1'>
                    <img 
                        src={listImg.img3.src}
                        alt={listImg.img3.alt}
                        height={100}
                        width={100}
                    />
                </figure >
                <figure className='my-1'>
                    <img 
                        src={listImg.img4.src}
                        alt={listImg.img4.alt}
                        height={100}
                        width={100}
                    />
                </figure>
            </div>

        </div>
        <p>3000 ¥</p>
    </article>
  )
}

export default Card