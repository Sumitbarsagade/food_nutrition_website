

const obj={"items": [{"name": "milk", "calories": 51.3, "serving_size_g": 100.0, "fat_total_g": 1.9, "fat_saturated_g": 1.2, "protein_g": 3.5, "sodium_mg": 52, "potassium_mg": 100, "cholesterol_mg": 8, "carbohydrates_total_g": 4.9, "fiber_g": 0.0, "sugar_g": 0.0}]}









const array2 = { "items": [{ "name": "honey", "calories": 302.9, "serving_size_g": 100.0, "fat_total_g": 0.0, "fat_saturated_g": 0.0, "protein_g": 0.3, "sodium_mg": 3, "potassium_mg": 3, "cholesterol_mg": 0, "carbohydrates_total_g": 83.0, "fiber_g": 0.2, "sugar_g": 82.6 }, { "name": "grapes", "calories": 69.6, "serving_size_g": 100.0, "fat_total_g": 0.2, "fat_saturated_g": 0.1, "protein_g": 0.7, "sodium_mg": 2, "potassium_mg": 20, "cholesterol_mg": 0, "carbohydrates_total_g": 18.1, "fiber_g": 0.9, "sugar_g": 15.5 }] };
var p = Object.keys(array2.items[0])

console.log(p)
var t = [];
for (let i = 0; i < array2.items.length; i++) {
    t.push(Object.values(array2.items[i]));
}




// for (let i = 1; i < 11; i++){
//     let sum = 0;
//     for (let j = 0; j < t.length; j++){
        
//         sum += t[j][i];
//         j.push(sum)
//     }
// }



console.log("total values array:")
console.log(t)
console.log(j)
console.log(p)

const giveData = () => {

    var array =  data;
    console.log("data :"+data);
    if(Object.keys(data).length>0){
    console.log("Object Data keys length: " + Object.keys(data).length);
    var headers =  Object.keys(array.items[0])
    
   var headval = [];
   for (let i = 0; i < array.items.length; i++) {
    headval.push(Object.values(array.items[i]));
      }

    var totalsumarray=[];

   for(let f=0; f<11; f++){
      let sum=0;
      for(let i=0; i<headval.length; i++){
        sum += headval[i][f+1];
        
     }
    
      totalsumarray.push(sum);
     
    }

    settotalvalue(totalsumarray);
    setheadernames(headers);
    setheadervalues(headval);
   
    }
    

  }