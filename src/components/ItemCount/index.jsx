import './itemCount.css';
import React, {useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const[count, setCount] = useState(parseInt(initial));

    // Funciones Incrementar y Decrease
    const decrease = () => {
    
        setCount(count - 1)
    }

    const increase = () => {
    
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    // Fin Funciones Incrementar y Decrease
    return (
        
        <div className='counter'>
            <button className='btn btn-primary mx-3' disabled={count <= 1} onClick={decrease}>-</button>
            <span className='fw-bold'>{count}</span>
            <button className='btn btn-primary mx-3' disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className='mt-3 btn btn-primary' disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount