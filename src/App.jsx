
import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Recipe from './component/Recipe/Recipe' 


function App() {

  const [foods, setFood] = useState([]);

  useEffect(() =>{
    fetch("./recipeData.json")
    .then(res => res.json())
    .then(data => setFood(data))
  }, [])
  // console.log(typeof foods)


  return (
    <>

<div className='w-11/12 m-auto'>




      
      <Header></Header>

    <div>
      <div className="mt-32">
          <div className="w-full px-4 lg:w-4/6 md:w-5/6 mx-auto">
               <h1 className="text-4xl text-[#150b2b] font-semibold text-center">Our Recipes</h1>
               <p className="text-[16px] text-[#150b2b] py-4 text-center">We provide all category of famous and delicious food. We have won garden where grow organic food that provide you. We provide food offline and online. You can look our some service below. </p>
           </div>
      </div> 
  </div >

<div className="flex justify-between">
      <div id='recipe-container' className='w-3/5 my-10'>
        <div  className='grid lg:grid-cols-2 gap-6'>
            {
                foods.map((food, recipe_id) =>(
                <Recipe key={recipe_id} food={food}></Recipe>
                ))
            }
        </div>

      </div>

       {/* View section */}
       <div className="w-2/5">
          <div className=" border-gray-200 shadow-gray-300 shadow-xl  border-2 p-5 rounded-2xl">
              <h1>view section</h1>
          </div>
        </div>
    </div>  





</div>

      

    </>
  )
}

export default App
