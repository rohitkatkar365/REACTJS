import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Data from './components/Data';
import Add from './components/Add';
import EditItem from './components/EditItem';
import './nav.css'
function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/post">Add Product</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Data />} />
        <Route path="/post" element={<Add />} />
        <Route path="/:id" element={<EditItem />} />

      </Routes>
    </>
  );
}

export default App;
