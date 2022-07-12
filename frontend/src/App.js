import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import ShowShops from './components/ShowShops';
import CreateShop from './components/CreateShop';
import EditShop from './components/EditShop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <ShowShops /> } />
          <Route path='/create' element={ <CreateShop /> } />
          <Route path='/edit/:id' element={ <EditShop /> } />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
