import React,{useState, useEffect} from "react";

import ItemDetail from "../ItemDetail";
import { useParams } from "react-router";


const films = [
    {id: 1, image: "https://img.ssensemedia.com/images/222750M833018_1/hydro-flask-black-wide-mouth-bottle-32-oz.jpg", category: 'termos', title: 'Botella 1'},
    {id: 2, image: "https://m.media-amazon.com/images/I/61Rx91iwTqL._AC_SL1500_.jpg", category: 'shakers',  title: 'Botella 2'},
    {id: 3, image: "https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX679_.jpg", category: 'termos' , title: 'Botella 3'},
    {id: 4, image: "https://m.media-amazon.com/images/I/81PJ3GXng-L._AC_SX679_.jpg", category: 'shakers' , title: 'Botella 4'}
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const { detalleId} = useParams();
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 100);
        });
        
        getData.then(res => setData(res.find(film => film.id === parseInt(detalleId))));
    }, [])

    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer