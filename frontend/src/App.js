import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './component/register/Register';
import Login from './component/login/Login';
import CreateProduct from './component/createProduct/CreateProduct';
import UpdateProduct from './component/updateProduct/UpdateProduct';
import GetAllProduct from './component/GetAll/GetAllProduct';
import Home from "./component/Home/Home.js"
import { useSelector } from "react-redux"

function App() {
  const { isAuthenticated, } = useSelector((state) => state.user)
  console.log(isAuthenticated)
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={isAuthenticated ? <Home /> : <Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/create' element={isAuthenticated ? <CreateProduct /> : <Login />} />
        <Route exact path='/update/:id' element={isAuthenticated ? <UpdateProduct /> : <Login />} />
        <Route exact path='/getall' element={isAuthenticated ? <GetAllProduct /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
