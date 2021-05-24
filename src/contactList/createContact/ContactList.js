import React, { useContext, useEffect, useState } from "react";

import "./createContact.css";

const ContactList = (props) => {
    // console.log(props.contactList);
    // const { contacts, getContactsData } = useContext(contactContext);

    // useEffect(() => {
    //     getContactsData();
    // }, []);

    return (
        <div className="div">
            {props.contactList.map((item, index) => (
                <ul className="list">
                    <li key={item.id}>
                        <img src={item.image} />
                    </li>
                    <li>
                        <mark>Name: </mark>
                        {item.name}
                    </li>
                    <li>
                        <mark>Surname: </mark>
                        {item.surname}
                    </li>
                    <li>
                        <mark>Tel: </mark>
                        {item.phone}
                    </li>
                    <button
                        className="edit"
                        onClick={() => props.handleEdit(index)}
                    >
                        Edit
                    </button>
                    <button
                        className="delete"
                        onClick={() => props.handleDelete(item.id)}
                    >
                        Delete
                    </button>
                </ul>
            ))}
        </div>
    );
};

export default ContactList;
