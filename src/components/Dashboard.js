import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard/dashboard.css";
import CandidateDetails from "./CandidateDetails";

const Dashboard = ({ candidates, selectedCandidate, setSelectedCandidate }) => {
  const handleCandidateClick = (id) => {
    const candidate = candidates.find((candidate) => candidate.id === id);
    setSelectedCandidate(candidate);
  };

  return (
    <div className="App">
      <div className="dashboard">
        <div className="left-section">
          <h2>Candidate List</h2>
          <ul>
            {candidates.map((candidate) => (
              <li key={candidate.id}>
                <Link
                  to={`/candidate/${candidate.id}`}
                  onClick={() => handleCandidateClick(candidate.id)}
                >
                  {candidate.name}
                </Link>
              </li>
            ))}
          </ul>
          <button>
            <Link to="/candidate/new">Add Candidate</Link>
          </button>
        </div>
        <div className={`right-section ${selectedCandidate ? 'active' : ''}`}> {/* Add active class if selectedCandidate is not null */}
          {selectedCandidate ? (
            <CandidateDetails candidate={selectedCandidate} />
          ) : (
            <div>Select a candidate to see details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;