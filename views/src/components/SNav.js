import logo from './assets/lead-white.png'; 
import React,{ useRef, useEffect } from 'react'; 

const SNav = ({handleNav}) =>{
    const divide = useRef(); 
    const list = useRef(); 
    const menu = useRef(); 
    
    useEffect(() =>{
      function clickPosition(event){
        const {clientY} = event; 
        console.log(clientY); 
        const menuClasses = menu.current.classList; 
        if(menuClasses.value.includes('active')){
            if(clientY > 100){
                menu.current.classList.remove('active'); 
                list.current.classList.add('hide');
                divide.current.classList.add('hide'); 
            }
        }
       
      }
      
      window.addEventListener('click', clickPosition); 
    },[])
    function handleOpen(){ 
        menu.current.classList.add('active'); 

        setTimeout(() =>{
            divide.current.classList.remove('hide');
            list.current.classList.remove('hide');    
       },300)
    }
    return (
        <>
        <div className="nav-s row">
            <div onClick={() => handleOpen()} ref={menu} className="menu-s column">
            <div className="top-s row">    
            <img src={logo} alt="" id="logo-s"/>
            </div>
            <div ref={divide} className="divide-s hide"></div>
             <ul ref={list}className="links-n-s  hide row">
                    <li style={{ '--order':1 }} ><button id="2" onClick={(e) => handleNav(e)}>Intuitive Design</button></li>
                    <li style={{ '--order':2 }} ><button id="1" onClick={(e) => handleNav(e)}>Color Coheison</button></li>
                    <li style={{ '--order':3 }} ><button id="0" onClick={(e) => handleNav(e)}>Modern Masterpiece</button></li>
                    <li style={{ '--order':4 }} ><button id="3"onClick={(e) => handleNav(e)}>Stunning Visuals</button></li>
           </ul>
            </div>
        </div>

        </>
    )
}

export default SNav