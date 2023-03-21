
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>

           <Route path='/' element = {<EmployeeList />} />
           <Route index element={<EmployeeList />} />
           <Route path='/employeeList' element={<EmployeeList />} />
           <Route path='/addEmployee' element={<AddEmployee />} />
 
        </Routes>
       <Navbar />
       <AddEmployee />
       

      </BrowserRouter>
    </div>
  )
}

export default App;
