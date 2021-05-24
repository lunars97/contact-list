import React, { useState } from "react";

import "./addContact.css";

const AddContact = (props) => {
    let [image, setImage] = useState("");
    let [name, setName] = useState("");
    let [surname, setSurname] = useState("");
    let [phone, setPhone] = useState();

    function handleClick() {
        let newContact = {
            image: image,
            name: name,
            surname: surname,
            phone: phone,
            id: Date.now(),
        };
        props.handleContact(newContact);
    }

    return (
        <>
            <p>Contact List</p>
            <input
                type="url"
                accept="image/*"
                placeholder="Image Url"
                className="input"
                id="img"
                onChange={(e) => setImage(e.target.value)}
                required
            />
            <br></br>
            <input
                className="input"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
            ></input>
            <br></br>
            <input
                className="input"
                placeholder="Surname"
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                requered
            ></input>
            <br></br>
            <input
                className="input"
                placeholder="Telephone"
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                requered
            ></input>
            <br></br>
            <button className="btnAdd" onClick={() => handleClick()}>
                Save
            </button>
        </>
    );
};

export default AddContact;
