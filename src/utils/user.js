// import { ar } from "date-fns/locale";
// import react from "react";


// function moreCoins() {


//   const getCoins = async(userCoins) => {
  // let response = await fetch("https://coding-challenge-api.aerolab.co/user/points", params );

//     const headers = {
//       "Content Type": "application/json",
//       Authorization: "Bearer <token>"
//     }

//     const parameters = {
//       body: { amount: amountCoins},
//       method: "post",
//       mode: "cors"
//     }

//     try {
//       let response=await fetch();
//       if(response.status!==200)
//         throw new Error("Invalid Response");

//       response=await response.json();
//       alert(`Added ${response["New Points"]} coins`)
//     } catch {
//       console.log(error);
//       alert("Lo sentimos, la operación no pudo realizarse");
//     }
//   } 
// }

// /* volver a traer el usuario luego de agreagar monedas */


// gets, hay que pasarle el objeto headers, encerrarlo en un objeto

// para los metodos post

async function traer() {
const params = {
method: "post",
mode: "cors",
headers: "algo de headers",
body: JSON. stringify({amount: "tantos"}) // ESTO SOLUCIONA EL PROBLEMA DE LOS POST
}
let url="";
let resp = await fetch(url, params)

}


// hacer una clase y tener metodos abstractos que poder usar