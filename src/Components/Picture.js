import React, {useState} from 'react'

function Picture({picture, setIsVisible, setPicId, isSold, setIsSold}) {
    const [likes, setLikes] = useState(picture.likes)
    const [isLike, setIsLike] = useState(false)
    const {tags, user, views, id, sold} = picture

    function handleClick() {
        setIsLike(!isLike)
        isLike ? setLikes(likes - 1) : setLikes(likes + 1)
    }
    
    function handleBuy() {
        setIsVisible(true)
        setPicId(picture.id)
    }

    return( 
        <div className="picture-item">
            <img src={picture.webformatURL} />
            <div className="picture-tag">
                <p><strong><span className="span-tags">Tags:</span></strong> <i>{tags}</i></p> 
                <p><strong><span className="span-tags">Seller:</span></strong> <i>{user}</i></p>
                <p><strong><span className="span-tags">Views:</span></strong> <i>{views}</i></p>
                <p><strong><span className="span-tags">Likes:</span></strong><i> {likes}</i> <button className='like-btn' onClick={handleClick}>{isLike ? '❤️' : '♡'}</button></p>
                <p className="picture-price"><strong><span className="span-tags">Price:</span></strong><i> {id} <span className='doge-span'> <img src="https://www.shareicon.net/data/256x256/2015/09/14/101012_doge_512x512.png" className='doge-img'/> </span></i></p>
                
               

                <button className={sold ? "sold-btn" : "buy-btn"} onClick={handleBuy} >{sold ? "Sold" : "Buy"}</button>
            </div>
        </div>    
    )
}
export default Picture

// ❤️