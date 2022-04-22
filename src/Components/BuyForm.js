import React from "react";
import './BuyForm.css'

export default ({ isVisible, setIsVisible, picId, newPictures }) => {
    const handleSold = () => {
        newPictures()
        setIsVisible(false)
    }

    const handleCancel = () => {
        setIsVisible(false)
    }

    return (
        <div className="buy-container" style={{ display: isVisible ? "block" : "none" }}>
            <div className="form-container">
                <h1>Congratulations! You have chosen to buy the Nft for {picId}
                    <span className='doge-span'> <img src="https://www.shareicon.net/data/256x256/2015/09/14/101012_doge_512x512.png" className='doge-img' /> </span>
                </h1>              
                <input className='buy-form' name="Name" placeholder="Name on Card" />
                <input className='buy-form' label="Card Number" name="Card" placeholder="Enter your Visa Card #" />
                <input className='buy-form' label="CVC" name="CVC" placeholder="CVC" />
            </div>
            <div>
                <button className='confirm-btn' onClick={handleSold}>Get Scammed</button>
                <button className='abort-btn' onClick={handleCancel}>Buyer's Remorse</button>
            </div>
        </div>
    )
}