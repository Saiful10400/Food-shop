import PropTypes from "prop-types";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const Carousel = ({ items,tittle }) => {


    const container=document.getElementById(`${tittle}carocontainer`)
   container?.addEventListener("click",()=>{
    console.log(container.scrollLeft)
   })


// carousel forward handle.
const carouselForwardHandle=()=>{
    container.scrollLeft=container.scrollLeft + container.clientWidth
  
}

// carousel backward handle.
const carouselBackwardHandle=()=>{
    container.scrollLeft=container.scrollLeft - container.clientWidth 
}



  return (
    <div className=" mt-6 ">

        <div className="flex justify-between mb-3">
            <h1 className="text-2xl font-normal">{tittle}</h1>
            <div className="flex items-center gap-x-2"><button className="text-[#fc6011] text-lg mb-2">AddMore</button> 
            
            <span className="text-3xl"><button onClick={carouselBackwardHandle}><IoIosArrowBack />
            </button> <button onClick={carouselForwardHandle}><IoIosArrowForward /></button></span>
            </div>
        </div>
      

      <div id={`${tittle}carocontainer`} className="flex  px-2 justify-start gap-x-5  overflow-x-hidden  scroll-smooth">
      {items?.map(item=>{
        return(
            <div className="  min-w-[260px] max-w-[260px] h-[350px]" key={item.Id}>
                <img className="rounded-xl shadow-slate-950 shadow-md w-full h-[90%] object-cover" src={item.ImageUrl} alt={item.Name} />
                <h1 className="text-center mt-1 text-lg">{item.Name}</h1>
            </div>
        )
      })}
      </div>


    </div>
  );
};



// props validation.
Carousel.propTypes = {
  items: PropTypes.array,
  tittle: PropTypes.string,
  
};

export default Carousel;
