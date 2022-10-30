import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import './cart.css'
import CartProvider from "../../context/CartContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2'




const Cart = () => {
    const { cart, totalPrice } = useCartContext();  
    
    const order = {
        buyer: {
            name: 'Rodrigo',
            email: 'rodrigo@gmail.com',
            phone: '123123',
            address: 'abcdefg'
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})), 
        total: totalPrice(), 
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id})=> console.log(id))

        Swal.fire(
            '¡Listo!',
            '¡Tu compra ha sido exitosa!',
            'success'
          )
        
          
    }

    if (cart.length === 0){
        return (
            <>
                <p className="mt-5 fw-bold text-center fs-3">No hay elementos en el carrito</p>
                <Link className="fs-3 text-center hacerCompras" to='/'>
                    <p>Hacer compras</p>
                    </Link>
            </>
        );
    }


    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p className="text-center">
                <strong>Total a pagar: </strong>{totalPrice()}
            </p>
            <div className="botonComprarContainer">
                <div className="vertical-center">
                    <button type='button' className='btn btn-primary btn-block' onClick={handleClick}>Emitir compra</button>
                </div>
            </div>
        </>
    )
}

export default Cart