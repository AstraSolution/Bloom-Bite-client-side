import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import "./contact.css"
import contactBackground from '../../assets/images/bads/contact-bg.jpg';
import contactSide from '../../assets/images/bads/contact-png.png';
const ContactUs = () => {
  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_i93mpbc', 'template_ph9oa0t', form.current, 'DJ3zTCoZ1I5Ql0zHn')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="contact-section">
    <div className="contact-bg" style={{ backgroundImage: `url(${contactBackground})` }}> 
      <h3 className="text-black">Get in Touch with Us</h3>
      <h2 className="text-black">contact us</h2>
      <div className="line">
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>

    <div className="contact-body">
      <div className="contact-info">
        <div>
          <span><i className="fas fa-mobile-alt"></i></span>
          <span>Phone No.</span>
          <span className="text">1-2392-23928-2</span>
        </div>
        <div>
          <span><i className="fas fa-envelope-open"></i></span>
          <span>E-mail</span>
          <span className="text">mail@company.com</span>
        </div>
        <div>
          <span><i className="fas fa-map-marker-alt"></i></span>
          <span>Address</span>
          <span className="text">2939 Patrick Street, Vicotria TX, United States</span>
        </div>
        <div>
          <span><i className="fas fa-clock"></i></span>
          <span>Opening Hours</span>
          <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
        </div>
      </div>

      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" className="form-control" placeholder="First Name" />
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div>
            <input type="email" name="from_email" className="form-control" placeholder="E-mail" />
            <input type="text" name="phone" className="form-control" placeholder="Phone" />
          </div>
          <textarea rows="5" name="message" placeholder="Message" className="form-control"></textarea>
          <button
                  type="submit"
                  className="bg-[#FF9D00] rounded-full font-rubik font-semibold text-white px-14 py-4 hover:bg-[#eeb75e] w-full"
                >
                  SUBMIT
                </button>
        </form>

        <div>
          <img src={contactSide}alt="" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default ContactUs;
