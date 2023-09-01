import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function EditContact (props) {
    const [update, updateContact] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8082/api/contacts/${ id }`).then((res) => {
            updateContact({
                prefix: res.data.prefix,
                firstName: res.data.firstName,
                middleName: res.data.middleName,
                lastName: res.data.lastName,
                nickName: res.data.nickName,
                typeOfNumber: res.data.typeOfNumber,
                contactNumber: res.data.contactNumber,
                email: res.data.email,
                company: res.data.company,
                birthday: res.data.birthday
            });
        }).catch((err) => {
            console.log('Error from ShowContact');
        });
    }, [ id ]);

    const onChange = (e) => {
        updateContact({ ...update, [ e.target.name ]: e.target.value });
    };

    const onClick = (e) => {
        updateContact({...update, [ e.target.name ]: '' });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            prefix: update.prefix,
            firstName: update.firstName,
            middleName: update.middleName,
            lastName: update.lastName,
            nickName: update.nickName,
            typeOfNumber: update.typeOfNumber,
            contactNumber: update.contactNumber,
            email: update.email,
            company: update.company,
            birthday: update.birthday
        }

        axios.put(`http://localhost:8082/api/contacts/${id}`, data).then((res) => {
            navigate(`/show-contact/${id}`);
        });
    }

    const cancelContact = () => {
        window.location.reload();
    };

    return (
        <>
            <Header />
            <div className="add-contact">
                <div className="form">
                    <p className="heading">Edit { update.prefix + " " + update.firstName + " " + update.middleName + " " + update.lastName }</p>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Prefix:</label>
                                    <input name="prefix" value={update.prefix} onClick={onClick} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>First Name:</label>
                                    <input name="firstName" value={update.firstName} required onClick={onClick} onChange={onChange} type='text' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Middle Name:</label>
                                    <input name="middleName" value={update.middleName} onClick={onClick} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Last Name:</label>
                                    <input name="lastName" value={update.lastName} onClick={onClick} onChange={onChange} type='text' />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Nick Name:</label>
                                    <input name="nickName" value={update.nickName} onClick={onClick} onChange={onChange} type='text' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Type of Number:</label>
                                    <select value={update.typeOfNumber} onClick={onClick} onChange={onChange} name="typeOfNumber">
                                        <option>Select</option>
                                        <option>Mobile</option>
                                        <option>Home</option>
                                        <option>Office</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Contact Number:</label>
                                    <input name="contactNumber" value={update.contactNumber} required onClick={onClick} onChange={onChange} type="Number" min="10" max="10" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Email Address:</label>
                                    <input name="email" value={update.email} onClick={onClick} onChange={onChange} type="email" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Company:</label>
                                    <input name="company" value={update.company} onClick={onClick} onChange={onChange} type="text" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="input">
                                    <label>Birthday:</label>
                                    <input name="birthday" value={update.birthday} onClick={onClick} onChange={onChange} type="date" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                            <button onClick={cancelContact} type="reset" className="black-btn mb-30">Cancel</button>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                            <button type="submit" className="black-btn mb-30">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EditContact;