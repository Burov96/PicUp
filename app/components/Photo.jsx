'use client'

import Image from "next/image"
import { useState } from "react"
import PhotoModal from "./PhotoModal"
import { deletePhoto } from "../actions/deletePhoto"
import { Delete, Favorite, FavoriteBorder } from "@mui/icons-material"
import { addOrRemoveFromFavorites } from "../actions/addOrRemoveFromFavorites"
import { Notify } from "../utils/Notification"

export default function Photo({ src, alt, width, height, photoName, isFavorited}){
    const [showModal, setShowModal] = useState(false)
    function toggleModal(){
        setShowModal(!showModal)
    }

    const [show, setShow] = useState('');
    const handleNotify = (message, type) => {
      setShow(Notify(message, type));
      setTimeout(() => {
        setShow('')
      }, 4000);
    };

    console.log('the image here is favourited? Well that\'s '+ isFavorited)

    return(
        <>
        {show&&(show)}
            <div
            style={{ width, height}}
            className="relative w-auto h-auto shadow-md border border-white border-opacity-80 rounded-lg overflow-hidden cursor-pointer">
                <form action={deletePhoto}
                className=" absolute bottom-2.5 right-10 z-10">
                <input type="hidden" name="photoPath" value={src} />
                <button type="submit" className=" bg-transparent border-none text-white cursor-pointer hover:text-red-500 hover:scale-110" onClick={()=>handleNotify("The image have been removed","success")}><Delete/></button>
                </form>
                <form action={addOrRemoveFromFavorites} className=" absolute bottom-2.5
                 right-2.5 z-10">
                    <input type="hidden" name="photoName" value={photoName} />
                    <input type="hidden" name="isFavorited" value={isFavorited} />
                    <button type="submit" className={`bg-transparent border-none  cursor-pointer  hover:scale-110 transition duration-300 ${isFavorited?"text-green-500 hover:text-white":" text-white hover:text-green-500"}`} onClick={()=>handleNotify("Image added to favourites!","success")}>
                        {isFavorited? <Favorite/>: <FavoriteBorder/>}</button>                    
                 </form>
                <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                style={{objectFit: 'cover', objectPosition: 'center'}}
                onClick={ ()=>toggleModal()}
                />

            </div>
            {
                showModal && <PhotoModal src={src} alt={alt} onClose={toggleModal} />
            }
        </>
    )
}