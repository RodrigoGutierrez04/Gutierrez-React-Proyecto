import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import React,{useState, useEffect}  from "react";
import Title from '../Title'
import { useParams } from "react-router";


const films = [
    {id: 1, image: "https://img.ssensemedia.com/images/222750M833018_1/hydro-flask-black-wide-mouth-bottle-32-oz.jpg", category: 'termos', title: 'Botella 1'},
    {id: 2, image: "https://m.media-amazon.com/images/I/61Rx91iwTqL._AC_SL1500_.jpg", category: 'shakers',  title: 'Botella 2'},
    {id: 3, image: "https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SX679_.jpg", category: 'termos' , title: 'Botella 3'},
    {id: 4, image: "https://m.media-amazon.com/images/I/81PJ3GXng-L._AC_SX679_.jpg", category: 'shakers' , title: 'Botella 4'}
]

export const ItemListContainer = ({texto}) => {
    
    const [data, setData] = useState([])

    const { categoriaId } = useParams()

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(films);
            }, 100);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(termos => termos.category === categoriaId)))
        } else{
            getData.then(res => setData(res))

        }
        
    },[categoriaId]) 
    
    const onAdd =(quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    }
    return (
        <>
            <Title greeting={texto}/>
            {/* <ItemCount initial={1} stock={10} onAdd={onAdd}/> */}
            <ItemList data = {data}/>
        </>

    );
}

export default ItemListContainer;
