import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/employee/detail/${id}`)
      .then(result => {
        if (result.data?.Result?.length > 0) {
          setEmployee(result.data.Result[0]);
        }
      })
      .catch(err => console.log("Error fetching employee:", err));
  }, [id]);

  const handleLogout = () => {
   axios.get("http://localhost:3000/employee/logout")
   .then(result => navigate("/"))
   .catch(err=>console.log(err))
  };

  const handleEdit = () => {
    navigate(`/editSelectedEmployee/${id}`); // Make sure this route exists
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
      {employee ? (
        <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-blue-200 flex items-center justify-center text-3xl text-white font-bold">
             <img src={`http://localhost:3000/images/${employee.image}`} alt="" />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800">{employee.name}</h2>
            <p className="text-gray-500">{employee.email}</p>
          </div>

          <div className="space-y-2 text-gray-700">
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Phone:</strong> {employee.phone}</p>
            <p><strong>Address:</strong> {employee.address}</p>
            <p><strong>Salary:</strong> Rs. {employee.salary}</p>
            <p><strong>Categery:</strong>  {employee.category_id}</p>
            {/* Add more details as needed */}
          </div>

          <div className="mt-6 flex justify-between">
            <button
              onClick={handleEdit}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-200"
            >
              Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-700 text-lg">Loading employee profile...</p>
      )}
    </div>
  );
};

export default EmployeeDetail;
