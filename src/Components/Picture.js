import React, {useState} from 'react'

function Picture({picture}) {
    const [likes, setLikes] = useState(picture.likes)
    const [isLike, setIsLike] = useState(false)
    const [isSold, setIsSold] = useState(false)

    function handleSold() {
        setIsSold(!isSold)
    }

    function handleClick() {
        setIsLike(!isLike)
        isLike ? setLikes(likes - 1) : setLikes(likes + 1)
    }

    return( 
        <div className="picture-item">
            <img src={picture.webformatURL} />
            <div className="picture-tag">
                <p><strong><span className="span-tags">Tags:</span></strong> <i>{picture.tags}</i></p> 
                <p><strong><span className="span-tags">Seller:</span></strong> <i>{picture.user}</i></p>
                <p><strong><span className="span-tags">Views:</span></strong> <i>{picture.views}</i></p>
                <p><strong><span className="span-tags">Likes:</span></strong><i> {likes}</i> <button className='like-btn' onClick={handleClick}>{isLike ? '❤️' : '♡'}</button></p>
                <p><strong><span className="span-tags">Price:</span></strong><i> {picture.id} <span className='doge-span'>DOGE</span></i></p>
                <button className="buy-btn" onClick={handleSold}>{isSold ? 'Sold' : 'Buy' }</button>
            </div>
        </div>    
    )
}
export default Picture

// ❤️