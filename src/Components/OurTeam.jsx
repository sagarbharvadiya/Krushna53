import React from "react";
// import harshal from "../img/harshal.jpg";
import sagar from "../img/sagar.jpeg";
import vinod from "../img/vinod.png";
import alka from "../img/alka.jpeg";
import tushar from "../img/tushar.jpg";
const OurTeam = () => {
return (
<>
    <section className="team" id="team">
        <div className="commonWidth">
            <div className="title">
                <h2 className="commonTitleFontSize">Our Team</h2>
            </div>
            <div className="team_image">
{/*                 <<div className="image1">
                    <img src={harshal} alt="Harshal" />
                    <div className="caption">
                        <h4>Harshal Pradhan </h4>
                        <p>Drupal Developer</p>
                        <a href="https://bit.ly/harshal-pradhan-krushna53" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>  */}
                <div className="image2">
                    <img src={sagar} alt="Sagar" loading="lazy"/>
                    <div className="caption">
                        <h4>Sagar Bharvadiya</h4>
                        <p>Frontend UI Developer (Reactjs)</p>
                        <a href="https://bit.ly/sagar-bharvadiya-krushna53" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
                <div className="image3">
                    <img src={vinod} alt="vinod" loading="lazy"/>
                    <div className="caption">
                        <h4>Vinod Keshariya</h4>
                        <p>Frontend UI Developer</p>
                        <a href="https://www.linkedin.com/in/ahir-vinod-keshariya-a747562b2/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
                <div className="image4">
                    <img src={alka} alt="alka" loading="lazy"/>
                    <div className="caption">
                        <h4>Alka Singh</h4>
                        <p>ReactJs Developer</p>
                        <a href="https://www.linkedin.com/in/alka-kumari-b357261b6/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
                <div className="image5">
                    <img src={tushar} alt="tushar" loading="lazy"/>
                    <div className="caption">
                        <h4>Tushar Dontulwar</h4>
                        <p>Web Development Intern</p>
                        <a href="https://www.linkedin.com/in/tushar-dontulwar-53969127a/" target="_blank" rel="noreferrer">
                            <i className="ri-linkedin-box-fill icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
);
};

export default OurTeam;