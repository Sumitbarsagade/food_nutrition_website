import React, { useEffect } from 'react'
import styled from 'styled-components'
import './responsive.css'
export default function Hero({apirun,food, setfood}) {
    
  
    const infood = food;
  const getDetails = () => {
      
        
        apirun(food);
        

      
      
    }
    

    const handleChangeInput = (e) => {
        console.log("value", e.target.value)
        setfood(e.target.value)
    }
    


  return (
      <>
      <Boxx className="container-fluid boxcon" >

        
<p className='text-center  heroText'>Search your receipe nutrition</p>

<div className="container-fluid main-hero-container">



<div className="search container-fluid">
  <form className="d-flex"  role="search" >
    
    
              <input type="text" value={infood} onChange={handleChangeInput} className="inputbtn"  />
              <button onClick={ getDetails} type="button"  className="btn btn-alert"><i className="fa-solid fa-magnifying-glass"></i></button>
  </form>
</div>

   </div>


<div className="text-center info">
          <p>Your {food} Nutrition</p>
</div>
</Boxx> 
     
      
      </>
  )
}


const Boxx = styled.div`
  
  
  border:2px solid white;
  background-color: rgba(30, 70, 165,0.5);
  border-radius:20px;
  


.main-hero-container{
 
  padding:20px 10px 10px 20px;
  
}

.heroText{
  font-size:20px;
  color: white;
}


.info{
  width:100%;
  max-height:40%;
  font-size:20px;
  color: white;
  text-transform:capitalize;
}


// search start

.search{
  width: 100%;
 
}

.search input{
border: 0;
outline: none;
background: #ebfffc;
color: #555;
padding: 10px 25px;
height: 60px;
border-radius: 30px;
flex: 1;
margin-right: 16px;
font-size: 18px;
}


.search button{
border: 0;
outline: none;
background: #ebfffc;
border-radius: 50%;
width: 60px;
height: 60px;
cursor: pointer;
}

.search img{
  width: 20px;
  
}


`