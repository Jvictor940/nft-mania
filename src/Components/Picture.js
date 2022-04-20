import React from 'react'

function Picture({picture}) {
    return( 
        <div className="picture-item">
            <img src={picture.webformatURL} />
            <div className="picture-tag">
                <p><strong><span className="span-tags">Tags:</span></strong> <i>{picture.tags}</i></p>
            </div>
            <div className="picture-desc">
                <p>Seller: {picture.user}</p>
                <p>Views: {picture.views}</p>
                <p>Likes: {picture.likes} <button>♡</button></p>
                <p>Price: {picture.id} DOGE</p>
                <button className="buy-btn">Buy</button>
            </div>
        </div>    
    )
}
export default Picture