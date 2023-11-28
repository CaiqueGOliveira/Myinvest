import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Carteira from './Pages/Carteira';
import Acoes from './Pages/Acoes';
import FIIs from './Pages/FIIs';
import Cripto from './Pages/Cripto';
import RendaFixa from './Pages/RendaFixa';
import Exterior from './Pages/Exterior';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/fiis" element={<FIIs />} />
          <Route path="/cripto" element={<Cripto />} />
          <Route path="/rendafixa" element={<RendaFixa />} />
          <Route path="/exterior" element={<Exterior />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
