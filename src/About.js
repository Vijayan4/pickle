import React from 'react';

function About() {
  return (
    <div className="font-sans leading-relaxed text-gray-800 bg-orange-100 px-5 pt-12">
      <h1 className="text-gray-600 text-5xl font-bold  text-center mb-10 mt-12">Village Cooking Style and Tasty!</h1>
      <img src="pickle.webp" alt="Pickle Banner" className="w-1/2 mx-auto" />
      
      <h1 className="text-red-700 text-3xl font-bold mt-12">About Our Pickles</h1>
      <p className="mt-4">
        Welcome to our world of delicious and traditional pickles! At Pickle Products, we specialize in crafting
        high-quality pickles using authentic recipes and fresh ingredients. Each jar is packed with flavors that
        reflect the rich culinary heritage of India.
      </p>

      <h2 className="text-xl font-semibold text-gray-800 mt-10">Types of Pickles We Offer</h2>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-red-800 mt-8">1. Mango Pickle</h3>
        <img src="mango1.png" alt="Mango Pickle" className="w-1/6 ml-5 mt-2 inline-block" />
        <p className="mt-2">
          One of the most popular pickles made using raw mangoes, spices, and mustard oil. It’s tangy, spicy,
          and full of flavor. Perfect with rice, paratha, or curd rice.
        </p>

        <h3 className="text-lg font-semibold text-red-800 mt-8">2. Lemon Pickle</h3>
        <img src="le.png" alt="Lemon Pickle" className="w-1/6 ml-5 mt-2 inline-block" />
        <p className="mt-2">
          A tangy and slightly sweet pickle made from whole lemons. Rich in vitamin C and great for digestion,
          this pickle adds zest to every meal.
        </p>

        <h3 className="text-lg font-semibold text-red-800 mt-8">3. Garlic Pickle</h3>
        <img src="garlic1.png" alt="Garlic Pickle" className="w-1/6 ml-5 mt-2 inline-block" />
        <p className="mt-2">
          For garlic lovers! Spicy and bold in flavor, this pickle is made using whole garlic cloves and a blend of
          aromatic spices. Ideal as a side dish with chapati or dal rice.
        </p>

        <h3 className="text-lg font-semibold text-red-800 mt-8">4. Mixed Vegetable Pickle</h3>
        <img src="veg1.png" alt="Mixed Vegetable Pickle" className="w-1/6 ml-5 mt-2 inline-block" />
        <p className="mt-2">
          A colorful mix of carrots, cauliflower, green chilies, and more — all pickled together in a spicy and
          tangy masala. Crunchy and flavorful in every bite!
        </p>

        <h3 className="text-lg font-semibold text-red-800 mt-8">5. Red Chili Pickle</h3>
        <img src="chilly.png" alt="Red Chili Pickle" className="w-1/6 ml-5 mt-2 inline-block" />
        <p className="mt-2">
          This spicy delicacy uses fresh red chilies stuffed with tangy masala. Best for spice lovers who want a
          fiery twist to their meals.
        </p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-10">Why Choose Us?</h2>
      <ul className="list-square list-inside mt-4">
        <li>100% Natural Ingredients</li>
        <li>No Preservatives or Chemicals</li>
        <li>Homemade Taste and Traditional Recipes</li>
        <li>Hygienic Packaging and Fast Delivery</li>
      </ul>

      <p className="mt-6 mb-10">
        Explore our variety and bring home a taste of tradition with every jar. Pickle Products – A Bite of Heritage!
      </p>
    </div>
  );
}

export default About;
