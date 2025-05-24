import { NavLink, Outlet } from "react-router-dom";

const icons = {
  dashboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  ),
  employees: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M12 14a4 4 0 100-8 4 4 0 000 8z"
      />
    </svg>
  ),
  category: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  ),
  profile: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.121 17.804A9 9 0 1117.804 5.12M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  logout: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-3 text-blue-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"
      />
    </svg>
  ),
};

const Dashboard = () => {
  const menuItems = [
    { name: "Dashboard", to: "/dashboard/home", icon: icons.dashboard },
    { name: "Manage Employees", to: "/dashboard/employee", icon: icons.employees },
    { name: "Category", to: "/dashboard/category", icon: icons.category },
    { name: "Profile", to: "/dashboard/profile", icon: icons.profile },
    { name: "Logout", to: "/dashboard/logout", icon: icons.logout },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg sticky top-0 p-6 flex flex-col">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-12">Siddhant Shrestha</h1>
        <nav className="flex flex-col space-y-4 text-lg font-medium">
          {menuItems.map(({ name, to, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-md transition-colors duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white font-bold shadow-md"
                    : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
                }`
              }
            >
              {icon}
              {name}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 bg-gray-50">
        <div className="">
            <h2 className="text-3xl font-semibold mb-6 shadow p-4">Employee Management System</h2>
             
        </div>


         <Outlet/>
      
        
      </main>
    </div>
  );
};

export default Dashboard;
