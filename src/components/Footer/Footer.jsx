import footerModel from "../../../public/images/Image2.png";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#f99f1c] min-h-24 mt-6 pb-10">
      <div className="w-[1400px] mx-auto flex justify-center items-center">
        <div className="w-3/5 ">
          <div className="  pl-14">
            <form className="w-[90%]  relative">
              <input
                className="focus:outline-none w-full bg-[#f2f2f2]  py-3 rounded-xl   pl-5"
                type="text"
                placeholder="Enter Your Email"
              />
              <button className="absolute right-4 top-[6px] group bg-[#fc6011] py-2 px-8 rounded-xl !flex justify-center items-center text-lg gap-1 text-white font-semibold">
                Subscribe <HiArrowLongRight className="text-2xl group-hover:translate-x-2 duration-200" />
              </button>
            </form>
            <div className="flex justify-center items-end mt-24">
              <div className="w-full">
                <h1 className="logo">
                  pti<span className="text-[#fe5b3e]">.</span>
                </h1>
                <h1 className="text-lg ml-3">
                  Copyright&copy;Tripp.All Right Reserved
                </h1>
              </div>    
              <div className="w-full flex justify-end items-center gap-2 ">
                <a href="#">
                  <FaGoogle className="text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#feddba]" />
                </a>
                <a href="#">
                  <AiOutlineTwitter className="text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#feddba]" />
                </a>
                <a href="#">
                  <AiOutlineInstagram className="text-[#fc6d23]  w-10 h-10 p-2 rounded-full bg-[#feddba]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
            <img className="w-3/4 mx-auto" src={footerModel} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
