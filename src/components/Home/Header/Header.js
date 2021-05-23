import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"

const Header = () => {

    return (
        <header className="w-screen bg-green-500">
            <Navbar />
            <Hero />
        </header>
    );
};

export default Header;