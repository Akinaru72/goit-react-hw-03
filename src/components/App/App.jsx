import { useState, useEffect } from "react";

import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import initContacts from "../../data/contacts.json";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("localContacts");
    if (!saved) return initContacts;
    const parsed = JSON.parse(saved);
    return parsed.length === 0 ? initContacts : parsed;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("localContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (idContact) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== idContact)
    );
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
