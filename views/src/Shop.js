import React from 'react';
import SNav from './components/SNav'; 
import SShow from './components/SShow'; 
import SInfo from './components/SInfo'; 
import SForm from './components/SForm'; 
import Projects from './components/Projects'; 
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react'
import { animateScroll as scroll} from 'react-scroll'

function App() {
  const [classPosition, setPosition] = useState(['backwards','before','forward','after'])
    const headerRef = useRef(); 
    
    useEffect(() =>{
       handleHeader(); 

       console.log(window.scrollY); 
    },[])
    function handleHeader(){
        let header = ''; 

        let currentIndex  = classPosition.findIndex((p) => p === 'forward'); 

        switch(currentIndex){
            case 0:
                header = 'Modern Masterpiece'
            break; 
            case 1:
                header = 'Colour Coheison'
            break; 
            case 2:
                header = 'Intuitive Design'
            break;
            case 3:
                header = 'Stunning Visuals'
            break; 
        }

        return header
    }
    function handleBackwardsTrans(){
         let newPositions = [...classPosition]; 
         
         let lastValue = newPositions.pop(); 
         newPositions.unshift(lastValue); 

         setPosition(newPositions)
         handleHeader(); 

         headerRef.current.classList.add('fade'); 
          
         setTimeout(() =>{
          headerRef.current.classList.remove('fade'); 
         },500)
    }
    
    function handleForwardTrans(){
        let newPositions = [...classPosition]; 
        console.log(newPositions); 

        let firstValue = newPositions.shift(); 
        newPositions.push(firstValue); 

        setPosition(newPositions);
        handleHeader(); 
        
        headerRef.current.classList.add('fade'); 

        setTimeout(() =>{
         headerRef.current.classList.remove('fade'); 
        },300)
    }

   function handleNav(e){
     
     scroll.scrollTo(2400,{
      duration:1000,
      smooth:'easeInOutQuart'
     })
     
     console.log(e.target.id); 
      let targetId = JSON.parse(e.target.id); 
      let copyPositions = [...classPosition]; 
      let j = copyPositions.findIndex((c) => c === "forward") ; 
      
     while(j !== targetId){
      let shiftPosition = copyPositions.shift(); 
      copyPositions.push(shiftPosition); 
      
      setPosition(copyPositions);
      j = copyPositions.findIndex((c) => c === "forward")  
     }
        
   }
  return (
   <>
   <SNav handleNav={handleNav}/> 
   <SShow/>
   <SInfo/>
   <SForm/>
   <Projects classPosition={classPosition} forwardTrans={handleForwardTrans} backwardTrans={handleBackwardsTrans} handleHeader={handleHeader} headerRef={headerRef}/>
   <Footer/> 
   </>
  )
}

export default App;
