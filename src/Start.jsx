import { useNavigate } from 'react-router-dom';

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to EMS</h1>
        
        <div className="space-y-6">
          <button
            onClick={() =>  navigate('/adminLogin')}
            className="w-full py-3 px-6 bg-blue-600 text-white text-lg rounded-xl shadow hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
          >
            Start as an Admin
          </button>

          <button
            onClick={() => navigate('/employeeLogin')}
            className="w-full py-3 px-6 bg-green-600 text-white text-lg rounded-xl shadow hover:bg-green-700 transform hover:scale-105 transition-all duration-300"
          >
            Start as an Employee
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
