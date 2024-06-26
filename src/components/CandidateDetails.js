import React from "react";
import "./Dashboard/dashboard.css";
import EditCandidateForm from "./EditCandidateForm";

const CandidateDetails = ({ candidate, onEdit, onDelete }) => {
  if (!candidate) {
    return <div>Select a candidate to see details</div>;
  }

  return (
    <div className="right-section active">
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <h2>{candidate.name}</h2>
      <img src={candidate.profile_picture} alt={`${candidate.name}'s profile`} />
      <p>Name: {candidate.name}</p>
      <p>Address: {candidate.address}</p>
      <p>Phone: {candidate.phone}</p>
      <p>Email: {candidate.email}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Hobbies: {candidate.hobbies.join(', ')}</p>

      <h3>Education</h3>
      <ul>
        {candidate.education.map((edu, index) => (
          <li key={index}>
            <p>Institute: {edu.institute}</p>
            <p>Degree: {edu.degree}</p>
            <p>Percentage: {edu.percentage}</p>
            <p>Pass Out Year: {edu.pass_out_year}</p>
          </li>
        ))}
      </ul>

      <h3>Skills</h3>
      <ul>
        {candidate.skills.map((skill, index) => (
          <li key={index}>
            <p>Name: {skill.name}</p>
            <p>Experience: {skill.experience} years</p>
          </li>
        ))}
      </ul>

      <h3>Experience</h3>
      <ul>
        {candidate.experience.map((exp, index) => (
          <li key={index}>
            <p>Company: {exp.company}</p>
            <p>Project: {exp.project}</p>
            <p>Role: {exp.role}</p>
            <p>Team Size: {exp.team_size}</p>
            <p>Duration: {exp.duration_from} to {exp.duration_to}</p>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CandidateDetails;
