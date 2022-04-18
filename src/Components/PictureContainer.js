import React from 'react'
import Picture from './Picture'
import Search from './Search'

function PictureContainer({pictures}) {
    return( 
        <div> 
            <Search />
            {
               pictures.map((element) => {
                   return(
                       <Picture key={element.id} picture={element} />
                   )
               }) 
            }
        </div>
    )
}
export default PictureContainer