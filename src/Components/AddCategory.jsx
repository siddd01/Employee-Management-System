import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
    const navigate=useNavigate()
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!category.trim()) {
    //   setError("Category name is required");
    //   return;
    // }

   axios.post("http://localhost:3000/auth/add_category",  {category})
  .then(result => {
    console.log(result)
    if (result.data.Status) {

      navigate("/dashboard/category");
    } else {
      alert(result.data.Error || "Something went wrong");
    }
  })
  .catch(err => {
    console.error(err);
    alert(err);
  });


    // Add your logic here to send the category to the backend
    console.log("Category added:", category);


  };

  return (
    <div className="w-[80vw] h-[80vh] overflow-hidden flex justify-center items-center">
      <div className="border rounded-xl shadow-md p-10 bg-white w-[350px]">
        {error && (
          <p className="text-md text-red-500 text-center font-semibold mb-2">
            {error}
          </p>
        )}
        <h2 className="text-3xl font-semibold text-center mb-6">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-lg block mb-1">
              <strong>Category</strong>
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter Category"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
