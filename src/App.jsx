import React, { useState, useEffect } from "react";

export default function ContactsApp() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    // Fetch contacts from the external API
    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="app-container">
      <div className="sidebar">
        <h1>Contacts</h1>
        <button className="breadcrumb-item" onClick={() => setSelectedContact(null)}>{'>'}cls</button>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button
                className="cta-button"
                onClick={() => setSelectedContact(contact)}
              >
                {contact.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="main-content">
        {selectedContact ? (
          <div className="content-card">
            <h2>Contact Details</h2>
            <p>
              ID: {selectedContact.id}, Name: {selectedContact.name}
            </p>
            <p>
              {selectedContact.username}{" "}
              <div className="badge">
                {selectedContact.address.geo.lat},{" "}
                {selectedContact.address.geo.lng}
              </div>
            </p>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedContact.name}</td>
                  <td>{selectedContact.email}</td>
                  <td>{selectedContact.phone}</td>
                  <td>
                    {selectedContact.address.suite},{" "}
                    {selectedContact.address.street},{" "}
                    {selectedContact.address.city},{" "}
                    {selectedContact.address.zipcode}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="additional-info">
              <p>
                <strong>Website:</strong>{" "}
                <a href={selectedContact.website}>{selectedContact.website}</a>
              </p>
              <p>
                <strong>Catchphrase:</strong>{" "}
                {selectedContact.company.catchPhrase}
              </p>
              <p>
                <strong>BS:</strong> {selectedContact.company.bs}
              </p>
            </div>
          </div>
        ) : (
          <p>Select a contact to view details</p>
        )}
      </div>
    </div>
  );
}
