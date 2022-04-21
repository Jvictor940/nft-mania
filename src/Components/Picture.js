import React, {useState} from 'react'

function Picture({picture, setIsVisible, isVisible, isSold, setIsSold, setPicId}) {
    const [likes, setLikes] = useState(picture.likes)
    const [isLike, setIsLike] = useState(false)
    // const [isSold, setIsSold] = useState(false)
    

    function handleSold(e) {
        // setIsSold(!isSold)
        console.log(e.target)
        setIsVisible(!isVisible)
        setPicId(picture.id)

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
                <p className="picture-price"><strong><span className="span-tags">Price:</span></strong><i> {picture.id} <span className='doge-span'> <img src="https://www.shareicon.net/data/256x256/2015/09/14/101012_doge_512x512.png" className='doge-img'/> </span></i></p>
                {/* <button className={isSold ? "sold-btn" : "buy-btn"} onClick={handleSold}>{isSold ? 'Sold' : 'Buy' }</button> */}
                <button className={isSold ? "sold-btn" : "buy-btn"} onClick={handleSold} value={picture.id}>{isSold ? "Sold" : "Buy"}</button>
            </div>
        </div>    
    )
}
export default Picture

// ❤️