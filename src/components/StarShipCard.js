import  {GetAllStarShips}  from  './sw-api.js'

function StarShipCard(){

const {starShip} = GetAllStarShips('https://swapi.dev/api/starships/')

// if ({loading}) {

// return  <h1>   Page is still Loading.... </h1>};


return(
 <div className='container'>
   
   {starShip.map((result)=>{
   console.log(result.name) 
    return    <p className = 'list'> {result.name} </p> 
    
    } )}

 </div>

)

}

export default StarShipCard;