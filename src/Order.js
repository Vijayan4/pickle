import React, { useState } from 'react';
import './Order.css';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    pickleType: '',
    quantity: 1,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }

    const phonePattern = /^[6-9]\d{9}$/;
    if (!phonePattern.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number';
    }

    if (!formData.pickleType) {
      newErrors.pickleType = 'Please select a pickle';
    }

    if (formData.quantity < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Thank you, ${formData.name}! Your order for ${formData.quantity} x ${formData.pickleType} has been placed.`);
      
    }
  };

  return (
    <div className="order-container">
      <h2>Order Your Favorite Pickle</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <label>Full Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Address</label>
        <textarea name="address" value={formData.address} onChange={handleChange} />
        {errors.address && <p className="error">{errors.address}</p>}

        <label>Phone Number</label>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Select Pickle</label>
        <select name="pickleType" value={formData.pickleType} onChange={handleChange}>
          <option value="">-- Select --</option>
          <option value="Mango Pickle">Mango Pickle</option>
          <option value="Lemon Pickle">Lemon Pickle</option>
          <option value="Garlic Pickle">Garlic Pickle</option>
          <option value="Mixed Pickle">Mixed Pickle</option>
          <option value="Amla Pickle">Amla Pickle</option>
        </select>
        {errors.pickleType && <p className="error">{errors.pickleType}</p>}

        <label>Quantity</label>
        <input type="number" name="quantity" min="1" value={formData.quantity} onChange={handleChange} />
        {errors.quantity && <p className="error">{errors.quantity}</p>}

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Order;
