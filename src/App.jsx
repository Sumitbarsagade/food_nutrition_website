import Navbar from "./Navbar"
import { useState } from "react";
import Hero from "./Hero";
import Nutritable from "./Nutritable";
import Foot from "./Foot";

function App() {

  
  const [food, setfood] = useState("honey and grapes");
  const [data, setdata] = useState([]);



  const apirun = async (getfood) => {
    const options = {
      headers: {
          'X-Api-Key': 'ooBpx4JlvEqL22l0X0RMcA==PcWT3swUheTOfuYh'
        }
  }
   
     try {
      let run = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${getfood}`, options);
    let parsedData = await run.json();
       console.log("parsedData is  :" + parsedData)
       
        setdata(parsedData);
       
       
      
     } catch (error) {
      console.log(error)
     }
     

  }
 
  

 
  

  return (
    <>
    <Navbar/>
      <Hero apirun={apirun} food={food}  setfood={setfood} />
      <Nutritable data={data} /> 
      <Foot/>
    </>
  )
}



export default App
