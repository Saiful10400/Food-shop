import bannerModel from "../../../public/images/Image1.png"

const Banner = () => {
    return (
        <div className="lg:bg-[#f99f1c] mx-2 lg:mx-0 flex gap-y-24  flex-col lg:flex-row justify-center items-center lg:rounded-3xl">
            <div className="lg:w-1/2 lg:pl-36">
                <h1 className="lg:text-white lg:text-start text-center lg:font-semibold font-bold lg:text-5xl">Deliver Food To Your  Door Step|</h1>
                <h1 className="lg:text-xl text-lg font-semibold text-gray-500 lg:text-start text-center lg:text-gray-200 lg:font-normal mt-3">Authentic Food|,Quick Service,Fast Delivery</h1>
            </div> 
            <div className="lg:w-1/2 bg-[#fd9460] mx-7 h-[190px] flex justify-center items-end  w-full  lg:h-auto lg:bg-transparent rounded-3xl lg:rounded-none">
                <img className="lg:static relative  lg:w-auto w-[400px]" src={bannerModel} alt="" />
            </div>
        </div>
    );
};

export default Banner;