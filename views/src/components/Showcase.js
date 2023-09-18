import leadwhite from './assets/lead-white.png'
import star from './assets/star.png'; 
import shopify from './assets/shopify.png'
import React from 'react'

const Showcase = () =>{

    function reDirect(){
        window.location.assign('/info')
    }
    function reDirectShopify(){
        window.location.assign('/shopify')
    }
    return (
        <div className="showcase">
        <div className="wrap">
        <div className="content-s">
            <h1>Exposure Every Business <span className="text-s">
                Deserves <img src={star} alt="" id="star"/></span></h1>
                <span id="btns-show">
                <div>
                    <button onClick={reDirect}id="home-btn">Learn More</button>
                </div>
                <div id="shop-div">
                    <img src={shopify} alt="" id="shopify-dash-logo"/>
                    <button onClick={reDirectShopify}id="home-btn">Shopify</button>
                </div>
                </span>
        </div>
        <div className="divide"></div>
        <img src={leadwhite} alt="" id="logo-white"/>    
        </div>
    </div>
    )
}

export default Showcase