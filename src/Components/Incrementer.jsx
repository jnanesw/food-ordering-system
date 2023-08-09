import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useEffect, useState } from 'react';

const Incrementer = ({SetcartItems, cartItems, item})=>{
    console.log("Type of SetcartItems: ", typeof SetcartItems)
    const [Value, SetValue] = useState(1);
    const Decrement = ()=>{
        if (Value > 1) {
            SetValue(Value-1)
        }
        
    }
    const Increment = ()=>{
        SetValue(Value+1)
    }

    useEffect(()=>{
        const ToUpdatedCart = [...cartItems]
        const itemIndx = ToUpdatedCart.findIndex(i=>i.id === item.id);
        ToUpdatedCart[itemIndx].quantity = Value;
        SetcartItems(ToUpdatedCart)
    },[Value])
    return(
        <div className='text-white'>
            <span className='cursor-pointer' onClick={Decrement}><RemoveOutlinedIcon /></span>
            <span className='px-2'>{Value}</span>
            <span className='cursor-pointer' onClick={Increment}><AddOutlinedIcon /></span>
        </div>
    )
}

export default Incrementer;