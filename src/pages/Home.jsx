import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Nav_bar/Navbar";

const Home = () => {
    return (
        <>
        <div className="w-[1400px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;