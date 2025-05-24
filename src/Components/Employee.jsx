import { Link } from "react-router-dom"

const Employee = () => {
  return (
    <div className="px-5 mt-10 max-w-4xl mx-auto">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-4xl font-semibold text-gray-800">Employees</h3>
    <Link
      to="/dashboard/add_employee"
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-300"
    >
      Add Employee
    </Link>
  </div>
  </div>

  )
}

export default Employee
