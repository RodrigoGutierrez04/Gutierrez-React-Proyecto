import './item.css'
import { Link } from 'react-router-dom';
import React from 'react';



const Item = ({info}) => {
    return (

    
            <div class="card cardWidth containerItems col-6">
                <div class="card-body Column text-center">
                    <img className='imgSize' src={info.image} alt="" />
                    <h5 class="card-title">{info.title}</h5>
                    <Link to={`/detalle/${info.id}`} className='film' class="btn btn-primary">Ver Detalle</Link>
                </div>
            </div>
        
    
    

        

 
    );
}

export default Item

       /* <Link to={`/detalle/${info.id}`} className='film'>
            <img className='imgSize' src={info.image} alt="" />
            <p>{info.title}</p>
        </Link> */