import React from 'react'
import "./styles.css"

import {Link}  from 'react-router-dom'
  const  Head =()=>{

    return (<>
 <div className="Main-head">
           <div className="logo-div"> <img className="img-logo" src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg" /> </div>
                <div> 
                
               <Link to='/home'><button className="btn-home"> Home</button></Link>
               <Link to ='/About'><button className="btn-Creator"> About</button></Link>  </div>
               
                 
               </div>
               

</>
              
      
            
            
    )
}
export default Head;