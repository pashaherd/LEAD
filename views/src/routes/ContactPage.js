import {v4 as uuidv4} from 'uuid'; 
import {useState,useEffect} from 'react'; 
import {ToastContainer, toast} from 'react-toastify'
import React from 'react'

const ContactPage = () =>{
   const [data, setData] = useState([]);
   const [contactCodes, setContactCodes] = useState([])
   const [contactData, setContactData] = useState({
     fname:'',
     lname:'',
     email:'',
     phone:'',
     code:'',
     business:'',
     industry:''

   })
   
    useEffect(() =>{
       getData()
    },[])

    async function getData(){
      await fetch('/api/data')
      .then(res => res.json())
      .then((data) =>{
        setData(data["business"]); 

        let codes = Object.entries(data["codes"]); 
        setContactCodes(codes)
      })
      .catch(err => console.log(err))
    }

    function handleFormInput(e){
       const { name , value} = e.target; 

       setContactData({
        ...contactData, 
        [name]:value
       }); 
    }

    async function handleContactSubmit(e){
        e.preventDefault(); 

        await fetch('/', {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(contactData)
        })
        .then((res) => {
          if(res.status === 200){
            toast.success(`Thank You ${contactData.fname}, For Your Submission`,{
              position:'top-center'
            })
          } else {
            toast.error(`Sorry ${contactData.fname}, Something Went Wrong`,{
              position:'top-center'
            })
          }
        }).catch((err) => console.log(err));

        setContactData({
          fname:'',
          lname:'',
          email:'',
          phone:'',
          code:'',
          business:'',
          industry:''
        })
  }
    return (
        <>
        <div className="contact-wrap">
            <h1>Let Us Find You</h1>
            <form onSubmit={(e) => handleContactSubmit(e)} action="/" method="POST"> 
            <fieldset className="names">
                <div>
               <label htmlFor="fname">First Name
                    <input type="text"  name="fname" value={contactData.fname} onChange={(e) => handleFormInput(e)}
                    placeholder="Enter"id="fname"/>
                    </label>
               </div>
               <div>
               <label htmlFor="lname">Last Name
                  <input type="text" name="lname"id="lname" value={contactData.lname} onChange={(e) => handleFormInput(e)}
                   placeholder="Enter"/>
                   </label>
               </div>
               </fieldset> 
               <fieldset className="email">
                <div>
                    <label htmlFor="email">Email
                    <input type="text" name="email" id="email"  
                    value={contactData.email} onChange={(e) => handleFormInput(e)}
                    placeholder="Enter"/> 
                    </label> 
                </div>
               </fieldset>
               <fieldset className="phone">
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <span>
                    <select name="code" className="phone-codes" onChange={(e) => handleFormInput(e)} value={contactData.code} >
                      {contactCodes.map(data =>
                        <option>{`${data[0]} ${data[1]}`}</option>
                        )}
                    </select>
                       <input type="text" name="phone" id="phone" value={contactData.phone} onChange={(e) => handleFormInput(e)}
                        placeholder="Enter"/> 
                        </span>
                </div>
               </fieldset>
               <fieldset className="b-info">
                <div>
                    <label htmlFor="business-name">Business Name
                      <input type="text" placeholder="Enter" name="business" value={contactData.business} onChange={(e) => handleFormInput(e)} 
                      id="business-name"/> 
                    </label>
                </div>
                <div>
                  <label>Business Industry<select name="industry" value={contactData.industry} onChange={(e) => handleFormInput(e)}>
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
        <ToastContainer/> 
        </>
    )
}

export default ContactPage 