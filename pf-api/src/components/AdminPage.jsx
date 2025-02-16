import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/messages')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Erreur lors de la récupération des Users :', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/messages${id}`, { method: 'DELETE' });
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression du User :', error);
    }
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Page Admin</h1>
      <input
        type="text"
        placeholder="Rechercher par nom"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact._id} className="mb-4 p-4 border rounded">
            <p><strong>Nom :</strong> {contact.name}</p>
            <p><strong>Email :</strong> {contact.email}</p>
            <p><strong>Message :</strong> {contact.message}</p>
            <button
              onClick={() => handleDelete(contact._id)}
              className="mt-2 p-2 bg-red-700 text-white rounded"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
