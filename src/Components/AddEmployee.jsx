import axios from 'axios';
import { useEffect, useState } from 'react';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
    category_id: "",
    image: "" // just a string, like "default.png"
  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/auth/category')
      .then(res => {
        setCategories(res.data.Result || []);
      })
      .catch(err => {
        console.error("Error fetching categories:", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/auth/add_employee', employee)
      .then(res => {
        if (res.data.Status) {
          alert("Employee added successfully!");
        } else {
          alert("Failed to add employee.");
        }
      })
      .catch(err => {
        console.error("Error:", err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 border-gray-300 bg-white shadow-lg rounded-lg p-10 w-[500px]">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Add Employee</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
            placeholder="Enter Name"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
            placeholder="Enter Email"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={(e) => setEmployee({ ...employee, password: e.target.value })}
            placeholder="Enter Password"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
            placeholder="Enter Salary"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="text"
            name="address"
            value={employee.address}
            onChange={(e) => setEmployee({ ...employee, address: e.target.value })}
            placeholder="Enter Address"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <select
            name="category_id"
            value={employee.category_id}
            onChange={(e) => setEmployee({ ...employee, category_id: e.target.value })}
            className="w-full h-[40px] border border-gray-300 rounded-md p-2 bg-white"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            name="image"
            value={employee.image}
            onChange={(e) => setEmployee({ ...employee, image: e.target.value })}
            placeholder="Enter image path or filename"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <button
            type="submit"
            className="w-full h-[45px] mt-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-200"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
