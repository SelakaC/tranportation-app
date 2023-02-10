import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Home from './pages/Home';
import VehicleNumberCheck
from './pages/VehicleNumberCheck';
import Details from './pages/Details';
import QRScan from './pages/QRScan';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/chvehiclenumber' element={<VehicleNumberCheck/>}/>
          <Route path='/details' element={<Details/>}/>
          <Route path='/qrscan' element={<QRScan/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
