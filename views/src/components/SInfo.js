import bot from './assets/ai.png';
import design from './assets/design.png'; 
import weakness from './assets/weakness.png'; 
import personal from './assets/personal.png'; 
import { InView } from 'react-intersection-observer'; 
import React from 'react'


const SInfo = () =>{
    return (
        <section className="info-s column">
            <div className="wrap-i-s row">
               <div className="content-i-s first-s">
                   <span className="column">
                    <h2>Automated Customer Support</h2>
                    <p>Automate your entire customer service department with new artifical intelligence solutions</p>
                   </span>
                   <img src={bot} alt="" className="icon-s"/>
               </div>       
               <div className="content-i-s second-s">
                   <span className="column">
                    <h2>Intuitive Design</h2>
                    <p>Most shopify stores struggle with distinctive uniqueness. Achieve a beautiful UI that leaves a resinous impression on clients</p>
                   </span>
                   <img src={design} alt="" className="icon-s"/>
               </div>
            </div>
            <div className="wrap-i-s row">
            <InView threshold={.5}>
                {({ inView, ref}) => (

               <div ref={ref} className={`content-i-s third-s ${ inView ? "slide" : ""}`}>
                   <span className="column">
                    <h2>Customer Accounts</h2>
                    <p>Utilize Customer Accounts Beyond a Simple Sign In, Incorporate Rewards/Refferal Programs & Brand Events to Keep Customers Engaged.</p>
                   </span>
                   <img src={personal} alt="" className="icon-s"/>
               </div>
               )}
            </InView>
            <InView threshold={.5}>
               {({inView, ref}) => (        
               <div ref={ref} className={`content-i-s fourth-s ${inView ? "slide" : ""}`}>
                   <span className="column">
                    <h2>Go Beyond</h2>
                    <p>Elevate your Shopify Store Beyond the Generic Layout, Every Business Needs an Edge. Explore Creative Intuition</p>
                   </span>
                   <img src={weakness} alt="" className="icon-s"/>
               </div>
               )}
            </InView>
            </div>
        </section>
    )
}

export default SInfo