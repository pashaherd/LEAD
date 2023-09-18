 import Nav from '../components/Nav';
 import Footer from '../components/Footer';  
 import Info from './Info'  
 import {useState, useEffect} from 'react'
 import React from 'react'
 
const InfoPage = () =>{
  const [scrollPosition, setScrollPosition] = useState(0); 
  
  function handleScroll(){
    const position = window.scrollY; 
    setScrollPosition(position); 
  }

        return (
            <>
            <Nav/>
            <Info handleScroll={handleScroll} scrollPosition={scrollPosition}/> 
            <Footer/>
            </>
        )
    }

export default InfoPage