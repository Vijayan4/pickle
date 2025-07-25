import React from 'react';
import { useNavigate } from 'react-router-dom'; 

function Banner() {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate('/products'); 
  };

  return (
    <div>
      <div className="mx-auto mt-5 flex justify-center pt-0">
        <div>
          <img
            src="thokku1.jpg"
            alt="Pickle Logo"
            className=" w-[100%]"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 mb-40 h-[500px] w-[90%] ml-[5%] shadow-xl p-4 bg-white shadow-black-500/50">
        <h1 className="bg-yellow-200 shadow-lg shadow-black-500 mt-[70px] col-span-3 text-center text-red-600 text-6xl font-bold py-6">
          Welcome to Pickle World
          <img
            src="pickle.webp"
            alt="Pickle Logo"
            className="w-[70%] pl-[25%] mt-10"
          />
          <button
            onClick={handleOrderClick} 
            className="bg-gray-700 text-white py-3 px-8  mt-[2%] rounded-2xl"
          >
            ORDER NOW
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Banner;
