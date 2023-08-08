
import spicy5 from "../assets/spicy5.png"

const Quote = ({quote})=>{
    if(!quote){
        return;
    }
    return(
        <div className="quote-img">
            <span className="quote font-bungee">  
                <p>it's not just</p>
                <p>Food, it's an</p>
                <p>Experience.</p>
            </span>
            <img src={spicy5} alt="img" className="spicy-img" />
        </div>
    )
}

export default Quote;