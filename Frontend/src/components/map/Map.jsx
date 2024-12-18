

import React from 'react';

const Map = (props) => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7367.230356186413!2d76.90395354659665!3d22.593491767907285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d16d049a07e11%3A0xfafab0e267077f72!2sKhategaon%2C%20Madhya%20Pradesh%20455336!5e0!3m2!1sen!2sin!4v1714028645698!5m2!1sen!2sin"
        width={props.w}
        height={props.h}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
    </div>
  );
};

export default Map;

