import { useContext } from "react";
import contextProvider from "../../context/appContext";
import Carousel from "../../utility/Carousel";


const RecomendedDish = () => {
    const{recommendedDish}=useContext(contextProvider)
    return (
        <Carousel items={recommendedDish} tittle={"Recommended"}></Carousel>
    );
};

export default RecomendedDish;