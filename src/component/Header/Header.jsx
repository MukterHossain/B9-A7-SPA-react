
import { FaRegUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import backgroundImage from '../../assets/image/banner.png';


const Header = () => {
    return (
        <div className="mt-10">
            <nav>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[16px] text-[#150b2b">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                    </div>
                    <a className="text-[20px] md:text-3xl lg:text-3xl text-[#150b2b] font-bold">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] text-[#150b2b">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex justify-around items-center gap-x-2 bg-[#e6e6eb] py-2 pl-3 rounded-3xl mr-3">
                        <span className="text-xl"><CiSearch></CiSearch></span>
                        <input className="outline-none bg-transparent" type="text" name="" id="" placeholder="Search"/>
                    </div>
                    <h2 className="text-2xl bg-[#0be58a] opacity-70 p-2 rounded-full"> <FaRegUserCircle></FaRegUserCircle></h2>
                </div>
                </div>
            </nav>


            {/* url('image_path') */}
            {/* url('../src/assets/image/banner.png') */}
            {/* `url(../src/assets/image/banner.png)` */}

            {/* banner section */}

         <div className="mt-10">
            <div style={{ 
           backgroundImage: `url(${backgroundImage})` 
          }} className="bg-cover bg-center  bg-no-repeat rounded-2xl">
                <div className="text-center py-40 w-full px-4 lg:w-4/6 md:w-5/6 m-auto">
                    <div className=" ">
                        <h1 className="text-5xl font-bold text-white ">Discover an exceptional cooking  class tailored for you!</h1>
                        <p  className="text-[16px] text-white py-10" >Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                    </div>
                    <div className="">
                        <button className="bg-[#0be58a] text-[#150b2b] py-4 px-6 text-xl font-semibold rounded-full mr-4 mb-5">Explore Now</button>
                        <button className=" border-2 border-white py-[14px] px-[22px] text-xl font-semibold text-white rounded-full" >Our Feedback</button>
                    </div>
                </div>
            </div>

            </div>
            
      
        </div>
    );
};

export default Header;