import { useEffect, useState } from "react";
import Incrementer from "../Components/Incrementer";
const AddToCart = ({CartItems}) => {
    const apiKey = "e1bfe1687e084970bb0af00e14f593e9";
    // const apiKey2="d1f70067f78248078e71a58983a18e5f"
    const [ItemsData, setItemsData] = useState([]);

    useEffect(() => {
        if(CartItems){
            const fetchData = async () => {
            const itemsData = await Promise.all(
                CartItems.map(async (item) => {
                const infoLink = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${apiKey}&includeNutrition=false`;
                const response = await fetch(infoLink);
                const data = await response.json();
                console.log("Price: ", data)
                return { id: item.id, name: data.title, price: data.price, quantity: 1, ImageLink: data.image };
                })
            );
            setItemsData(itemsData);
            };

            fetchData();
        }
    }, [CartItems, apiKey]);

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
                    {ItemsData.map((item, index) => (
                        <tr key={index}>
                            {console.log("item:", item)}
                            <td>
                                <div className="Item-details">
                                    <img src={item.ImageLink} alt="img" className="table-img" />
                                    <span>{item.name}</span>
                                </div>
                            </td>
                            <td>{item.price}</td>
                            <td>{<Incrementer />}</td>
                            <td>{}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            // console.log("At Last: ",cartItems)
    );
};

export default AddToCart;
