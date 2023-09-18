import linkedIn from './assets/linkedin.png'
import insta from './assets/instagram.png'
import leadwhite from './assets/lead-white.png'
import React from 'react'

const Footer = () =>{
    return(
        <footer>
            <div className="socials">
                <h2>Socials</h2>
                <span>
                <a href="https://www.linkedin.com/in/lead-co-165276277/" target="_blank"><img src={linkedIn} alt="" id="linkedIn"/></a> 
                <a href="https://www.instagram.com/lead.ws" target="_blank"><img src={insta} alt="" id="instagram" /></a>
                </span> 
            </div>
            <img src={leadwhite} alt="" id="leadWhite-f"/> 
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </footer>
    )
}

export default Footer