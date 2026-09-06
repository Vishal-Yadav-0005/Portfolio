function Contact() {
  return (
    <section id="contact" className="section">

      <div className="section-container">

        <div className="contact-box">

          <div className="contact-info">

            <span>GET IN TOUCH</span>

            <h2>
              Let's build something
              <strong> amazing together.</strong>
            </h2>

            <p>
              Have a project in mind or want to collaborate?
              Feel free to reach out. I'd love to hear from you.
            </p>

            <div className="contact-details">

              <div>
                <span>📧</span>
                <div>
                  <small>Email</small>
                  <p>vyadav5352@gmail.com</p>
                </div>
              </div>

              <div>
                <span>📍</span>
                <div>
                  <small>Location</small>
                  <p>Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>

            </div>

          </div>

          <form className="contact-form">

            <div className="input-row">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              placeholder="Your Message"
              rows="6"
            ></textarea>

            <button type="submit" className="primary-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;