import logo from './logo.svg';
import './App.css';
import img from './Images/Rectangle 6667501.png'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout';
import WinnersHome from './View/WinnersHome/WinnersHome';
import Footer from './Layout/Footer';

function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<WinnersHome/>}/>
      </Route>
  
    </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
