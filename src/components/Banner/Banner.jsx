import bannerModel from "../../../public/images/Image1.png"

const Banner = () => {
    return (
        <div className="bg-[#f99f1c] flex flex-col lg:flex-row justify-center items-center rounded-3xl">
            <div className="lg:w-1/2 lg:pl-36">
                <h1 className="text-white lg:text-start text-center text-5xl">Deliver Food To Your <br/> Door Step|</h1>
                <h1 className="text-xl lg:text-start text-center text-gray-200 font-normal mt-3">Authentic Food|,Quick Service,Fast Delivery</h1>
            </div>
            <div className="lg:w-1/2">
                <img src={bannerModel} alt="" />
            </div>
        </div>
    );
};

export default Banner;