import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Category = () => {
  const [category,setCategory]=useState([])
  console.log(category)

  useEffect(() => {
  axios.get("http://localhost:3000/auth/category")
    .then(result => {
      if (result.data.Status) {
        
        setCategory(Array.isArray(result.data.Result) ? result.data.Result : []);
      } else {
        alert(result.data.Error);
      }
    })
    .catch(err => console.log(err));
}, []);

  return (
 <div className="px-5 mt-10 max-w-4xl mx-auto">
  <div className="flex justify-between items-center mb-6">
    <h3 className="text-4xl font-semibold text-gray-800">Categories</h3>
    <Link
      to="/dashboard/add_category"
      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow transition duration-300"
    >
      Add Category
    </Link>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full border border-gray-300 rounded-md overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-6 py-3 text-gray-700 font-medium uppercase tracking-wider border-b border-gray-300">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        {category.length > 0 ? (
          category.map((c, index) => (
            <tr
              key={index}
              className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 transition"
            >
              <td className="px-6 py-4 border-b border-gray-300 text-gray-800">
                {c.name}
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

export default Category
