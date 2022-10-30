import React from "react";
import './itemCart.css'
import { useCartContext } from "../../context/CartContext";
const ItemCart = ( { product }) => {

    const {removeProduct} = useCartContext()
    return (
        <div className="itemCart">
            <img src={product.image} alt={product.title} />
            <div>
                <p><strong>Título:</strong> {product.title}</p>
                <p><strong>Cantidad:</strong> {product.quantity}</p>
                <p><strong>Precio u.:</strong> {product.price}</p>
                <p><strong>Subtotal:</strong> ${product.quantity*product.price} </p>
                <button type='button' className="btn btn-danger" onClick={() => removeProduct(product.id)}>Eliminar</button>

            </div>
        
        </div>
    )
}

export default ItemCart
