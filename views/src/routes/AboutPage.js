import trend from '../components/assets/trend.png'
import bullseye from '../components/assets/bullseye.png'
import trust from '../components/assets/laurelwreath.png'
import React from 'react'

const AboutPage = () =>{
    return (
        <div className="wrap-a">
            <div className="bg-a"></div>
            <h1 id="title-a">Our Vision</h1>
            <div className="content-a">
            <h1>Persistance & Drive</h1>
                <p>
           At our company, we believe in the transformative power of web services. We envision a world where
           businesses and individuals can harness the 
           boundless potential of the digital realm to 
           unlock their true capabilities. We are driven 
           by a deep commitment to providing innovative
            and cutting-edge web solutions that empower
             our clients to thrive in the ever-evolving
              online landscape. Our team of dedicated 
              professionals shares a common vision: to
               create impactful and immersive digital 
               experiences that captivate, inspire, 
               and connect. We are guided by a relentless
                pursuit of excellence, continuously pushing
                the boundaries of what is possible to 
                deliver unparalleled results. With 
                unwavering passion and a forward-thinking
                 mindset, we shape the future of web 
              services, driving growth, and enabling 
                 success. Together, let us embark on a 
                 journey of innovation, collaboration, and
             endless possibilities, as we unlock the 
                   true potential of your online presence and pave the way for a
                    brighter digital future.
                </p>
                <div className="divide-a div1"></div>
            </div>
            <div className="icons-a">
                <div>
                    <img src={trend} alt="" className="icon-a"/>
                    <h2>Significant Growth</h2>
                </div>
                <div>
                    <img src={bullseye} alt="" className="icon-a"/>
                    <h2>Punctual Results</h2>
                </div>
                <div>
                    <img src={trust} alt="" className="icon-a"/>
                    <h2>Consumer Trust</h2>
                </div>
            </div>
        </div>
    )
}

export default AboutPage