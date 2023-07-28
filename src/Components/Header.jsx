import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = ()=>{
    return(
        <header className="navbar">
            <div className="content">
                <div className="navbar-list">
                    <ul className="lists">
                        <li className="list"><Link to="/">Home</Link></li>
                        <li className="list"><Link to="/menu" > Menu</Link></li>
                        <li className="list"><Link to="/about-us"> About</Link></li>
                        <li className="list"><Link to="contact-us">Contact</Link></li>
                    </ul>
                    
                </div>
                <div className="user-confirm">
                    <span className="details"><ShoppingBagOutlinedIcon /></span>
                    <p className="details"> Login</p>
                    <p className="details">SignUp</p>
                    
                </div>
            </div>
        </header>
    )
}

export default Header;