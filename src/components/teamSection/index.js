import React from "react";
import teamIcon from "../../assets/images/Svg/inventory2.svg";
function TeamSection() {
  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center mt-lg-4">
        <h1 className="intro-title marker">Know Your Numbers</h1>
        <p className="text-align-center mt-2">Unleash the power of precise inventory analytics and scale your </p>
      </div>
      <div className="row d-flex align-items-center">
        <div
          className="col-lg-6 col-md-5 px-3"
          data-aos="fade-zoom-in"
          data-aos-delay="50"
          data-aos-easing="ease-in-back"
        >
          <img className="my-3 img-fluid" src={teamIcon} alt="creative-team" />
        </div>
        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="h3 mb-2">
            Our <strong>Expert Team</strong> delivers the best result.
          </div>
          <p className="text-secondary mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
          <p className="text-secondary mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis
            rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
