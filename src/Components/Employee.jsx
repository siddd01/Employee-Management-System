import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Employee = () => {
    const [employee,setEmployee]=useState([])
    console.log(employee)
  useEffect(()=>{
     axios.get("http://localhost:3000/auth/employee")
    .then(result => {
      if (result.data.Status) {
        
        setEmployee(Array.isArray(result.data.Result) ? result.data.Result : []);
      } else {
        alert(result.data.Error);
      }
    })
    .catch(err => console.log(err));
  },[])
  return (
    <div className="px-5 mt-10 max-w-6xl mx-auto">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-4xl font-semibold text-gray-800">Employees</h3>
    <Link
      to="/dashboard/add_employee"
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-300"
    >
      Add Employee
    </Link>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            Name
          </th>
            <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            image
          </th>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            email
          </th>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            address
          </th>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            salary
          </th>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            Action
          </th>
        
        </tr>
      </thead>
      <tbody>
        {employee.length > 0 ? (
          employee.map((e, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
            >
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                {e.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800 ">
                <img className="h-[80px]" src={`http://localhost:3000/images/${e.image}`} alt="" />

              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                {e.email}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                {e.address}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                {e.salary}
              </td>
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                <div className="flex">
                    <Link  to={`/dashboard/edit_employee/`+ e.id}
                  type="button"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Edit
                </Link>

                <Link
                  type="button"
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 ml-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                >
                  Delete
                </Link>
                </div>

              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="px-6 py-4 text-center text-gray-500" colSpan={1}>
              No categories found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  
  </div>

  )
}

export default Employee
