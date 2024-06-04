import { BiUser } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {

    const[menuActive,setMenuActive]=useState(false)
    // handle menu button evetns.
    const handleMenu=()=>{
        setMenuActive(prev=>!prev)
    }
  return (
    <div className="flex lg:justify-between justify-center gap-x-9 items-center py-2 lg:py-3 lg:border-none border-b-2">
      <h1 className="logo lg:text-3xl text-2xl">pti.</h1>
      <div className="lg:w-[60%]   d-flex justify-content-between align-items-center gap-x-5">
        <div className="w-[80%] position-relative">
          <input
            placeholder="Search Audiobook"
            className=" py-2 pl-7 lg:pl-11 lg:text-xl text-sm w-40  lg:w-full focus:outline-none rounded-lg "
            type="text"
          />
          <IoSearch className="text-[#fe8f7b] text-sm lg:text-xl position-absolute top-1/4 left-2" />
        </div>


        <div className="lg:w-[20%] relative">
        <button onClick={handleMenu} className="w-full btn btn-light font-bold ">
          <span className="flex items-center justify-center gap-x-1 lg:gap-x-16">
            <span className="lg:font-semibold font-medium text-sm lg:text-xl">MENU</span>{" "}
            <IoIosArrowDown className={`text-[#fd9d6d] duration-200 text-lg lg:text-2xl ${menuActive?"-rotate-180":""}`} />
          </span>{" "}
        </button>
        <ul className={`absolute bg-white w-full rounded-lg top-11 overflow-hidden p-0  duration-200 ${menuActive?" max-h-96 py-1 lg:py-3":"max-h-0"} `}>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">Home</li>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">Details</li>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">Category</li>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">My Favorites</li>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">Profile</li>
           <li className="lg:pl-3 pl-1 hover:text-[#f9712d] duration-200 py-1 lg:text-base text-xs lg:font-normal cursor-pointer hover:bg-[#e7e9ec]">Log In/Sign Up</li>
        </ul>
        </div>


      </div>
      <div className="bg-[#fd6417] hidden  cursor-pointer text-white h-[50px] w-[50px] lg:flex justify-center items-center rounded-full text-3xl">
        <BiUser />
      </div>
    </div>
  );
};

export default Navbar;
