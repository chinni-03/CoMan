import React from "react";
import { Link } from "react-router-dom";

function ContactCard (props) {

    const contact = props.contact;

    return (
        <>
            <div className="card col-lg-2 col-sm-12">
                <div className='desc row'>
                    <Link className="name" to={`/show-contact/${contact._id}`}>{contact.firstName + " " + contact.middleName + " " + contact.lastName}</Link>
                    <p>{contact.contactNumber}</p>
                    <p>{contact.typeOfNumber}</p>
                </div>
            </div>
        </>
    );
}

export default ContactCard;