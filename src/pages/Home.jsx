import Banner from "../components/Banner/Banner";
import Navbar from "../components/Nav_bar/Navbar";

const Home = () => {
    return (
        <div className="w-[1400px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;