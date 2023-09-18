import React, {useState,useEffect} from 'react'
import { animateScroll as scroll} from 'react-scroll'; 
import phone from './assets/telephone.png'
import logo from './assets/lead-black.png'
import menu from './assets/hamburger.png'
import close from './assets/close.png'  
import leadWhite from './assets/lead-white.png'

const Nav = () =>{
    
    const [isMenu,setMenu] = useState(true)
   function handleMenu(e){
    if(window.innerWidth <= 800){
        document.querySelector('.mobile').classList.toggle('visible'); 
    }

    console.log(e.target) 

       e.target.classList.toggle('active', isMenu)
       document.body.classList.toggle('active',isMenu)
    
       
       if(e.target.className.includes('menu')){
        e.target.nextSibling.classList.toggle('active', isMenu )
       } else{
        e.target.previousSibling.classList.toggle('active', isMenu)
       }
    setMenu(!isMenu);
} 

function handleConsultation(){
    const endpoint = window.location.href.length - 1
    if(window.location.href[endpoint].match(/\//)){
        scroll.scrollTo(1400, {
            duration:1000,
            smooth:'easeInOutQuart'
        });
        return
    }
   window.location.assign('/'); 
   scroll.scrollTo(1400, {
    duration:1000,
    smooth:'easeInOutQuart'
});    
} 

    return (
        <>
        <nav>
            <header>
                <div className="consult">
                <button onClick={handleConsultation}><h1>Free Consultation</h1></button>
                <img src={phone} alt="" id="tele" /> 
                </div>
                <div>
                <img src={logo} alt="" id="logo"/> 
                </div>
                <div >
                <img onClick={(e) => handleMenu(e)} src={menu} alt="" className="menu"/> 
                <img onClick={(e) => handleMenu(e)} src={close} alt="" className="close"/> 
                </div>
                <div className="menu-cover">
                <a href="/">Home</a> 
                <a href="/about">About</a> 
                <a href="/contact">Contact</a> 
        </div>
            </header>
        </nav>
        <div className="mobile">
            <img src={leadWhite} alt="" id="navlogo"/> 
            <ul>
                <li><a href="/">Home</a></li> 
                <li><a href="/about">About</a></li> 
                <li><a href="/contact">Contact</a></li> 
            </ul>
        </div>
        </>
    )
}

export default Nav 