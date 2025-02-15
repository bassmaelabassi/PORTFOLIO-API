import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Le nom est obligatoire.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Un email valide est requis.";
    if (!formData.message.trim()) errors.message = "Le message est obligatoire.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitted(true);
      alert("Formulaire soumis avec succès !");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div>
        <label htmlFor="name" className="block font-semibold">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700"
          aria-label="Nom"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block font-semibold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700"
          aria-label="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block font-semibold">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700"
          rows="4"
          aria-label="Message"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button 
        type="submit" 
        className={`w-full p-2 rounded text-white ${
          Object.keys(errors).length === 0 && !isSubmitted ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={Object.keys(errors).length !== 0}
      >
        {isSubmitted ? "Envoyé !" : "Envoyer"}
      </button>
    </form>
  )
}

export default Contact
