import React from 'react'

function Picture({picture}) {
    return( 
        <div className="picture-item">
            <img src={picture.webformatURL} />
            <div className="picture-tag">
                <p><strong><span className="span-tags">Tags:</span></strong> <i>{picture.tags}</i></p> 
                <p><strong><span className="span-tags">Seller:</span></strong> <i>{picture.user}</i></p>
                <p><strong><span className="span-tags">Views:</span></strong> <i>{picture.views}</i></p>
                <p><strong><span className="span-tags">Likes:</span></strong><i>{picture.likes}</i> <button>♡</button></p>
                <p><strong><span className="span-tags">Price:</span></strong><i>{picture.id} <span className='doge-span'>DOGE</span></i></p>
                <button className="buy-btn">Buy</button>
            </div>
        </div>    
    )
}
export default Picture