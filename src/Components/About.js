import React from 'react'
import "./About.css"

function About() {
    return( 
        <div className='flex-container'>
            <h1>About NFT Mania</h1>
            <div className='about-text'>
            <p> Nft Mania is about minting quality pictures rather than 16-bit monkeys. 
                Believe and we will go to the moon together! Be an early adopter and don't miss out on our whitelist!
                There will only be ONE copy of each "artwork" available.
            </p>
            </div>
            <div className='about-images-container'>
            {/* <img className='about-images' src='https://earthsky.org/upl/2021/10/Full-Hunters-Moon_Gizaw-Legesse_Addis-Ababa-Ethiopia_Oct-20-2021-e1634780880574.jpg'
            alt='full-moon' />
            <img className='about-images' src='https://media.istockphoto.com/photos/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-picture-id1344443930?b=1&k=20&m=1344443930&s=170667a&w=0&h=OFxY7InQfBGsBLkPuUBZECWkS3H9kc3rY1O2FaahXvo='
            alt ='rocket-ship' /> */}
            </div>
        </div>
    )
}
export default About