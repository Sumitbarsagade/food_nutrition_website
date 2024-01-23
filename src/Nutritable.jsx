import React from 'react'
import styled from 'styled-components'
import './responsive.css'








// console.log("Objects  :"+ p)
export default function Nutritable({ DataObj ,data}) {
    var arrays={};
    var array = { "items": [{ "name": "honey", "calories": 302.9, "serving_size_g": 100.0, "fat_total_g": 0.0, "fat_saturated_g": 0.0, "protein_g": 0.3, "sodium_mg": 3, "potassium_mg": 3, "cholesterol_mg": 0, "carbohydrates_total_g": 83.0, "fiber_g": 0.2, "sugar_g": 82.6 }, { "name": "grapes", "calories": 69.6, "serving_size_g": 100.0, "fat_total_g": 0.2, "fat_saturated_g": 0.1, "protein_g": 0.7, "sodium_mg": 2, "potassium_mg": 20, "cholesterol_mg": 0, "carbohydrates_total_g": 18.1, "fiber_g": 0.9, "sugar_g": 15.5 }] };

    
    if (Object.keys(data).length > 0) {
        array = data;
    }
   

    
    var p = Object.keys(array.items[0])
    
    
var t = [];
for (let i = 0; i < array.items.length; i++) {
    t.push(Object.values(array.items[i]));
}

var j=[];

for(let p=0; p<11; p++){
    let sum=0;
    for(let i=0; i<t.length; i++){
        sum += t[i][p+1];
        
    }
    
     j.push(sum);
     
     
}







  return (
      <>
          <div className="tableCon table-responsive">
              
          <Table className="container-fluid tableele table-responsive ">
              <table className="table "  >
                  <thead>
                      
                  <tr className='table-primary '>
                      {   
                          p.map((value,i) =>(
                            <th  key={i} scope="col">{value}</th>
                          ))
                          
                          }
                          
                          </tr>
                      {/* <tr>
                          

                          <th scope="col">Name</th>
                          <th scope="col">Serving Size</th>
                          <th scope="col">Calories</th>
                          <th scope="col">Total Fat</th>
                          <th scope="col">Saturated Fat</th>
                          <th scope="col">Cholesterol</th>
                          <th scope="col">Sodium</th>
                          <th scope="col">Carbohydrates</th>
                          <th scope="col">fiber</th>
                          <th scope="col">Sugar</th>
                          <th scope="col">Protein</th>

                          
    </tr> */}
  </thead>
                  <tbody>

                      <tr>
                      <th scope="row">Total</th>
                          {
                              j.map((value,i) =>(
                                  <td key={i}>{value}</td>
                              )) 
                          }
                          
                          
                          
                          {/* <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td> */}
                          
      
                      </tr>
                      

                      {
                          t.map((value, p) => (
                            <tr>
                                  <th scope="row">{t[p][0]}</th>
                                  <td>{t[p][1]}</td>
                                  <td>{t[p][2]}</td>
                                  <td>{t[p][3]}</td>
                                  <td>{t[p][4]}</td>
                                  <td>{t[p][5]}</td>
                                  <td>{t[p][6]}</td>
                                  <td>{t[p][7]}</td>
                                  <td>{t[p][8]}</td>
                                  <td>{t[p][9]}</td>
                                  <td>{t[p][10]}</td>
                                  <td>{t[p][11]}</td>
                                  
                          </tr>
                              
                         )) 
                        
                          
                      }
                         
                        


    {/* <tr>
      <th scope="row">prime rib</th>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
    </tr>
    <tr>
      <th scope="row">mashed potaotes</th>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
                          <td>Mark</td>
    </tr> */}
  </tbody>
      </table>
      </Table>

          </div>
      
      
      
      </>
  )
}

const Table = styled.div`
 
 
 margin:30px auto auto;
  

  .table{

     width:70%;
     margin:30px auto auto;
  }
 



`
