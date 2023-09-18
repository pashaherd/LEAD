import React,{useEffect} from 'react' 
import Showcase from './Showcase'
import Cards from './Cards'
import InfoSection from './InfoSection'
import Form from './Form'
import Footer from './Footer'

const Main = () =>{
  useEffect(() => {
   const handleScroll = () =>{
    const divs = Array.from(document.querySelectorAll('.text-c')); 
    for(let i = 0; i < divs.length; i++){
     divs[i].classList.toggle('active', true); 
    }
   }

    window.addEventListener('scroll', handleScroll)

    return () =>{ window.removeEventListener('scroll',handleScroll)}
      },[])
    return(
       <main>
         <Showcase /> 
         <Cards/>
         <InfoSection/> 
         <Form/>
         <Footer/> 
       </main>
    )
}

export default Main