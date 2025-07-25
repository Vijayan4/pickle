import { useNavigate } from 'react-router-dom';

const pickleData = [
  { name: "Mango Pickle", image: "mangopickle.webp", price: "₹120" },
  { name: "Lemon Pickle", image: "le.png", price: "₹100" },
  { name: "Mixed Vegetable Pickle", image: "veg1.png", price: "₹130" },
  { name: "Garlic Pickle", image: "garlic1.png", price: "₹90" },
  { name: "Chilly Pickle", image: "chilly.png", price: "₹80" },
  { name: "Narthangai Pickle", image: "narthangai.png", price: "₹95" },
  { name: "Amla pickle", image: "amla.png", price: "₹110" },
];

const Products = () => {
  const navigate = useNavigate();
  const handleOrderClick = () => navigate('/cart');

  return (
    <div className="px-5 py-10 text-center">
      <h2 className="text-red-600 text-5xl font-extrabold mb-10">Pickle Products</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {pickleData.map((item, index) => (
          <div
            key={index}
            className="bg-yellow-50 border-2 border-yellow-400 rounded-lg w-65 p-5 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-green-600 font-bold text-md">{item.price}</p>
            <button
              onClick={handleOrderClick}
              className="mt-4 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-md transition-colors hover:bg-yellow-500"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
