import close from '../components/assets/close.png'; 
import email from '../components/assets/email.png';
import auto from '../components/assets/auto.jpg';
import happyClient from '../components/assets/happyclient.jpg'; 
import FlowChart from '../components/assets/flowchart.jpg';
import windowScreen from '../components/assets/blogcover.jpg'; 
import {InView} from 'react-intersection-observer'; 
import {useEffect, useRef, useState} from 'react';  
import React from 'react'

const Info = ({handleScroll, scrollPosition}) =>{
    const elementRef = useRef(null); 
    const navRef = useRef(null);
    const emailInput = useRef(null); 
    const emailInvalid = useRef();
    const [windowSize, setWindowSize] = useState(0); 

  useEffect(() =>{
    setTimeout(() =>{
      elementRef.current.classList.remove('hide-i'); 
    },3000)
    
    const scroll = () => {
        try{  
            navRef.current.classList.add('scroll');
            } catch(error){
              console.log(error); 
            }
            handleScroll() 
    }
     
    window.addEventListener('scroll', scroll)
    
    setWindowSize(window.innerWidth)
    return () =>{
        window.removeEventListener('scroll', scroll)
    }
  },[])
   console.log(scrollPosition); 
  useEffect(() =>{
    const btns = Array.from(navRef.current.lastChild.children); 
    let currentId = ''; 

     if(scrollPosition < 650){
        btns[0].firstChild.classList.add('highlight');
        currentId = btns[0].id
     } else if(scrollPosition > 650 && scrollPosition < 1360){
        btns[1].firstChild.classList.add('highlight'); 
        currentId = btns[1].id
     } else if(scrollPosition > 1360 && scrollPosition < 2000 ){
        btns[2].firstChild.classList.add('highlight'); 
        currentId = btns[2].id
     } else{
        btns[3].firstChild.classList.add('highlight'); 
        currentId = btns[3].id
        console.log(currentId); 
     }
    
     btns.filter((b) => b.id !== currentId)
     .forEach((btn) => btn.firstChild.classList.remove('highlight'))

  },[scrollPosition])

  function handleClose(){
    elementRef.current.classList.add('hide-i'); 
  }

  function handleObserve(inView, entry){
    console.log(entry); 
      switch(entry.target.id){
        case '1':
            if(inView) entry.target.classList.remove('fade-left')
        break;
        case '2':
            if(inView) entry.target.classList.remove('fade-right')  
    }  
 }

async function handleSubmit(ref){
       const text = [ref.current.value]; 
       console.log(text); 
    if(text[0].includes('@')){

       await fetch('/submit',
       {method:'POST', 
       headers:{
       "Content-Type":"application/json"
       },
       body:JSON.stringify(text)})
       .then((res) => alert('Email Sent'))
       .catch(err => alert('An error occurred, Please try again'));
       
       ref.current.value = ''

    } else{
        emailInvalid.current.classList.add('on')

        setTimeout(() =>{
          emailInvalid.current.classList.remove('on'); 
        },2500)
    }
}
    return(
      
        <div className="infopage">
            <div className="guide-i">
                <div ref={navRef} className="nav-section"> 
                <h1>Featured</h1>
                <ul>
                    <li id="b1"><button className="btn-ip">A1</button></li>
                    <li id="b2"><button className="btn-ip">A2</button></li>
                    <li id="b3"><button className="btn-ip">A3</button></li>
                    <li id="b4"><button className="btn-ip">A4</button></li>
                </ul>
                </div>
                </div>
                <div ref={elementRef} className='content-ip hide-i'>
                    <h2>Recieve Free Guide</h2> 
                    <div><input name="emailForm" ref={emailInput} placeholder="Enter"type="text" alt="" />
                       <img src={email} alt="" id="email-ip"/>
                    </div>
                    <p className="emailSubmit" ref={emailInvalid}>Email Invalid</p> 
                    <p>Get an in-depth & personalized business analysis </p>
                    <span>
                    <button className="submit-ip" onClick={() => handleSubmit(emailInput)}>Submit</button>
                    <button onClick={() => handleClose()} className="submit-ip">Close</button>
                    </span> 
                </div>
            <div className="cards-ip">
                <div className="c-section">
                    <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}> 
                    {({inView,ref}) => (
                    <div ref={ref} id={1} className="card-ip f1 fade-left">
                        <img src={FlowChart} alt="" id="tech-ip"/> 
                        <p>Captivating Lead Strategy</p>
                        <div className="d d1"></div>
                        <div className="d d2"></div>
                    </div> )}
                    </InView>
                    <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}>
                    {({inView,ref}) => (   
                    <div ref={ref} id={2} className="blog-ip fade-right">
                        <h1>How It Works</h1>
                        <div className="blog-content-ip">
                            <span>
                                <h2>Initital Interaction</h2>
                                {windowSize > 500 ? <p>Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email. Upon Interaction, LEAD begins collecting valuble consumer data.</p>:
                                <p>Customers and Merchants from around the world opt into your sales funnel through Live Call/SMS/Email.</p>}
                            </span>
                            <span>
                                <h2>Prompt Retargeting</h2>
                               {windowSize > 500 ? 
                               <p>
                               Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information
                               via Google & Twilio APIs
                               </p>: <p> Once sufficient data is collected from Call/SMS our lead is then sent an effective follow up package containing vital onboarding information</p> }
                            </span>
                            <span className="last-span-ip">
                                <h2>Stored Data</h2>
                                { windowSize > 500 ?
                                <p>
                              LEAD then stores the data and repurposes it to automate tedious tasks 
                              (Appointment Setting, Creating Email Lists, Automatic Replies) 
                              </p> : <p> LEAD then stores the data and repurposes it to automate tedious tasks </p>}
                            </span>
                        </div>
                    </div> )}
                    </InView>
                </div>
                <div className="c-section r2">
                <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}> 
                    {({inView,ref}) => (
                    <div ref={ref} id={1} className="card-ip f1 fade-left">
                        <img src={happyClient} alt="" id="tech-ip"/> 
                        <p>Building relationships & Exceeding expectations</p>
                        <div className="d d1"></div>
                        <div className="d d2"></div>
                    </div> )}
                    </InView>
                    <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}>
                    {({inView,ref}) => (   
                    <div ref={ref} id={2} className="blog-ip fade-right">
                        <h1>Client Satisfaction</h1>
                        <div className="blog-content-ip">
                            <span>
                                <h2>Happy Clients</h2>
                                <p>
                                    Ensuring client satisfaction is a top priority for every business.LEAD ensures a great impression accross 
                                    all client interactions to secure credibility without the need for human presence 
                               </p>
                            </span>
                            <span>
                                <h2>Accessible Assistance</h2>
                                <p>
                                Clients are also free to opt for a interaction with one of your representatives from your company.
                                This allows LEAD to act as a saftey net for any client calls or attempts to reach out are effectively 
                                recovered. 
                           </p>
                            </span>
    
                        </div>
                    </div> )}
                    </InView>
                </div>
                <div className="c-section">
                <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}> 
                    {({inView,ref}) => (
                    <div ref={ref} id={1} className="card-ip f1 fade-left">
                        <img src={windowScreen} alt="" id="tech-ip"/> 
                        <p>Give Potential Clients Clarity In The Market</p>
                        <div className="d d1"></div>
                        <div className="d d2"></div>
                    </div> )}
                    </InView>
                    <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}>
                    {({inView,ref}) => (   
                    <div ref={ref} id={2} className="blog-ip fade-right">
                        <h1>Business Visibility</h1>
                        <div className="blog-content-ip">
                            <span>
                                <h2>Stand Out</h2>
                                {windowSize > 500 ? 
                                <p>
                                  There are approximately 30 million active businesses in North America. 
                                  The attributes that make your business unique are embedded in the services/product offering 
                                  and how it is presented. Implementing LEAD as a co-pilot allows you to focus on what matters most
                               </p> : <p>There are approximately 30 million active businesses in North America. 
                                  The attributes that make your business unique are embedded in the services/product offering 
                                  and how it is presented</p>}
                            </span>
                            <span>
                                <h2>Take Control</h2>
                                {windowSize > 500 ? 
                                <p>
                                By taking control and partnering with our web services agency, 
                                you unlock the power to elevate your online 
                                presence and drive exceptional results. Our 
                                tailored strategies and cutting-edge solutions
                                 empower you to reach new heights, captivate 
                                 your target audience, and outshine your 
                                 competition. 
                           </p> : <p>By taking control and partnering with our web services agency, 
                                you unlock the power to elevate your online 
                                presence and drive exceptional results.</p>}
                            </span>
    
                        </div>
                    </div> )}
                    </InView>
                </div>
                <div className="c-section r4">
                <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}> 
                    {({inView,ref}) => (
                    <div ref={ref} id={1} className="card-ip f1 fade-left">
                        <img src={auto} alt="" id="tech-ip"/> 
                        <p>Time Is Money</p>
                        <div className="d d1"></div>
                        <div className="d d2"></div>
                    </div> )}
                    </InView>
                    <InView onChange={handleObserve} threshold={ windowSize > 500 ? .5 : 0}>
                    {({inView,ref}) => (   
                    <div ref={ref} id={2} className="blog-ip fade-right">
                        <h1>Seamless Automation</h1>
                        <div className="blog-content-ip">
                            <span>
                                <h2>Automate Everything</h2>
                                { windowSize > 500 ? 
                                <p>
                                Embracing automation holds the key to 
                                unlocking unprecedented efficiency and 
                                productivity for your business.
                                By implementing automated processes,
                                 you can streamline repetitive tasks, 
                                 eliminate human error, and free up valuable
                                  time for your team to focus on strategic 
                                  initiatives and creative problem-solving.
                                   Experience accelerated growth, improved
                                    scalability, and a competitive edge in 
                                    today's fast-paced digital landscape by 
                                    harnessing the transformative power of 
                                    automation.
                               </p> : <p>  Embracing automation holds the key to 
                                unlocking unprecedented efficiency and 
                                productivity for your business.
                                By implementing automated processes,
                                 you can streamline repetitive tasks, 
                                 eliminate human error, and free up valuable
                                  time for your team to focus on strategic 
                                  initiatives and creative problem-solving.</p>}
                            </span>
    
                        </div>
                    </div> )}
                    </InView>
                </div>
            </div>
        </div>
    )
}

export default Info

