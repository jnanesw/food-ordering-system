import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = ()=>{
    return(
        <header className="navbar bg-black opacity-80">
            <div className="content">
                <div className="navbar-list">
                    <ul className="lists">
                        <li className="list"><Link to="/" className="mt-1 md:mt-0 text-[60%] sm:text-base md:text-xl lg:text-2xl">Home</Link></li>
                        <li className="list"><Link to="/menu" className="mt-1 md:mt-0 text-[60%] sm:text-base md:text-xl lg:text-2xl"> Menu</Link></li>
                        <li className="list"><Link to="/about-us" className="mt-1 md:mt-0 text-[60%] sm:text-base md:text-xl lg:text-2xl"> About</Link></li>
                        <li className="list"><Link to="/contact-us" className="mt-1 md:mt-0 text-[60%] sm:text-base md:text-xl lg:text-2xl">Contact</Link></li>
                    </ul>
                </div>
                <div className="user-confirm">
                    <span className="details sm:mt-1 md:mt-1 lg:mt-0 h-7 lg:h-8" ><Link to="/add-to-cart" className="text-[60%] sm:text-base md:text-xl lg:text-2xl"><ShoppingBagOutlinedIcon /></Link></span>
                    <p className="details mt-2 md:mt-1 sm:mr-[14%] list text-[60%] sm:text-base md:text-xl lg:text-xl"> Login</p>
                    <p className="details mt-2 md:mt-1 list text-[60%] sm:text-base md:text-xl lg:text-xl">SignUp</p>
                    
                </div>

            </div>

        </header>
    )
}

export default Header;