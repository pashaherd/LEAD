import Nav from './components/Nav'; 
import Main from './components/Main'; 
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useState} from 'react'

const Home = () =>{
    const [isVerified, setVerified] = useState(false); 

    useEffect(() =>{
      handleIsVerified(); 

      if(isVerified){
        toast.info('You Are Now Verified',{
            position:'top-center'
        })
      }
    },[])

    async function handleIsVerified(){
        await fetch('/verified/feeder')
        .then((res) => res.json())
        .then((data) =>{
          setVerified(data.verified)
        })
      }
      
    return (
        <>
        <Nav />
        <Main />
        <ToastContainer/>
        </>
    )
}

export default Home