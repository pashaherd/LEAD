import shopify from './assets/shopify.png'; 
import lead from './assets/lead-white.png';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import React, {useEffect, useState} from 'react' 

const SForm = () =>{
  const [phoneData, setPhoneData] = useState([]); 
  const [shopifyData, setShopifyData] = useState({
    fname:'',
    lname:'',
    email:'',
    phone:'',
    code:'',
    msg:''
  })
  
  useEffect(() =>{
     getPhoneData();  
  },[]);

  async function getPhoneData(){
    await fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      let viableData = Object.entries(data["codes"]); 
      setPhoneData(viableData); 
    }).catch(err => console.log(err))
  }

  function handleInput(e){
    const { name , value} = e.target; 

    setShopifyData({
      ...shopifyData, 
      [name]:value
    })
  }

  async function handleShopifySubmit(e){
        e.preventDefault(); 

        await fetch('/shopify-submit', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(shopifyData)
        })
        .then((res) => {
          if(res.status === 200){
            toast.success(`Thank You ${shopifyData.fname}, For Your Submission`,{
              position:'top-center'
            })
          } else {
            toast.error(`Sorry ${shopifyData.fname}, Something Went Wrong`,{
              position:'top-center'
            })
          }
        }).catch((err) => console.log(err));

        setShopifyData({
          fname:'',
          lname:'',
          email:'',
          phone:'',
          code:'',
          msg:''
        })
  }
    return (
      <>
       <section className="form-section-s column">
        <div className="form-wrap-s">
           <div className="aside-s">
              <h2 id="header-shop">Elevate Your Online Business</h2>
              <span>
              <h2>To The Next Level</h2>
              <p>Get In Touch With Us Today, Start Winning Tommorrow</p>
              </span>
              <span className="icons-s row">
                <img src={shopify} alt="" className="form-icon-s"/> 
                <img src={lead} alt="" className="form-icon-s"/> 
              </span>
           </div>
           <form onSubmit={(e) => handleShopifySubmit(e)} action="/shopify-submit" method="POST" className="form-s">
              <fieldset className="names-s row">
                <span>
                <label htmlFor="fname-s">First Name</label>
                <input required type="text" name="fname" id="fname-s" onChange={(e) => handleInput(e)} value={shopifyData.fname} placeholder="Enter"/>
                </span>
                <span>
                <label htmlFor="lname-s">Last Name</label>
                <input required type="text" name="lname" id="lname-s" onChange={(e) => handleInput(e)} value={shopifyData.lname}  placeholder="Enter"/>
                </span>
              </fieldset>
              <fieldset className="email-wrap-s">
                <span>
                    <label htmlFor="email-s">Email</label>
                    <input required type="text" name="email" id="email-s" onChange={(e) => handleInput(e)} value={shopifyData.email} placeholder="Enter" /> 
                </span>
              </fieldset>
              <fieldset className="phone-wrap-s">
                  <span>
                    <label htmlFor="phone-s">Phone</label>
                    <div>
                    <select name="code" className="phone-codes" onChange={(e) => handleInput(e)} value={shopifyData.code} >
                      {phoneData.map(data =>
                        <option>{`${data[0]} ${data[1]}`}</option>
                        )}
                    </select>
                    <input required type="text" name="phone" id="phone-s" onChange={(e) => handleInput(e)} value={shopifyData.phone} placeholder="Enter" />
                    </div>
                  </span>
              </fieldset>
              <fieldset className="message-s column">
                <h3>What Are Some of the Challenges You Face Running an Online Business?</h3>
                <textarea id="text-a" name="msg" onChange={(e) => handleInput(e)} value={shopifyData.msg}  placeholder="Enter">
                </textarea>
              </fieldset>
              <div className="btn-wrap-s row">
              <div className="submit-btn-s row">
                <button type="submit">Submit</button>
              </div>
              </div>
           </form>
           </div>
       </section>
       <ToastContainer/> 
       </>
    )
}

export default SForm