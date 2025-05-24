import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const navigate=useNavigate()
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    salary: "",
    category_id: "",
    image: null // This will hold the File object
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setEmployee({ ...employee, image: files[0] });  // store the selected file
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', employee.name);
    formData.append('email', employee.email);
    formData.append('password', employee.password);
    formData.append('address', employee.address);
    formData.append('salary', employee.salary);
    formData.append('category_id', employee.category_id);
    if (employee.image) {
      formData.append('image', employee.image);  // append file only if selected
    }

    axios.post('http://localhost:3000/auth/add_employee', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      if (res.data.Status) {
        navigate('/dashboard/employee')
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

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={handleChange}
            placeholder="Enter Password"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Enter Salary"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <input
            type="text"
            name="address"
            value={employee.address}
            onChange={handleChange}
            placeholder="Enter Address"
            className="w-full h-[40px] border border-gray-300 rounded-md p-2"
            required
          />

          <select
            name="category_id"
            value={employee.category_id}
            onChange={handleChange}
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
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
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
