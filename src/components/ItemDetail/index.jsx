import React from "react";
import './itemDetails.css'

export const ItemDetail = ({data}) => {
    return (
        <div className="container">

                <div className="detail justify-content-center align-items-center col-sm-4">
                    <img className="text-center detail__image imageDetailSize" src={data.image} alt="" />
                    <div className="content textContent">
                        <h1>{data.title}</h1>
                        <p className="align-items-center justify-content-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ullam inventore exercitationem incidunt doloribus cum, autem, nobis obcaecati, hic fugit numquam? Assumenda non alias minus aliquid officia quia saepe perferendis.</p>
                    </div>
                </div>


        </div>
    );
}

export default ItemDetail