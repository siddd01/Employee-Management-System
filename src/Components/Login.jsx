import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate=useNavigate()
    const [error,setError]=useState()
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [agree, setAgree] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  axios.post('http://localhost:3000/auth/adminLogin', values,{
    withCredentials:true
  })
    .then(result => {
        if(result.data.loginStatus){
            navigate("/dashboard")
        }
        else{
            setError(result.data.Error)
        }
        
    })
    .catch(err => {
      console.log("Login error:", err);
   
    });

  console.log("Submitted values:", values);
  console.log("Agreed to terms:", agree);
};

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="border rounded-xl shadow-md p-10 bg-white w-[350px]">
         <p className="text-xl text-yellow-400 text-center font-semibold">{error}</p>
        <h2 className="text-3xl font-semibold text-center mb-6">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="text-lg block mb-1" htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              id="email"
              type="text"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              placeholder="Enter email"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="text-lg block mb-1" htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              id="password"
              type="password"
              value={values.password}
              onChange={(e) => setValues({ ...values, password: e.target.value })}
              placeholder="Enter Password"
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <button
            disabled={!agree}
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </div>

          <div className="flex items-start text-sm">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="mt-1"
            />
            <p className="ml-2">I agree to all the terms and conditions</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
