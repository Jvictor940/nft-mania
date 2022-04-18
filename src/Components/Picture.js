import React from 'react'

function Picture({picture}) {
    return( 
        <div>
            <img src={picture.webformatURL} />
        </div>
    )
}
export default Picture