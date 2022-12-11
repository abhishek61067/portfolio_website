import React from "react";
import Aboutimg from "../about.png"

const About = () => {
  return (
  <div className="about-section bg-light">
<div className="container mt-5 ">
    <div className="row title text-center mb-5">
        <h2>about me</h2>
    </div>
    <div className="row">
        <div className="col-md-6">
            <img src={Aboutimg} alt="" width={"100%"} />
        </div>
        <div className="col-md-6">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente numquam obcaecati id nesciunt. Quis, omnis officia quas in alias nihil suscipit quae ipsa quod maxime ipsum blanditiis, dolorum dolor.</p>
        </div>
    </div>
</div>
  </div>
  );
};

export default About;

