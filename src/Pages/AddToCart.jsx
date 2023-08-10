
import Incrementer from "../Components/Incrementer";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';


const AddToCart = ({CartItems, SetcartItems}) => {

    const RemoveItem = (id)=>{
        // console.log("Testing Id: ", id)
        const ModifiedCart = [...CartItems]
        const itemIndex = ModifiedCart.findIndex(i=>i.id === id)
        
        console.log("Index of remove item: ", ModifiedCart.findIndex(i=>i.id===id))
        ModifiedCart.splice(itemIndex,1)
        console.log("Modified Cart: ", ModifiedCart)
        SetcartItems(ModifiedCart)
    }
    return (
            <div className="table ">
                <table>
                    <thead className="head-row text-xl">
                    <tr>
                        <th className="head-col-1">Item</th>
                        <th className="head-col">Price</th>
                        <th className="head-col">Quantity</th>
                        <th className="head-col">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {CartItems.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="Item-details">
                                    <img src={item.image} alt="img" className="table-img" />
                                    <span>{item.name}</span>
                                </div>
                            </td>

                            <td>{item.price.toFixed(2)}</td>
                            <td>{<Incrementer SetcartItems={SetcartItems} cartItems={CartItems} item={item} />}</td>
                            <td>{(item.price*item.quantity).toFixed(2)}</td>

                            <td>{<button onClick={()=>{
                                RemoveItem(item.id)
                            }} ><DeleteForeverOutlinedIcon /></button>}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                {console.log("Atlast: ", CartItems)}
            </div>
    );
};

export default AddToCart;
