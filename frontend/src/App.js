import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//importar nuestros componentes
import ShowShops from "./components/ShowShops";
import CreateShop from "./components/CreateShop";
import EditShop from "./components/EditShop";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/showshop" element={<ShowShops />} />
          <Route path="/create" element={<CreateShop />} />
          <Route path="/edit/:id" element={<EditShop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
