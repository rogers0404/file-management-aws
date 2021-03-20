import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';
import photo1 from '../../assets/jean.png'
import photo2 from '../../assets/fotoProfile.jpeg'
import linkedin1 from '../../assets/linkedin.png'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section className="my-1">
        <div className="d-flex justify-content-center">

            <div className="card text-center w-75 d-flex justify-content-center">
                <div className="card-header m-1 textFontColor font-weight-bold">Contact</div>
                <div className="card-body">
                <div className="card-deck textFontColor">                        
                    <div className="card">
                      <div className="card-body justify-content-left m-0 text-sm-left">
                          <form id="contact-form" onSubmit={handleSubmit}>                              
                                <div>
                                    <h4 className="text-center w-100">Let's Discuss your Questions</h4>
                                    <p className="text-font-c text-center w-100">Please fill in the form below and we will 
                                    contact you for more details
                                    </p> 
                                </div>
                                <div className="w-100 row m-0 textFontColor">                                  
                                  <div className="w-25 small-text textFontColor" >
                                      <label htmlFor="name">Name </label>
                                  </div>
                                  <div className="w-75 pl-1">
                                    <input className="w-75" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                                  </div>                  
                              </div>
                              <div className="w-100 row m-0">
                                  <div className="w-25 small-text textFontColor">
                                      <label htmlFor="email">Email</label>
                                  </div>
                                  <div className="w-75 pl-1">
                                      <input className="w-75"  type="email" name="email" defaultValue={email} onBlur={handleChange} />
                                  </div>                                
                              </div>
                              <div className="w-100 row  m-0" style={{ color: '#14213d' }}>
                                  <div className="w-25 textFontColor">
                                      <label htmlFor="message">Message</label>
                                  </div>
                                  <div className="w-75 pl-1">
                                      <textarea className="w-75" name="message" rows="4" defaultValue={message} onBlur={handleChange} />
                                  </div>
                                </div>
                              {errorMessage && (
                                <div className="w-100 bg-primary textFontColor">
                                  <p className="error-text textFontColor font-weight-bold" >{errorMessage}</p>
                                </div>
                              )}
                              <button className="btn btn-primary" data-testid="button" type="submit">Submit</button>
                          </form>
                      </div>
                  </div>
                  <div className="card textFontColor">
                      <div className="card-body justify-content-left">
                          <div className="w-100 textFontColor">
                              <h1>iT Solutions</h1>
                          </div>
                        <div className="w-100 textFontColor">
                            <p>Any questions? Let me know and I'll be happy to talk to you!</p>
                        </div>
                        <div className="w-100 textFontColor">
                            <p>email: <a href="mailto:rogers.ramirez2008@gmail.com">rogers.ramirez2008@gmail.com</a></p>
                            <p>email: <a href="mailto: marvaljhg@gmail.com"> marvaljhg@gmail.com</a></p>
                        </div>
                      </div>                    
                  </div>
                </div>

                <div><p><br/></p></div>
                
                <div className="card text-center d-flex justify-content-center">
                  <div className="card-header m-1 textFontColor font-weight-bold">Our Team</div>
                    <div className="card-body">
                      <div className="card-deck textFontColor">
                        <div className="card textFontColor">
                              <img className="card-img-top rounded-circle" src={photo1} alt="jean" />
                              <div className="card-body justify-content-left">
                                  <h5 className="card-title">Jean</h5>
                                  <p className="card-text">Chief Technology Officer</p>
                                <div className=" card-footer w-100 textFontColor">
                                  <a className="text-white" href="https://linkedin.com/in/jean-carlos-marval" target="blank">
                                    <img className="img-fluid brandImageSize2 w-25" src={linkedin1} alt="Jean"/>
                                  </a>
                                </div>
                              </div>                    
                          </div>

                          <div className="card textFontColor">
                              <img className="card-img-top rounded-circle" src={photo2} alt="rogers" />
                              <div className="card-body justify-content-left">
                                  <h5 className="card-title">Rogers</h5>
                                  <p className="card-text">Business Development Manager</p>
                                <div className=" card-footer w-100 textFontColor">
                                  <a className="text-white" href="https://www.linkedin.com/in/rogers-ramirez-496a66b6" target="blank">
                                    <img className="img-fluid brandImageSize2 w-25" src={linkedin1} alt="rogers"/>
                                  </a>
                                </div>
                              </div>                    
                          </div>
                    </div>
                  </div>
                </div>

              </div>
              </div>
            
        </div>

        
    </section>

  );
}

export default ContactForm;
