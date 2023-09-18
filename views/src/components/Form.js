
import leadwhite from './assets/lead-white.png'
import {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v4 as uuidv4} from 'uuid'
import React from 'react'


const Form = () =>{
  const [data, setData] = useState([]);
  const [phone, setPhoneData] = useState([]); 
  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    email:'',
    code:'',
    phone:'',
    business:'',
    industry:''
  })
  
  useEffect(() =>{
     getData()
    
  },[])

  async function getData(){
    await fetch('/api/data')
    .then(res => res.json())
    .then((data) => {
      setData(data["business"])
      
      let phoneData = Object.entries(data["codes"]); 
     setPhoneData(phoneData); 
    })
    .catch(err => console.log(err))
  } 
  
  function handleInputChange(e){
    const { name , value} = e.target; 
    
    setFormData({
      ...formData, 
      [name]:value
    }); 
  }

  async function handleFormSubmit(e){
      e.preventDefault(); 

      await fetch('/', {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      }).then((res) =>{
        if(res.status === 200){
          toast.success(`Thank You ${formData.fname}, For Your Submission`, {
            position:'top-center'
          })
        } else{
          toast.error(`Sorry ${formData.fname}, Something Went Wrong`,{
            position:'top-center'
          })
        }
      }).catch((err) => console.log(err))
      
      setFormData({
        fname:'',
        lname:'',
        email:'',
        code:'',
        phone:'',
        business:'',
        industry:''
      })
  }
  
    return(
      <>
        <div className="wrap-f">
            <div className="title-f">
            <h1>Free Consultation</h1>
            </div> 
            <div className="cover-f">
              <h2>The Next Step</h2>
            <div>
              <span>
                <p>The Best Time To Plant A Tree Was 20 Years Ago, Next Best Time is Now</p>
                <img src={leadwhite} alt="" id="leadwhite"/> 
              </span>
            <form onSubmit={(e) => handleFormSubmit(e)} action="/" method="POST"> 
            <fieldset className="names">
                <div>
               <label htmlFor="fname">First Name
                    <input type="text" required  name="fname" value={formData.fname} onChange={(e) => handleInputChange(e)}
                    placeholder="Enter"id="fname"/>
               </label>
               </div>
               <div>
               <label htmlFor="lname">Last Name
                  <input type="text" required name="lname" id="lname" value={formData.lname} onChange={(e) => handleInputChange(e)} 
                  placeholder="Enter"/>  
               </label>
               </div>
               </fieldset> 
               <fieldset className="email">
                <div>
                    <label htmlFor="email">Email
                    <input type="text" required name="email" id="email" value={formData.email} onChange={(e) => handleInputChange(e)}
                    placeholder="Enter"/> 
                    </label> 
                </div>
               </fieldset>
               <fieldset className="phone">
                <div>
                    <label htmlFor="phone">Phone Number
                       <p>Country Code Included</p>
                       <select name="code" value={formData.code} onChange={(e) => handleInputChange(e)} className="phone-codes">
                         {phone.map(code =>
                           <option>{`${code[0]} ${code[1]}`}</option>
                         )}
                       </select>
                       <input type="text" required name="phone" id="phone" value={formData.phone} onChange={(e) => handleInputChange(e)}
                        placeholder="Enter"/> 
                    </label>
                </div>
               </fieldset>
               <fieldset className="b-info">
                <div>
                    <label htmlFor="business-name">Business Name
                      <input type="text" placeholder="Enter" name="business" value={formData.business} onChange={(e) => handleInputChange(e)}
                      id="business-name"/> 
                    </label>
                </div>
                <div>
                  <label>Business Industry<select name="industry" value={formData.industry} onChange={(e) => handleInputChange(e)}>
                       {data.map(d => 
                        <option key={uuidv4()} >{d}</option>
                        )}   
                   </select></label> 
                </div>
               </fieldset>
               <div className="btn-f">
                  <button type="submit">Submit</button>
               </div>
            </form>
            </div>  
        </div>
        </div> 
        <ToastContainer/>
        </>
    )
}

export default Form