import React, { useState, useEffect } from "react";

const SectionOne = () => {
  const calculateCountdown = () => {
    const targetDate = new Date(
      new Date().getFullYear(),
      5,
      1,
      10,
      0,
      0
    ).getTime();
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-one">
      <h1>
        Platforma za efektivnu kupoprodaju
        <span className="break">automobila.</span>
      </h1>
      <h3>Stranica u izradi!</h3>
      <p>
        Dragi naši, naš novi webshop je trenutno u izradi.
        <span className="p-break"> Webshop ćete moći pogledati za:</span>
      </p>
      <div className="countdown">
        <div className="countdown-day">
          <span id="countdown-day">{countdown.days}</span>
          <span>Dana</span>
        </div>
        <div className="countdown-hour">
          <span id="countdown-hour">{countdown.hours}</span>
          <span>Sata</span>
        </div>
        <div className="countdown-minutes">
          <span id="countdown-minutes">{countdown.minutes}</span>
          <span>Minuta</span>
        </div>
        <div className="countdown-seconds">
          <span id="countdown-seconds">{countdown.seconds}</span>
          <span>Sekundi</span>
        </div>
      </div>
      <div className="contact-links">
        <p>
          Pratite nas na društvenim mrežama za <br />
          sve novosti:
        </p>
        <ul className="contact-links">
          <a href="#" className="contact-link">
            <img src="../public/images/instagram.png" alt="instagram-icon" />
          </a>
          <a href="#" className="contact-link">
            <img src="../public/images/facebook.png" alt="facebook-icon" />
          </a>
          <a href="#" className="contact-link">
            <img src="../public/images/twitter.png" alt="twitter-icon" />
          </a>
        </ul>
      </div>
    </section>
  );
};

export default SectionOne;
