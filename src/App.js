import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navigation/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Catalog from './components/Catalog/Catalog';
import Details from './components/Details/Details';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import PersistLogin from './components/PersistLogin/PersistLogin';

function App() {
  const [err, setErr] = useState(null);

  const onError = (err) => {
    setErr(err.message)
    setTimeout(() => {
      setErr(null)
    }, 2000)
  };

  return (
    <>
      <Navbar onError={onError} />
      {err && <Error err={err} />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog onError={onError} />} />
        <Route path='/register' element={<Register onError={onError} />} />
        <Route path='/login' element={<Login onError={onError} />} />
        <Route element={<PersistLogin onError={onError} />}>
          <Route path='/create' element={<Create onError={onError} />} />
          <Route path='/edit/:id' element={<Edit onError={onError} />} />
          <Route path='/details/:id' element={<Details onError={onError} />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
