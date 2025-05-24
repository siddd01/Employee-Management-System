import { Route, Routes } from "react-router-dom";
import AddCategory from "./Components/AddCategory";
import Category from "./Components/Category";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <Routes>
      <Route path="/adminLogin" element={<Login />} />

      {/* Dashboard layout with nested routes */}
         {/* Dashboard with Nested Routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path='employee' element={<Employee />} />
           {/* Default Dashboard Page */}
          <Route path='category' element={<Category />} />
          <Route path='profile' element={<Profile />} />
          <Route path='add_category' element={<AddCategory />} />
  
        </Route>
    </Routes>
  );
};

export default App;
