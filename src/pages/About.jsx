import React from "react";
import "../styles/about.css";
import { teamMembers } from "../constants/teamMembers";
import { aboutInfo } from "../constants/aboutInfo";
const About = () => {
  const defaultImage =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

  return (
    <div className="page-container about-container">
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
      <div>
        <h4>Goal:</h4>
        <p>{aboutInfo.goal}</p>
      </div>

      <div>
        <h4>Data Sources: </h4>
        {aboutInfo.dataSources}
      </div>
      
      <div>
        <h4>Methodology: </h4>
        <p>{aboutInfo.methodology}</p>
      </div>

      <div>
        <h4>Acknowledgements: </h4>
        {aboutInfo.acknowledgements}
      </div>
    </div>
  );
};

export default About;
