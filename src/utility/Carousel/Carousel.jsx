import PropTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./carousel.css"
import Popup from "../Popup/Popup";
import { useContext } from "react";
import contextProvider from "../../context/appContext";
const Carousel = ({ items, tittle }) => {
  const container = document.getElementById(`${tittle}carocontainer`);
  container?.addEventListener("click", () => {
    console.log(container.scrollLeft);
  });

  // carousel forward handle.
  const carouselForwardHandle = () => {
    container.scrollLeft = container.scrollLeft + container.clientWidth;
  };

  // carousel backward handle.
  const carouselBackwardHandle = () => {
    container.scrollLeft = container.scrollLeft - container.clientWidth;
  };

  // modal Status handle.
  const{setModalOpen}=useContext(contextProvider)
  const HandleModal=()=>{
    setModalOpen(true)
  }

  return (
    <div className=" pl-2 lg:pl-0">
      <div className="flex justify-between mb-3">
        <h1 className="lg:text-2xl text-lg font-bold lg:font-normal">{tittle}</h1>
        <div className="flex items-center gap-x-2">
          <button onClick={HandleModal} className="text-[#fc6011] lg:inline-block hidden text-lg mb-2">AddMore</button>

          <span className="text-3xl">
            <button className="lg:inline-block hidden" onClick={carouselBackwardHandle}>
              <IoIosArrowBack />
            </button>{" "}
            <button onClick={carouselForwardHandle}>
              <IoIosArrowForward />
            </button>
          </span>
        </div>
      </div>

      <div
        id={`${tittle}carocontainer`}
        className="flex lg:px-2 justify-start gap-3 lg:gap-x-5  lg:overflow-x-hidden overflow-x-scroll hideScrollbar scroll-smooth"
      >
        {items?.map((item) => {
          return (
            <div
              className="  lg:min-w-[260px] lg:max-w-[260px] min-w-[130px] max-w-[130px] h-[200px]"
              key={item.Id}
            >
              <img
                className="rounded-xl shadow-slate-950 shadow-md w-full h-[85%] object-cover"
                src={item.ImageUrl}
                alt={item.Name}
              />
              <h1 className="text-center mt-1 text-sm lg:text-lg">
                {item.Name}
              </h1>
            </div>
          );
        })}
      </div>

<Popup></Popup>

    </div>
  );
};

// props validation.
Carousel.propTypes = {
  items: PropTypes.array,
  tittle: PropTypes.string,
};

export default Carousel;
