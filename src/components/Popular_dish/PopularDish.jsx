import { useContext } from "react";
import Carousel from "../../utility/Carousel";
import contextProvider from "../../context/appContext";


const PopularDish = () => {
    const{popularDish}=useContext(contextProvider)
    
    return (
        <Carousel items={popularDish} tittle={"Popular"}></Carousel>
    );
};

export default PopularDish;