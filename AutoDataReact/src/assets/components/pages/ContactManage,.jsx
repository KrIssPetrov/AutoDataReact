import React, { useEffect, useState, useContext } from 'react';
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
        if (auth.role !== 1) {
            navigate('/');
        }
    }, [auth, navigate]);

    useEffect(() => {
        setLoading(true);
        const fetchContacts = async () => {
            try {
                const contacts = await contactService.getContacts();
                setContacts(contacts);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch contacts:', error);
                setLoading(false);
            }
        };

        fetchContacts();
    }, []);



     const deleteContact = async (id) => {   
        

       
        try {
            await contactService.removeContact(id);
            const contacts = await contactService.getContacts();
            setContacts(contacts);
        } catch (error) {
            console.error('Failed to delete contact:', error);
        }

     }
    return (
        <>
            <main className='container mt-5'>
                <h1 className='mb-4'>Contact Manager</h1>
                {loading ? (
                    <div className='text-center'>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <table className='table table-striped table-hover'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Contact Name</th>
                                <th scope='col'>Description</th>
                                <th scope='col'>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact, index) => (
                                <tr key={contact.id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{contact.contactName}</td>
                                    <td>{contact.description}</td>
                                    <td>
                                        <img 
                                            src={contact.img} 
                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                                            alt={contact.contactName} 
                                        />
                                    </td>
                                    <td><input type='button' value='X' className='btn btn-danger' onClick={(e) => deleteContact(contact._id)}></input></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </>
    );
};

export default ContactManage;
