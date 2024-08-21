import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CardList from './components/CardList';
import CardPage from './pages/CardPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CardList />} />
          <Route path='/card/:id' element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

