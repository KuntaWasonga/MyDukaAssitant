import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import ClientHome from "./pages/ClientHome";
import ScanItem from "./pages/ScanItem";
import ViewCart from "./pages/ViewCart";
import EmployeeHome from "./pages/EmployeeHome";
import CheckCustomer from "./pages/CheckCustomer";
import AddProduct from "./pages/AddProduct";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from './pages/Registration';
import LoginE from './pages/LoginE';
import RegistrationPageE from './pages/RegistrationE';
import Checkout from './pages/Checkout';



function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
{/*---------------------------USER ROUTES-------------------------------*/}
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/client" element={<ClientHome />} />
            <Route path="/scan" element={<ScanItem />} />
            <Route path="/cart" element={<ViewCart />} />
            <Route path="/checkout" element={<Checkout />} />
{/*------------------------EMPLOYEE ROUTES------------------------------*/}
            <Route path="/registerE" element={<RegistrationPageE />} />
            <Route path="/loginE" element={<LoginE />} />
            <Route path="/employee" element={<EmployeeHome />} />
            <Route path="/check" element={<CheckCustomer />} />
            <Route path="/add" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

