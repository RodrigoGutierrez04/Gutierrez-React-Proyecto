import './App.css';

import Cart from './components/Cart'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContainerItems from './components/ContainerItems';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
           
            <Route path='/' element={ <div className='container row justify-content-center'><ItemListContainer/></div>}/>
            <Route path='/categoria/:categoriaId' element={ <ItemListContainer/>}/>
            <Route path='/cart' element={ <Cart/>}/>
            <Route path='/detalle/:detalleId' element={ <ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
