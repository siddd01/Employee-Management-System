import { Route, Routes } from "react-router-dom";
import AddCategory from "./Components/AddCategory";
import AddEmployee from "./Components/AddEmployee";
import Category from "./Components/Category";
import Dashboard from "./Components/Dashboard";
import EditEmployee from "./Components/EditEmployee";
import Employee from "./Components/Employee";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Logout from "./Components/logout";
import EditSelectedEmployee from "./Employee/EditSelectedEmployee";
import EmployeeDetail from "./Employee/EmployeeDetail";
import EmployeeLogin from "./Employee/EmployeeLogin";
import Start from "./Start";

const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/adminLogin" element={<Login />} />
      <Route path="/employeeLogin" element={<EmployeeLogin />} />
      <Route path="/employee_detail/:id" element={<EmployeeDetail />} />
      <Route path="/editSelectedEmployee/:id" element={<EditSelectedEmployee />} />

      {/* Dashboard layout with nested routes */}
         {/* Dashboard with Nested Routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path='employee' element={<Employee />} />
           {/* Default Dashboard Page */}
          <Route path='category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
                <Route path='logout' element={< Logout/>} />
          <Route path='add_category' element={<AddCategory />} />
          <Route path='add_employee' element={<AddEmployee />} />
          <Route path='edit_employee/:id' element={<EditEmployee />} />
  
        </Route>
    </Routes>
 
  );
};

export default App;
