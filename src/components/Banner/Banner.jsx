import bannerModel from "../../../public/images/Image1.png"

const Banner = () => {
    return (
        <div className="bg-[#f99f1c] flex justify-center items-center rounded-3xl">
            <div className="w-1/2 pl-36">
                <h1 className="text-white text-5xl">Deliver Food To Your <br/> Door Step|</h1>
                <h1 className="text-xl text-gray-200 font-normal mt-3">Authentic Food|,Quick Service,Fast Delivery</h1>
            </div>
            <div className="w-1/2">
                <img src={bannerModel} alt="" />
            </div>
        </div>
    );
};

export default Banner;