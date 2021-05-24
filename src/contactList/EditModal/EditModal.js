import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
    const [itemImg, setItemImg] = useState(props.editItem.img);
    const [itemName, setItemName] = useState(props.editItem.name);
    const [itemSurname, setItemSurname] = useState(props.editItem.surname);
    const [itemPhone, setItemPhone] = useState(props.editItem.phone);

    function handleSave() {
        const newContact = {
            ...props.editItem,
            image: itemImg,
            name: itemName,
            surname: itemSurname,
            phone: itemPhone,
        };

        props.handleSaveTask(newContact);
        console.log(newContact);
    }

    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button
                        className="close-btn"
                        onClick={props.handleCloseModal}
                    >
                        ✖️
                    </button>
                    <input
                        onChange={(e) => setItemImg(e.target.value)}
                        value={itemImg}
                        type="url"
                        accept="image/*"
                        placeholder="Image"
                        className="inp-edit"
                    />
                    <input
                        onChange={(e) => setItemName(e.target.value)}
                        value={itemName}
                        type="text"
                        className="inp-edit"
                        placeholder="Name"
                    />
                    <input
                        onChange={(e) => setItemSurname(e.target.value)}
                        value={itemSurname}
                        type="text"
                        className="inp-edit"
                        placeholder="Surname"
                    />
                    <input
                        onChange={(e) => setItemPhone(e.target.value)}
                        value={itemPhone}
                        type="number"
                        className="inp-edit"
                        placeholder="Phone number"
                    />
                    <br></br>
                    <button className="edit-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
