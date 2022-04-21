import React, { useState } from "react";
import './Form.css'

export default ({ isVisible, setIsVisible, picture }) => {
    const [buyForm, setBuyForm] = useState({ buyerName: '', buyPrice: picture.amount })
    const handleBuySubmit = () => {
        return;
    }
    return (
        <div>
            <form onSubmit={handleBuySubmit} className="buy-form">
                <p>You have chosen to buy ${picture.id}</p>
                <input className='buy-form'  name="Name" placeholder="Name on Card" />
                <input className='buy-form'  name="Price" placeholder="Enter your Visa Card #" />
                <input className='buy-form'  name="CVC" placeholder="CVC" />
                



            </form>
            <button className='confirm-btn'>Confirm</button>
            <button className='abort-btn'>Abort</button>
        </div>
    )
}