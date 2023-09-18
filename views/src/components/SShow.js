import shopify from './assets/shopify.png';
import number from './assets/sale.png';  
import React, { useEffect, useRef } from 'react'; 
import {animateScroll as scroll} from 'react-scroll'

const SShow = () =>{
    const divRef = useRef(); 
    const divRef2 = useRef(); 
  

    useEffect(() =>{
       const childrenRef = Array.from(divRef.current.children)
       .slice(0,2);
       
       childrenRef.forEach((ref) =>{
         ref.classList.add('on'); 
       })

       setTimeout(() =>{
         divRef2.current.classList.add('active'); 
       },500)
    },[])

    function handleScroll(){
        scroll.scrollTo(1100,{
            duration:1000,
            smooth:'easeInOutQuart'
        })
    }
    return (
        <section className="main-s">
            <div ref={divRef} className='left-s'>
                <div className="slider-s" id="s-1"></div>
                <div className="slider-s" id="s-2"></div>
                <div className="slider-s" id="s-3"></div>
                <span>
                    <img  className="num-s" src={number} alt=""/>
                <img src={shopify} alt="" id="shop-logo-s"/> 
                </span>
            </div>
            <div className="right-s">
                <h1 id="header-s">E-Commerce.</h1>
                <h1 id="second-s">At The Highest Standard.</h1>
                <span className="column">
                   <p>Utilize Shopify's Vast Ecommerce Platform At its Full Potential</p>
                   <div className="btn-wrap-shop row" ref={divRef2}>
                        <button onClick={() => handleScroll()}className="btn">Get Started</button>
                   </div>
                </span>
            </div>
        </section>
    )
}

export default SShow