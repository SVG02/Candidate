import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Dashboard/dashboard.css";

const EditCandidateForm = ({ candidates, setCandidates, setSelectedCandidate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const candidate = candidates.find((c) => c.id === id);

  const [name, setName] = useState(candidate?.name || '');
  const [age, setAge] = useState(candidate?.age || '');
  const [position, setPosition] = useState(candidate?.position || '');
  const [details, setDetails] = useState(candidate?.details || '');

  useEffect(() => {
    setSelectedCandidate(candidate);
  }, [candidate, setSelectedCandidate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`, {
        name,
        age,
        position,
        details,
      })
      .then((response) => {
        const updatedCandidates = candidates.map((c) =>
          c.id === id ? response.data : c
        );
        setCandidates(updatedCandidates);
        setSelectedCandidate(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating candidate:', error);
      });
  };

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <div className="right-section active">
      <h2>Edit Candidate</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} required />
        </div>
        <div>
          <label>Details:</label>
          <textarea value={details} onChange={(e) => setDetails(e.target.value)} required></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditCandidateForm;
