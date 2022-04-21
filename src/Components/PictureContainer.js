import React, { useState } from 'react'
import BuyForm from './BuyForm'
import Picture from './Picture'
import Search from './Search'


function PictureContainer({pictures}) {
    const [search, setSearch] = useState("")
    const displayedPictures = pictures.filter(picture => picture.tags.includes(search))
    const [isVisible, setIsVisible] = useState(false)
    const [isSold, setIsSold] = useState(false)
    const [picId, setPicId] = useState(0)
    
    function handleSearchChange(newSearch) {
        setSearch(newSearch)
        // console.log(newSearch)
    }
    
    console.log("picId is", picId)
    return( 
        <div> 
            <Search onSearchChange={handleSearchChange} />
            <div className="picture-container">
            {
               displayedPictures.map((element) => {
                   return(
                       <Picture key={element.id} picture={element} isVisible={isVisible} setIsVisible={setIsVisible} isSold={isSold} setIsSold={setIsSold} setPicId={setPicId}/>
                   )
               }) 
            }
            </div>
            <BuyForm isVisible={isVisible} setIsVisible={setIsVisible} picture={pictures} picId={picId} isSold={isSold} setIsSold={setIsSold} />
        </div>
    )
}
export default PictureContainer