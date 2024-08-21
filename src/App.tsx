import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import CardPage from './pages/CardPage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/card/:id' element={<CardPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

