
import Incrementer from "../Components/Incrementer";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const AddToCart = ({CartItems, SetcartItems}) => {

    console.log("Data of price Updated: ", CartItems)
    return (
            <div className="table">
                <table>
                    <thead className="head-row">
                    <tr>
                        <th className="head-col-1">Item</th>
                        <th className="head-col">Price</th>
                        <th className="head-col">Quantity</th>
                        <th className="head-col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log("ItemsData: ", CartItems)} 
                    {CartItems.map((item, index) => (
                        <tr key={index}>
                            {console.log("item:", item)}
                            <td>
                                <div className="Item-details">
                                    <img src={item.image} alt="img" className="table-img" />
                                    <span>{item.name}</span>
                                </div>
                            </td>

                            <td>{item.price.toFixed(2)}</td>
                            {console.log("Type of SetcartItems: ", typeof SetcartItems)}
                            <td>{<Incrementer SetcartItems={SetcartItems} cartItems={CartItems} item={item} />}</td>

                            {console.log("Price Updated from Cart: ", item.price)}
                            {console.log("Multiplied Value: ", item.price*item.quantity)}
                            <td>{(item.price*item.quantity).toFixed(2)}</td>
                            <td>{<span><button  ><DeleteForeverOutlinedIcon /></button></span>}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {console.log("Atlast: ", CartItems)}
            </div>
    );
};

export default AddToCart;
