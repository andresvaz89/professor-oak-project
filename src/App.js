import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SinglePokemonPage from './pages/SinglePokemonPage';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Pokédex</Link>
        <Link to="/pokemon/nidorino">Nidorino</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<SinglePokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
