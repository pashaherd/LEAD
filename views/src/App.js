import React, {lazy, Suspense, useEffect} from 'react'
import './index.css'
import './shop.css'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './Home'
const InfoPage = lazy(() => import('./routes/InfoPage'))
const Contact = lazy(() => import('./routes/Contact'))
const About = lazy(() => import('./routes/About'))
const Shop = lazy(() => import('./Shop')); 

function App() {
  useEffect(() =>{
    if(window.location.href.includes('shopify')){
      document.body.style.backgroundColor = '#283618'
    }
  },[])

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>

          <Route exact path="/info" element={
         <Suspense fallback={<div id="loader-wrap"><span className="loader"></span></div>}>
          <InfoPage/>
          </Suspense>
          }/>

          
          <Route exact path="/contact" element={
            <Suspense fallback={<div id="loader-wrap"><span className="loader"></span></div>}>
          <Contact/>
          </Suspense>
          }/>
        
            <Route exact path="/about" element={
            <Suspense fallback={<div id="loader-wrap"><span className="loader"></span></div>}>
            <About/>
            </Suspense> 
            }/>

            <Route exact path="/shopify" element={
            <Suspense fallback={<div id="loader-wrap"><span className="loader"></span></div>}>
            <Shop/>
            </Suspense>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
