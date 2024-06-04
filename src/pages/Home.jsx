import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav_bar/Navbar";
import PopularDish from "../components/Popular_dish/PopularDish";
import RecomendedDish from "../components/Recomended_dis/RecomendedDish";

const Home = () => {
    return (
        <>
        <div className="lg:w-[1400px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <PopularDish></PopularDish> */}
            {/* <RecomendedDish></RecomendedDish> */}
        </div>
        {/* <Footer></Footer> */}
        </>
    );
};

export default Home;