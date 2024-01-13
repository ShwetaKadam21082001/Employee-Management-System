import './App.css';
import AddUser from './Component/AddUser';
import AllUsers from './Component/AllUsers';
import Employees from './Component/Employees';
import Navbar from './Component/Navbar';
import EditUser from './Component/EditUser';

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter >
       <Navbar />
       <Routes>
        <Route path="/" element={<Employees />}/>
        <Route path="/all" element={<AllUsers />}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
