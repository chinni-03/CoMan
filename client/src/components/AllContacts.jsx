import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import axios from 'axios';
import ContactCard from './ContactCard';


function AllContacts () {

    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8082/api/contacts').then((res) => {
            setContacts(res.data);
        }).catch((err) => {
            console.log('Error from showContacts');
        });
    }, []);
    
    const contactsList =
        contacts.length === 0
            ? 'No contacts available!'
            : contacts.map((contact, k) => <ContactCard contact={ contact } key={ k } />);

    return (
        <>
            <Header />
            <div className="all-contacts">
                <div className="head-contacts">
                    <div className="row">
                        <p className="heading col-lg-2 col-sm-12">Contacts</p>
                        <Link to={'/add-contact'}  className="yellow-btn-sm col-lg-2 col-sm-12">Add Contact</Link>
                    </div>
                </div>
                <hr />
                <div className='container contact-card'>
                    <div className="row">{ contactsList }</div>
                </div>
            </div>
        </>
    )
}

export default AllContacts;