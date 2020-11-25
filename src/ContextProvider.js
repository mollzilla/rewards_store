import React, { useEffect, useState } from "react";

export const AppContext = React.createContext({});

export default function AppProvider({ children }) {

    const[userData, setUserData] = useState({});
    const[productsData, setProductsData] = useState([]);
    const[loading, setLoading] = useState(false);
  
    async function fetchUserData() {

        setLoading(true)

        try {
          let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I",
          };
      
          let resp = await fetch("https://coding-challenge-api.aerolab.co/user/me", { headers });
          let fetchedUserData=await resp.json();
          setUserData(fetchedUserData);
          setLoading(false)
          return userData;
        } catch (error) {
          console.log(error)
        }      
      }

      async function fetchProductsData() {

        setLoading(true)
        try {
          let headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk"//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFjMjQ0OWI5NTIzZTAwMjA3ZTFmYzMiLCJpYXQiOjE2MDUxMTcwMDF9.vHMYlEKnpSVDSejVVyittmqUhIQ9pbD2U5CvqwQYJ4I",
          };
      
          let resp = await fetch("https://coding-challenge-api.aerolab.co/products", { headers });
          let fetchedProductsData=await resp.json();
          setProductsData(fetchedProductsData);
          setLoading(false)
          return userData;
        } catch (error) {
          console.log(error)
        }
      }



      useEffect(() => {setUserData(fetchUserData()); setProductsData(fetchProductsData())}, [])

  return (
    <AppContext.Provider value={{loading, userData, productsData}}>
      {children}
    </AppContext.Provider>
  );
}


