// import { useEffect, useState } from "react";
import Incrementer from "../Components/Incrementer";
// import ExtractPrice from "../Components/ExtractPrice";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const AddToCart = ({CartItems}) => {
    // const apiKey = "e1bfe1687e084970bb0af00e14f593e9"
    // const apiKey_1 = "db254b5cd61744d39a2deebd9c361444"
    // const apiKey_2 = "88cbb41354b04d13858d7f377e338113"
    // const apiKey2="d1f70067f78248078e71a58983a18e5f"
    // const [ItemsData, setItemsData] = useState([]);
    
    // useEffect(() => {
    //     if(CartItems){
    //         const fetchData = async () => {
            
    //         const ITEMSDATA = await Promise.all(
    //             CartItems.map(async (item) => {
    //             const infoLink = `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${apiKey_2}&includeNutrition=false`;
    //             const response = await fetch(infoLink);
    //             const data = await response.json();
    //             console.log("rendering from the inside the UseEffect")
    //             console.log("Price: ", data)
    //             return { id: item.id, name: data.title, price: item.price || 0, quantity: item.quantity || 0, ImageLink: data.image };
    //             })
    //         );
    //         setItemsData(ITEMSDATA);
    //         };

    //         fetchData();
    //     }
    // }, []);

    // const onQuantityUpdate = (id, newQunatity)=>{
    //     const updatedItemsData = [...ItemsData]
    //     const itemIndex = updatedItemsData.findIndex(i=>i.id===id)
    //     updatedItemsData[itemIndex].quantity = newQunatity
    //     setItemsData(updatedItemsData)
    //     return;
    // }

    // const onPriceUpdate = (id, newPrice)=>{
    //     const updatedItemsData = [...ItemsData]
    //     const itemIndex = updatedItemsData.findIndex(i=>i.id===id)
    //     updatedItemsData[itemIndex].price = newPrice
    //     setItemsData(updatedItemsData)
    //     return;
    // }
    // useEffect(()=>{
    //     onQuantityUpdate();
    // },[])
    // useEffect(()=>{
    //     onPriceUpdate();
    // },[])

    // console.log("From ExtractPrice: ", onPriceUpdate)
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

                            <td>{item.price}</td>

                            <td>{<Incrementer />}</td>

                            {console.log("Price Updated from Cart: ", item.price)}
                            
                            <td>{item.price}</td>
                            <td>{<span><button  ><DeleteForeverOutlinedIcon /></button></span>}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                
            </div>
            // console.log("At Last: ",cartItems)
    );
};

export default AddToCart;
