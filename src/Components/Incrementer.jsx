import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from 'react';

const Incrementer = ()=>{

    const [Value, SetValue] = useState(1);
    const Decrement = ()=>{
        if (Value > 1) {
        }
        
    }
    const Increment = ()=>{
        SetValue(Value+1)
    }

    return(
        <div className='text-white'>
            <span className='cursor-pointer' onClick={Decrement}><RemoveOutlinedIcon /></span>
            <span className='px-2'>{Value}</span>
            <span className='cursor-pointer' onClick={Increment}><AddOutlinedIcon /></span>
        </div>
    )
}

export default Incrementer;