import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';
import Logout from './components/Logout/Logout';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit' element={<Edit />} />
        <Route path='/details' element={<Details />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
