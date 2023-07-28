import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import AboutUs from "../Pages/AboutUs";
// import Cart from "../Pages/Cart";
import Contact from "../Pages/Contact";
import Header from "./Header";

const Navbar = ()=>{
    return(
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Navbar;