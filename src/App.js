// import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from './pages/Signup';
import MainCart from './pages/MainCart';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/signinpage' element={<Signup/>}/>
      <Route path='/cart' element={<MainCart/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;