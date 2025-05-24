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
    <div className="px-5 mt-5">
        <div className="flex justify-center ">
            <h3 className="text-4xl font-semibold">Category</h3>

        </div>
        <Link to="/dashboard/add_category" className=" border p-2 bg-blue-600 hover:bg-blue-700 text-xl rounded">Add Category </Link>

        <div className="">
          <table>
           <thead>
            <tr>
              <th>Name</th>
            </tr>
           </thead>
          <tbody>
         {
          category.map((c, index) => (
            <tr key={index}>
              <td>{c.name}</td>
            </tr>
          ))
        } 
      </tbody>
          </table>
        </div>
      
    </div>
  )
}

export default Category
