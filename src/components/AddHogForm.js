import React, { useState } from "react";
function AddHogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    greased: false,
    weight: 0,
    "highest medal achieved": "",
    image: ""
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewHog(formData);
    setFormData({
      name: "",
      specialty: "",
      greased: false,
      weight: 0,
      "highest medal achieved": "",
      image: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="specialty"
        placeholder="Specialty"
        value={formData.specialty}
        onChange={handleChange}
      />
      <input
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight"
        value={formData.weight}
        onChange={handleChange}
      />
      <input
        type="text"
        name="highest medal achieved"
        placeholder="Highest Medal"
        value={formData["highest medal achieved"]}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
