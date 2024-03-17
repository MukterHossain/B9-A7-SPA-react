


const ViewCard = () => {
    return (
        <div>

            <div>
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
                <div className='card-info'>
                  <p>{index+1}</p>
                  <p>{item.recipe_name.slice(0, 10)}</p>
                  <p>{item.preparing_time} minute</p>
                  <p>{item.Calories}</p>
                  <button  onClick={() => handleCook(index)} onClick={()=>handleDelete(item.recipe_id)}>Preparing</button>
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
                <div className='card-info-bottom'>
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
    );
};

export default ViewCard;