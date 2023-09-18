import React from 'react';
import network from './assets/network.png'
import tap from './assets/tap.png'
import computer from './assets/online-test.png'
import target from './assets/target.png'

const Cards = () =>{
    function swapCard(e){
      const children = e.target.className.includes('revert') ? 
      Array.from(e.target.parentNode.children) : 
      Array.from(e.target.parentNode.parentNode.children);  

      children[0].classList.toggle('none'); 
      children[1].classList.toggle('none'); 
      children[2].classList.toggle('on');
      children[3].classList.toggle('on') 
      console.log(e.target.parentNode.parentNode)
    
    }
    return (
        <div className="wrap-c">
            <h1>Cutting Edge Service</h1>
            <img src={network} alt="" id="network"/> 
            <div className="content-c">
            <div className="text-c">
              <button className="wd" onClick={(e) => swapCard(e)}><img src={computer} alt="" className="c1"/></button>
              <div>
              <h3>Taliored Web Development</h3>
              <p className="web-text-c"> Crafting digital experiences that shape the future and inspire endless possibilities</p>
              <p className="mobile-text-c">Crafting digital experiences that shape the future</p>
              </div>
                <p className="card-back">Our expert team crafts visually appealing, user-friendly websites that reflect your brand identity and drive engagement.</p>
                <button className="revert" onClick={(e) => swapCard(e)}>Revert</button>
            </div>
            <div className="text-c">
               <button className="wd" onClick={(e) => swapCard(e)}><img src={tap} alt="" className="c1"/></button> 
              <div>
              <h3>Innovative Lead Generation</h3>
              <p className="web-text-c"> Empowering businesses to thrive through strategic connection and conversion.</p>
              <p className="mobile-text-c">Empowering businesses to thrive through strategies</p>
              </div>
                <p className="card-back">We implement strategic marketing tactics to attract and convert potential customers, ensuring your business growth.</p>
                <button className="revert" onClick={(e) => swapCard(e)}>Revert</button>
            </div>
            <div className="text-c">
              <button className="wd" onClick={(e) => swapCard(e)}><img src={target} alt="" className="c1"/></button>
              <div>
              <h3>Captivating Retargeting</h3>
              <p className="web-text-c"> Reigniting engagement, amplifying conversions, and turning lost opportunities into triumphant returns</p>
              <p className="mobile-text-c">Reigniting engagement and Amplifying conversions</p>
              </div>
                <p className="card-back ">
                Through personalized ads and tailored messaging, we re-engage previous visitors, amplifying conversions and maximizing your marketing efforts.
                </p>
                <button className="revert" onClick={(e) => swapCard(e)}>Revert</button>
            </div>
            </div> 
        </div>
    )
}

export default Cards