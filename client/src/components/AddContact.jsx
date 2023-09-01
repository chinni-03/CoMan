import React, { useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function AddContact () {

    const [ contact, setContact ] = useState({
        prefix: '',
        firstName: '',
        middleName: '',
        lastName: '',
        nickName: '',
        typeOfNumber: '',
        contactNumber: '',
        email: '',
        company: '',
        birthday: ''
    });

    const navigate = useNavigate();

    const onChange = (e) => {
        let date = new Date();
        if (e.target.name === 'birthday') {
            date = new Date(e.target.value).toLocaleDateString();
            setContact({ ...contact, [ e.target.name ]: date });
        } else {
            setContact({ ...contact, [ e.target.name ]: e.target.value });
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8082/api/contacts', contact).then((res) => {
            setContact({
                prefix: '',
                firstName: '',
                middleName: '',
                lastName: '',
                nickName: '',
                typeOfNumber: '',
                contactNumber: '',
                email: '',
                company: '',
                birthday: ''
            });
        });
        navigate('/all-contacts');
    }

    const cancelContact = () => {
        navigate('/all-contacts');
    };

    return (
        <>
            <Header />
            <div className="add-contact">
                <div className="form">
                    <p className="heading">Enter contact details</p>
                    <form noValidate onSubmit={onSubmit}>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Prefix:</label>
                                    <input name="prefix" value={contact.prefix} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>First Name:</label>
                                    <input name="firstName" required value={contact.firstName} onChange={onChange} type='text' />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Middle Name:</label>
                                    <input name="middleName" value={contact.middleName} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Last Name:</label>
                                    <input name="lastName" value={contact.lastName} onChange={onChange} type='text' />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Nick Name:</label>
                                    <input name="nickName" value={contact.nickName} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Type of Number:</label>
                                    <select value={contact.typeOfNumber} onChange={onChange} name="typeOfNumber">
                                        <option>Select</option>
                                        <option>Mobile</option>
                                        <option>Home</option>
                                        <option>Office</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Contact Number:</label>
                                    <input name="contactNumber" value={contact.contactNumber} onChange={onChange} required type="Number" min="10" max="10" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Email Address:</label>
                                    <input name="email" value={contact.email} onChange={onChange} type="email" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Company:</label>
                                    <input name="company" value={contact.company} onChange={onChange} type="text" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Birthday:</label>
                                    <input name="birthday" value={contact.birthday} onChange={onChange} type="date" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                            <button onClick={cancelContact} type="reset" className="black-btn mb-30">Cancel</button>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                            <button type="submit" className="black-btn mb-30">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddContact;