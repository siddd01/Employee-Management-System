import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/auth/logout", {
      withCredentials: true
    })
    .then(result => {
      if (result.data.Status) {
        navigate('/adminLogin');
      }
    })
    .catch(err => {
      console.error("Logout failed:", err);
      // Optionally navigate even if logout failed
      navigate('/admin/adminLogin');
    });
  }, [navigate]);

  return (
    <div>
      Logging out...
    </div>
  );
};

export default Logout;
