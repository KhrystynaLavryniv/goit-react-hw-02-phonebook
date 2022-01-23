import React from "react";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList({ visibleContacts, onDelete }) {
  return (
    <>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          id={id}
          onClick={onDelete}
        ></ContactItem>
      ))}
    </>
  );
}
