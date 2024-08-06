import { useState, useEffect, useContext } from 'react';
import *  as contactService from './../services/contactService';
import Swal from 'sweetalert2';





const Contacts = () => {


  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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



  const onSubmit = async (e) => {
    e.preventDefault();


    Swal.fire({

      icon: "success",
      title: `Success Send email ! `,
      text: 'Thank you for your message',
      showConfirmButton: false,
      timer: 1500,

    });



  };

  return (
    <>
      <main id="" className="main">
        <section className="section contact">
          <br></br>
          <br></br>
          <br></br>
          <div className="pagetitle">
            <h1>Contact</h1>

          </div>
          <br></br>

          <div className="row gy-4">

            <div className="col-xl-6">

              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-geo-alt"></i>
                    <h3>Address</h3>
                    <p>A108 Adam Street,<br />New York, NY 535022</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-telephone"></i>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-envelope"></i>
                    <h3>Email Us</h3>
                    <p>info@example.com<br />contact@example.com</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-clock"></i>
                    <h3>Open Hours</h3>
                    <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-xl-6">
              <div className="card p-4">
                <form onSubmit={onSubmit} className="php-email-form">
                  <div className="row gy-4">

                    <div className="col-md-6">
                      <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                    </div>

                    <div className="col-md-6 ">
                      <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                    </div>

                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message"></div>
                      <div className="sent-message">Your message has been sent. Thank you!</div>

                      <button type="submit">Send Message</button>
                    </div>

                  </div>
                </form>
              </div>

            </div>

          </div>

        </section>


        <main className='container mt-5'>

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
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </main>

      </main>
    </>

  )

}

export default Contacts;