import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function ShowContact (props) {

    const [contact, setContact] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8082/api/contacts/${id}`).then((res) => {
            setContact(res.data);
        }).catch((err) => {
            console.log('Error from ShowContact');
        });
    }, [ id ]);
    
    const onDeleteClick = (id) => {
        axios.delete(`http://localhost:8082/api/contacts/${id}`).then((res) => {
            navigate('/all-contacts');
        }).catch((err) => {
            console.log('Error from ShowContact_DeleteClick');
        });
    };

    const contactDetail = (
        <>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Prefix:</label>
                        <p>{ contact.prefix }</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>First Name:</label>
                        <p>{ contact.firstName }</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Middle Name:</label>
                        <p>{ contact.middleName }</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Last Name:</label>
                        <p>{ contact.lastName }</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Nick Name:</label>
                        <p>{ contact.nickName }</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Type of Number:</label>
                        <p>{ contact.typeOfNumber }</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Contact Number:</label>
                        <p>{ contact.contactNumber }</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Email Address:</label>
                        <p>{ contact.email }</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Company:</label>
                        <p>{ contact.company }</p>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <div className="input">
                        <label>Birthday:</label>
                        <p>{ contact.birthday }</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6 col-sm-12">
                <button type="button" className="black-btn red-btn mb-30" onClick={() => {
                    onDeleteClick(contact._id);
                }}>Delete Contact</button>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <Link className="black-btn mb-30" to={`/edit-contact/${contact._id}`} style={{textDecoration: 'none'}}>Edit Contact</Link>
                </div>
            </div>
        </>
    );

    return (
        <>
            <Header />
            <div className="all-contacts">
                <p className="heading contact">{ contact.prefix + " " + contact.firstName + " " +contact.middleName + " " + contact.lastName}</p>
            </div>
            <div className='col-md-10 m-auto'>{contactDetail}</div>
        </>
    )
}

export default ShowContact;