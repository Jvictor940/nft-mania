import React, {useState} from 'react'

function Picture({picture, setIsVisible, setPicId, isSold, setIsSold}) {
    const [likes, setLikes] = useState(picture.likes)
    const [isLike, setIsLike] = useState(false)

    function handleClick() {
        setIsLike(!isLike)
        isLike ? setLikes(likes - 1) : setLikes(likes + 1)
    }
    
    const [newSold, setNewSold] = useState(false) //useState declared in local child

    function handleBuy() {
        setIsSold(true) //isSold is in parent component - sets all child component true
        setNewSold(true) // local child state
        setIsVisible(true)
        setPicId(picture.id)
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

                
                <button className={isSold ? "sold-btn" : "buy-btn"} onClick={handleBuy} >{isSold ? "Sold" : "Buy"}</button>
                <button className={newSold ? "sold-btn" : "buy-btn"} onClick={handleBuy} >{newSold ? "Sold" : "Buy"}</button>
            </div>
        </div>    
    )
}
export default Picture

// ❤️