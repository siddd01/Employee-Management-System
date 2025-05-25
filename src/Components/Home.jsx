import axios from "axios";
import { useEffect, useState } from "react";


const Home = () => {

    const [adminTotal,setAdminTotal]=useState()
    const [employee,setEmployee]=useState([])
    const [totalEmployee,setTotalEmployee]=useState(0)
    const [totalSalary,setTotalSalary]=useState()
    const [admins,setAdmins]=useState([])
    console.log(totalEmployee)

    
  useEffect(()=>{
     axios.get("http://localhost:3000/auth/employee")
    .then(result => {
      if (result.data.Status) {
        
        setEmployee(Array.isArray(result.data.Result) ? result.data.Result : []);
         setTotalEmployee(employee.length)
                 let total = 0;
        for (let i = 0; i < employee.length; i++) {
          total += employee[i].salary || 0;
        }
        setTotalSalary(total)
    
      } else {
        alert(result.data.Error);
      }
    })
      
    .catch(err => console.log(err));

  },[])

  useEffect(()=>{
     adminCount()
     AdminRecords()
  },[])

  
  const adminCount=()=>{
    axios.get("http://localhost:3000/auth/admin_Count")
    .then(result=>{
      if(result.data.Status){
        setAdminTotal(result.data.Result[0].admin)
      }
    })
  }

  const AdminRecords=()=>{
     axios.get("http://localhost:3000/auth/admin_records")
    .then(result=>{
      if(result.data.Status){
        setAdmins(result.data.Result)
      }
    })
  }
  console.log(admins)




  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Admin Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-800">Admin</h4>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="text-gray-600 text-lg">Total {adminTotal}</div>
        </div>

        {/* Employee Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-800">Employee</h4>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="text-gray-600 text-lg">Total {totalEmployee}</div>
        </div>

        {/* Salary Card */}
        <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
          <div className="mb-2">
            <h4 className="text-xl font-semibold text-gray-800">Salary</h4>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="text-gray-600 text-lg">Total {totalSalary}</div>
        </div>
      </div>

<h3>List of Admins</h3>
<table className="table-auto w-full border-collapse border border-gray-300">
  <thead>
    <tr className="bg-gray-100">
      <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
      <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
    </tr>
  </thead>
  <tbody>
    {admins.map((ad, index) => (
      <tr key={index} className="hover:bg-gray-50">
        <td className="border border-gray-300 px-4 py-2">{ad.email}</td>
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex">
            <button 
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Edit
            </button>
            <button 
              type="button"
              className="ml-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default Home;
