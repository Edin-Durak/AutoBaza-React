import React from "react";

const SectionTwo = () => {
  return (
    <section className="section-two">
      <p className="punch-line">
        Mjesto gdje možeš kupiti bolji
        <span style={{ display: "inline-block", transform: "rotate(-5deg)" }}>
          auto
        </span>
        prije komšije...
      </p>
      <div className="car-desktop">
        <img
          src="images/car-desktop.png"
          alt="car"
          className="car-desktop-img"
        />
      </div>
    </section>
  );
};

export default SectionTwo;
