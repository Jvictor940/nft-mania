import React, { useState } from 'react'
import BuyForm from './BuyForm'
import Picture from './Picture'
import Search from './Search'


function PictureContainer({pictures, setPictures}) {
    const [search, setSearch] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [isSold, setIsSold] = useState(false)
    const [picId, setPicId] = useState(0)

    const displayedPictures = pictures.filter(picture => picture.tags.includes(search))

    const newPictures = () => {
       const soldKey = pictures.map((el)=>{
          if (el.id ===  picId) {
            return {...el, sold: true }
          }
          else {
              return el
          }
        })
        setPictures(soldKey)
      }
    
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
                       <Picture key={element.id} picture={element} setIsVisible={setIsVisible} setPicId={setPicId} isSold={isSold} setIsSold={setIsSold} />
                   )
               }) 
            }
            </div>
            <BuyForm isVisible={isVisible} setIsVisible={setIsVisible} picId={picId} setIsSold={setIsSold} newPictures={newPictures} />
        </div>
    )
}
export default PictureContainer