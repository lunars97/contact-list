import React, { useState } from "react";
import AddContact from "./contactList/addContact/AddContact";
import ContactList from "./contactList/createContact/ContactList";
import EditModal from "./contactList/EditModal/EditModal";

function App() {
    let [contactList, setContactList] = useState([]);

    let [modal, setModal] = useState(false);
    let [editItem, setEditItem] = useState({});

    function handleContact(obj) {
        console.log(obj);
        let contacts = [...contactList];
        contacts.push(obj);
        setContactList(contacts);
    }
    function handleDelete(id) {
        let newContactList = contactList.filter((item) => {
            if (item.id !== id) {
                return item.id !== id;
            }
        });
        setContactList(newContactList);
    }

    function handleEdit(index) {
        setModal(true);
        setEditItem(contactList[index]);
    }

    function handleSaveTask(newTask) {
        // console.log(newTask.id, "fghddj");
        const newSaveTask = contactList.map((item) => {
            if (item.id === newTask.id) {
                return newTask;
            }
            return item;
        });
        setContactList(newSaveTask);
        handleCloseModal();
    }

    function handleCloseModal() {
        setModal(false);
    }

    return (
        <div className="app">
            <AddContact handleContact={handleContact} />
            <ContactList
                contactList={contactList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
            {modal ? (
                <EditModal
                    editItem={editItem}
                    handleSaveTask={handleSaveTask}
                    handleCloseModal={handleCloseModal}
                />
            ) : null}
        </div>
    );
}

export default App;
