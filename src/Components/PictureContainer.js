import React, { useState } from 'react'
import BuyForm from './BuyForm'
import Picture from './Picture'
import Search from './Search'


function PictureContainer({pictures}) {
    const [search, setSearch] = useState("")
    const displayedPictures = pictures.filter(picture => picture.tags.includes(search))
    const [isVisible, setIsVisible] = useState(false)
    
    function handleSearchChange(newSearch) {
        setSearch(newSearch)
        console.log(newSearch)
    }
    

    return( 
        <div> 
            <Search onSearchChange={handleSearchChange} />
            <div className="picture-container">
            {
               displayedPictures.map((element) => {
                   return(
                       <Picture key={element.id} picture={element} isVisible={isVisible} setIsVisible={setIsVisible} />
                   )
               }) 
            }
            </div>
            <BuyForm isVisible={isVisible} setIsVisible={setIsVisible} picture={pictures} />
        </div>
    )
}
export default PictureContainer