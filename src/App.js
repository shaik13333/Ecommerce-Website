// import logo from './logo.svg';
import './App.css';
import Mainpage from './Components/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/signinpage' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;