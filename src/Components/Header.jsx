import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = ()=>{
    return(
        <header className="navbar">
            <div className="content">
                <div className="navbar-list">
                    <ul className="lists">
                        <li className="list"><Link to="/" className="text-[60%] sm:text-base md:text-xl lg:text-2xl">Home</Link></li>
                        <li className="list"><Link to="/menu" className="text-[60%] sm:text-base md:text-xl lg:text-2xl"> Menu</Link></li>
                        <li className="list"><Link to="/about-us" className="text-[60%] sm:text-base md:text-xl lg:text-2xl"> About</Link></li>
                        <li className="list"><Link to="/contact-us" className="text-[60%] sm:text-base md:text-xl lg:text-2xl">Contact</Link></li>
                    </ul>
                    
                </div>
                <div className="user-confirm ">
                    <span className="details" ><Link to="/add-to-cart" className="text-[60%] sm:text-base md:text-xl lg:text-2xl" ><ShoppingBagOutlinedIcon /></Link></span>
                    <p className="details text-[60%] sm:text-base md:text-xl lg:text-2xl"> Login</p>
                    <p className="details text-[60%] sm:text-base md:text-xl lg:text-2xl">SignUp</p>
                    
                </div>

            </div>

        </header>
    )
}

export default Header;