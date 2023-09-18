import right from './assets/right-arrow.png'
import left from './assets/left-arrow.png' 
import React from 'react'; 


const Projects = ({classPosition,forwardTrans, backwardTrans,handleHeader, headerRef}) =>{
    
    return (
        <section className="projects-s column">
            <h1 className="header-p-s" ref={headerRef}>{handleHeader()}</h1>
            <div className="content-p-s row" >
                <div id="one" className={classPosition[0]}></div>
                <div  id="two" className={classPosition[1]}></div>
             <div id="three" className={classPosition[2]}></div>
                <div id="four" className={classPosition[3]}></div>
            </div>
            <span className="column">
                <h3>Be In Full Control of UI/UX</h3>
                <p id="caption-shop">
                  Take User Experience to the Next Level with Our Top Notch Designs
                </p>
            </span>
            <div className="arrows-s row">
             <img src={left} onClick={() =>backwardTrans()}  alt="" className="icon-arrows-s"/> 
             <img src={right} onClick={() => forwardTrans()} alt="" className="icon-arrows-s"/>     
            </div>         
        </section>
    )
}

export default Projects