import React from "react";
import "../styles/about.css";
import { teamMembers } from "../constants/teamMembers";
import { aboutInfo } from "../constants/aboutInfo";
const About = () => {
  const defaultImage =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

  return (
    <div className="about-container">
      <h1>ABOUT</h1>
      <h3 className="team-subheading">Team Members</h3>
      <div className="team-members-container">
        {teamMembers.map((member, index) => {
          return (
            <div className="team-member" key={index}>
              <img
                className="member-picture"
                src={member.img ? member.img : defaultImage}
                alt={member.name}
              />
              <h4>{member.name}</h4>
              <p>{member.info}</p>
            </div>
          );
        })}
      </div>
      <div className="about-section">
        <h3><b>Goal:</b></h3>
        <p>{aboutInfo.goal}</p>
      </div>

      <div className="about-section">
      <h3>Data Sources: </h3>
        <p>{aboutInfo.dataSources}</p>
      </div>

      <div className="about-section">
      <h3>Methodology: </h3>
        <p>{aboutInfo.methodology}</p>
      </div>

      <div className="about-section">
      <h3>Acknowledgements: </h3>
        {aboutInfo.acknowledgements}
      </div>
    </div>
  );
};

export default About;
