import React, { useEffect, useState } from "react"

import axios from 'axios';


export function GetAllStarShips(url) {

const [starShip , setStarShip] = useState([]);
//const [loading  , setLoading] = useState(true);

useEffect(() => {

async function fetchShip(){
   let  response = await axios.get(url);
   console.log(response)
   setStarShip(response.data.results)
   console.log(response.data.results)
}
fetchShip()
//setLoading(false);
},[url]);


  return (
       {starShip}
  )

  }
//export default GetAllStarships



// const UsingFetch = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
// 
//     </div>
//   )
// }

// export default UsingFetch