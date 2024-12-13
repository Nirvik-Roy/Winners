import logo from './logo.svg';
import './App.css';
import img from './Images/Rectangle 6667501.png'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout';
import WinnersHome from './View/WinnersHome/WinnersHome';
import Footer from './Layout/Footer';
import PropertyList from './View/PropertyList/PropertyList';
import Community from './View/Community/Community';

function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<WinnersHome/>}/>
        <Route path='/propertylist' element={<PropertyList/>}/>
        <Route path='/community' element={<Community/>}/>
      </Route>
  
    </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
