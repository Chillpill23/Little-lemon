import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import Reservation from './components/Reservation'
import OnlineOrders from './components/OnlineOrders';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login';
import { ConfirmedBooking } from './components/ConfirmedBooking';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/Reservation" element={<Reservation />}></Route>
          <Route path="/OnlineOrders" element={<OnlineOrders />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/ConfirmedBooking" element={<ConfirmedBooking />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
