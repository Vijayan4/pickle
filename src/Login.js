import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    localStorage.setItem("loginData", JSON.stringify(formData));

    console.log("Login Data saved to localStorage:", formData);
   
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br to-[#a9dadc] from-gray-800 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-90 animate-slide-down  "
      >
        <h2 className="text-center text-2xl font-bold text-[#1d3557] mb-6">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-[#1d3557]">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#457b9d]"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold text-[#1d3557]">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#457b9d]"
          />
          <a href="#" className="text-sm text-[#e63946] hover:underline mt-1 inline-block">
            Forget password?
          </a>
        
        </div>

        <button
          type="submit"
          className="w-full bg-[#457b9d] hover:bg-[#1d3557] text-white py-2 rounded-md text-lg transition duration-200"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-[#e63946] hover:underline">
            Register
          </a>
        </p>
        <footer className=" text-white py-8 text-center font-sans">
      <footer className=" text-gray-800 p-4 text-center">
      <div className="flex justify-center space-x-6 text-2xl">
        <i className="fab fa-facebook hover:text-gray-600 text-3xl" ></i>
        <i className="fab fa-google hover:text-gray-600 text-3xl" ></i>
        
      </div>
    </footer>
    </footer>
      </form>

      
      <style>
        {`
          .animate-slide-down {
            animation: slideDown 0.5s ease forwards;
          }

          @keyframes slideDown {
            from {
              transform: translateY(-20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Login;
