
import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Recipe from './component/Recipe/Recipe' 
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [foods, setFood] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [cook, setCook] = useState([]);

  useEffect(() =>{
    fetch("./recipeData.json")
    .then(res => res.json())
    .then(data => setFood(data))
  }, [])
  // console.log(typeof foods)
  const handleCard = (card) =>{
    const isExist = cardData.find(cards=>cards.recipe_id == card.recipe_id)
    if(!isExist){
      setCardData([...cardData, card])
    }
    else{
      toast("Already it exist");
    }
  }
   const handleCook = (item1) =>{
    const newCook = cook.filter(items =>items.recipe_id !=item1);
    setCook(newCook)
   }
  //  console.log(cook)
  const handleDelete = (id)=>{
     const newCard = cardData.filter(item =>item.recipe_id !=id);
     setCardData(newCard)
  }



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
  <div className="flex justify-between my-10 gap-5">
    <div id='recipe-container' className='w-3/5 '>
        <div  className='grid lg:grid-cols-2 gap-6'>
            {
                foods.map((food, recipe_id) =>(
                <Recipe key={recipe_id} handleCook={handleCook} handleCard={handleCard} food={food}></Recipe>
                ))
            }
        </div>
    </div>

       {/* View section */}
       <div className="w-2/5  border-gray-200 shadow-gray-300 shadow-xl  border-2 p-5 rounded-2xl">
          <div className="">
              <h1 className="text-2xl text-[#282828] text-center font-semibold pb-2">Want to cook: {0}</h1>
          </div>
          <hr />
          <div className=" flex justify-around p-2 ">
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Name</h3>
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Time</h3>
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Calories</h3>
          </div>
          <div>
            {
              cardData.map((item, index) =>(
                <div key={item.recipe_id} className='card-info'>
                  <p>{index+1}</p>
                  <p>{item.recipe_name.slice(0, 10)}</p>
                  <p>{item.preparing_time} minute</p>
                  <p>{item.Calories}</p>
                  <button key={item.recipe_id}  onClick={()=>handleDelete(item.recipe_id)}>Preparing</button>
                  <ToastContainer></ToastContainer>
                </div>
              ))
            }
          </div>

          {/* Card bottom */}
          <div>
          <div className="mt-10">
              <h1 className="text-2xl text-[#282828] text-center font-semibold pb-2">Currently cooking:{0}</h1>
          </div>
          <hr />
          <div className=" flex justify-around p-2 ">
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Name</h3>
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Time</h3>
            <h3 className="text-[16px] text-[#282828] font-medium opacity-70">Calories</h3>
          </div>
          <div>
            {
              cook.map((items, index) =>(
                <div key={items.recipe_id} className='card-info-bottom'>
                  <p>{index+1}</p>
                  <p>{items.recipe_name.slice(0, 10)}</p>
                  <p>{items.preparing_time} minute</p>
                  <p>{items.Calories}</p>
                </div>
              ))
            }
          </div>
              <div className='  flex justify-end items-center mt-10'>              
                <li className='w-2/3'><span>Total Time = 45 minutes</span> <br /><span className='pl-5'>Total Calories = 1050 calories</span></li>
              </div>
          </div>
        </div>
    </div>  





</div>

      

    </>
  )
}

export default App
