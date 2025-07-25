import React, { useState } from "react";


const products = [
  { id: 1, name: "MangoPickle", price: 120, image: "mangojar.webp" },
  { id: 2, name: "Lemon Pickle", price: 100, image: "limejar.webp" },
  { id: 3, name: "Mixed Vegetable", price: 1330, image: "mixedjar.png" },
  { id: 4, name: "Garlic Pickle", price: 90, image: "garlickjar.webp" },
  { id: 5, name: "Chilly", price: 80, image: "chillyjar.webp" },
  { id: 6, name: "Narthankai Pickle", price: 95, image: "narthankaijar.png" },
  { id: 7, name: "Amla Pickle", price: 110, image: "amlajar.webp" },
];

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-yellow-200 shadow-lg rounded-3xl p-8 w-11/12 md:w-3/4 mx-auto mt-24 mb-16">
      <h2 className="text-center text-4xl font-bold mb-10 text-green-800">
        Pickle Products
      </h2>

     
      <div className="flex gap-6 justify-center flex-wrap mb-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 rounded-xl w-48 text-center shadow-md bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-50 h-40 object-cover rounded-lg mb-2"
            />
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 w-full py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      
      <div className="bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-700">🛒 Cart List</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-yellow-200 p-4 rounded-xl shadow"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-600">
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-4 py-1 rounded shadow-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 border border-black text-center font-semibold w-40 py-2 rounded mx-auto text-lg">
              Total: ₹{getTotal()}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
