import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';
import * as contactService from '../services/contactService';
import { useNavigate } from 'react-router-dom';


const ContactManage = () => {
    const { auth } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (auth.role != 1) {

            navigate('/');
        }
    }, [auth])


    useEffect(() => {
        setLoading(true)
        const fetchContacts = async () => {
            try {
                const contacts = await contactService.getContacts();
                setContacts(contacts);
                setLoading(false)
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
                setLoading(false)
            }
        };

        fetchContacts();
    }, []);



    return (
        <>
            <main className='cosntainer mt-5'>
                <div>Contact manager</div>
                {contacts.map(contact => (
                    <div key={contact.id}>
                        <div>{contact.contactName}</div>
                        <div>{contact.description}</div>
                        <img src={contact.img} alt={contact.contactName} />
                    </div>
                ))}

            </main>
        </>
    )
}

export default ContactManage;
