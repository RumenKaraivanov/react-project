import './App.css';
import Navbar from './components/navigation/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Catalog from './components/Catalog/Catalog';

function App() {
  return (
    <>
      <Navbar />
      <Catalog />
    </>

  );
}

export default App;
