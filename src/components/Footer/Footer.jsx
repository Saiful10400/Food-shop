import footerModel from "../../../public/images/Image2.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#f99f1c] min-h-24 mt-6 lg:py-0 py-20 pb-10">
      <div className="lg:w-[1400px] lg:mx-auto flex justify-center items-center">
        <div className="lg:w-3/5 w-full ">


          <div className="  lg:pl-14  flex flex-col justify-center lg:items-start items-center">
            <form className="w-[90%]  relative">
              <input
                className="focus:outline-none w-full bg-[#f2f2f2]  py-3 lg:rounded-2xl rounded-xl lg:font-normal font-bold lg:text-base text-sm  pl-5"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="absolute right-1 lg:right-4 top-[6px] group lg:bg-[#fc6011] py-2 px-8 rounded-xl !flex justify-center items-center text-lg gap-1 text-[#fa7a38] lg:text-white font-semibold">
                Subscribe <HiArrowLongRight className="text-2xl group-hover:translate-x-2 duration-200" />
              </button>
            </form>
            <div className="flex  w-full justify-center lg:flex-row flex-col-reverse lg:gap-0 gap-y-9 items-center lg:items-end mt-14">
              <div className="w-full flex flex-col  justify-center items-center lg:items-start ">
                <h1 className="logo ">
                  pti<span className="text-[#fe5b3e]">.</span>
                </h1>
                <h1 className="text-lg ml-1 ">
                  Copyright&copy;Tripp.All Right Reserved
                </h1>
              </div>    
              <div className="w-full flex lg:justify-end justify-center items-center gap-2 ">
                <a href="#">
                  <FaGoogle className="text-[#ffefe7] lg:text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#fc6011] lg:bg-[#feddba]" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="text-[#ffefe7] lg:text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#fc6011] lg:bg-[#feddba]" />
                </a>
                <a href="#">
                  <AiOutlineInstagram className="text-[#ffefe7] lg:text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#fc6011] lg:bg-[#feddba]" />
                </a>
              </div>
            </div>
          </div>


        </div>
        <div className="w-2/5 lg:block hidden">
            <img className="w-3/4 mx-auto" src={footerModel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
