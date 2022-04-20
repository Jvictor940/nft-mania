import React from 'react'

function Picture({picture}) {
    return( 
        <div className="picture-item">
            <img src={picture.webformatURL} />
        </div>    
    )
}
export default Picture