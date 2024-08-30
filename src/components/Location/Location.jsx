/* eslint-disable react/no-unknown-property */
import "./Location.css";

const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container">
          <h1 className="heading">Location to visit</h1>

          <div className="rounded">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.634597123!2d74.3587478!3d31.5203696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483b3b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700902186385!5m2!1sen!2s"
              width="100%"
              height="360"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              style={{ borderRadius: "20px" }}
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
