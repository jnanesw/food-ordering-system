import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useEffect, useState } from 'react';

const Incrementer = ({SetcartItems, cartItems, item})=>{
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[Value])
    return(
        <div className='text-white incrementer'>
            <span className='change-value change-value cursor-pointer' onClick={Decrement}><RemoveOutlinedIcon /></span>
            <span className='change-value px-2'>{Value}</span>
            <span className='change-value cursor-pointer' onClick={Increment}><AddOutlinedIcon /></span>
        </div>
    )
}

export default Incrementer;