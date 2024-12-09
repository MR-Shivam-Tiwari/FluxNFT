'use client';

import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts`);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacts/${id}`, {
        method: 'DELETE',
      });
      setContacts(contacts.filter((contact) => contact._id !== id));
      setSelectedContact(null);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-orange-500">Contact Submissions</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <div key={contact._id} className="bg-white rounded-lg shadow-md p-6 border border-orange-200">
            <h3 className="text-xl font-semibold mb-2 text-orange-500">{contact.name}</h3>
            <p className="text-gray-600 mb-2">Email: {contact.email}</p>
            <p className="text-gray-600 mb-4">Submitted on: {new Date(contact.createdAt).toLocaleDateString()}</p>
            <div className='flex justify-between'>
              <button
                onClick={() => setSelectedContact(contact)}
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
              >
                View Details
              </button>
              <div className='flex gap-2'>
                <button
                  onClick={() => deleteContact(contact._id)}
                  className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </button>
                <button
                  className="bg-gray-500 text-white px-4 rounded hover:bg-gray-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-orange-500">{selectedContact.name}</h3>
              <button onClick={() => setSelectedContact(null)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 mb-4">
              <p><span className="font-semibold">Email:</span> {selectedContact.email}</p>
              <p><span className="font-semibold">Phone:</span> {selectedContact.phone}</p>
              <p><span className="font-semibold">Reason:</span> {selectedContact.reason}</p>
              <p><span className="font-semibold">Message:</span> {selectedContact.message}</p>
              <p><span className="font-semibold">Submitted on:</span> {new Date(selectedContact.createdAt).toLocaleString()}</p>
            </div>
            <button
              onClick={() => deleteContact(selectedContact._id)}
              className="bg-red-500 w-full text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 flex justify-center items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-4h4m-4 0a2 2 0 014 0m-4 0H7a2 2 0 00-2 2v0m14 0a2 2 0 00-2-2h-3m-4 4v10m4-10v10" />
              </svg>
              Delete Contact
            </button>
          </div>
        </div>
      )}


    </div>
  );
}