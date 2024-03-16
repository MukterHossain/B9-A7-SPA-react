
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';


const Recipe = ({food}) => {
    const {recipe_image, recipe_name, preparing_time, short_description, ingredients,Calories} = food;
    console.log(typeof food)
    return (
        <div className="">
            
            {/* Dynamic section */}
                          
                        <div className=" border-gray-200 shadow-gray-300 shadow-xl  border-2 p-5 rounded-2xl">
                            <div>
                            <img className="rounded-2xl w-full" src={recipe_image} alt="" />
                            <h1 className="text-xl text-[#282828] font-semibold py-6">{recipe_name}</h1>
                            <p className="text-[16px] text-[#878787] pb-4">{short_description.slice(0, 60)}</p>
                            </div>
                            <hr />

                            <div className="py-4">
                                <h4  className="text-[18px] text-[#282828] font-semibold py-2">Ingredients: 6</h4>
                                <li>{ingredients}</li>
                            </div>
                            <hr />

                            <div className="flex justify-between items-center py-4">
                                <div className="flex justify-between items-center gap-2">
                                    <span><BsStopwatch></BsStopwatch></span>
                                    <p>{preparing_time} minutes</p>
                                </div>
                                <div className="flex justify-between items-center gap-2">
                                    <span><AiOutlineFire></AiOutlineFire></span>
                                    <p> {Calories}</p>
                                </div>                               
                            </div>
                            <button className="bg-[#0be58a] rounded-full py-2 mb-3 px-5 text-[18px] font-semibold text-[#150b2b]">Want to Cook</button>
                        </div>                        
            
        </div>
    );
};


Recipe.propTypes = {
    food: PropTypes.array,
    readingTime: PropTypes.number
}


export default Recipe;