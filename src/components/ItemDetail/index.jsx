import './itemDetails.css'
import React, {useState} from "react";
import { useCartContext } from '../../context/CartContext';
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(data, quantity);
    }


    return (
        <div className="container">

                <div className="detail justify-content-center align-items-center col-sm-4">
                    <img className="text-center detail__image imageDetailSize" src={data.image} alt="" />
                    <div className="content textContent">
                        <h1>{data.title}</h1>

                        <p className="align-items-center justify-content-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ullam inventore exercitationem incidunt doloribus cum, autem, nobis obcaecati, hic fugit numquam? Assumenda non alias minus aliquid officia quia saepe perferendis.</p>
                       
                       {
                        goToCart
                            ? <Link className='btn btn-primary' to='/cart'>Terminar compra</Link>
                            : <ItemCount initial={1} stock={8} onAdd={onAdd}/>
                       }
                    </div>
                </div>
        </div>
    );
}

export default ItemDetail;