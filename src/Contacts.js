import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('contactForm');
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "name" && /[^a-zA-Z\s]/.test(value)) return;

    
    if (name === "phone" && /[^0-9]/.test(value)) return;

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) {
      errs.name = "Name is required";
    }

    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      errs.email = "Invalid email format";
    }

    if (!formData.phone.match(/^\d{10}$/)) {
      errs.phone = "Phone must be 10 digits";
    }

    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      localStorage.setItem('contactForm', JSON.stringify(formData));
      alert('Message saved to localStorage!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-800 via-green-300 from-white p-6 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold text-green-800 mb-8">Contact Us</h2>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <div className="bg-green-400 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-green-900 mb-4">Get in Touch</h3>
          <p className="text-green-800 mb-4">
            Have questions about our pickles? Reach out to us anytime.
          </p>
          <ul className="space-y-2 text-green-900 py-8">
            <li><strong>📍 Address:</strong> 123 Pickle Street, Chennai, India</li>
            <li><strong>📞 Phone:</strong> +91 98765 43210</li>
            <li><strong>📧 Email:</strong> contact@pickleworld.com</li>
          </ul>
          <footer className="text-gray-800 p-4 text-center mr-60">
            <div className="flex justify-center space-x-6 text-2xl">
              <i className="fab fa-linkedin hover:text-gray-600 text-3xl"></i>
              <i className="fab fa-instagram hover:text-gray-600 text-3xl"></i>
            </div>
          </footer>
        </div>

        <form className="p-8 bg-green-400 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.name && <p className="text-red-700 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.email && <p className="text-red-700 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (10 digits)"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          {errors.phone && <p className="text-red-700 text-sm">{errors.phone}</p>}

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
          {errors.message && <p className="text-red-700 text-sm">{errors.message}</p>}

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-xl hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
