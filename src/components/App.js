import React, {useState, useEffect} from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import CandidateForm from "./CandidateForm";
import CandidateDetails from "./CandidateDetails";
import EditCandidateForm from "./EditCandidateForm";

function App() {

  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    axios
      .get("https://60d5a2c2943aa60017768b01.mockapi.io/candidate")
      .then((response) => {
        console.log(response.data)
        setCandidates(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the candidates!", error);
      });
  }, []);

  useEffect(() => {

  }, [candidates, selectedCandidate])

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100">

        <Router>
          <Routes>
            <Route path="/candidate/new" element={
              <>
                <Dashboard candidates={candidates} setCandidates={setCandidates} setSelectedCandidate={setSelectedCandidate}/>
                <CandidateForm candidates={candidates} setCandidates={setCandidates} setSelectedCandidate={setSelectedCandidate}/>
              </>
            } />
            <Route path="/candidate/:id" element={
              <>
              <Dashboard candidates={candidates} setCandidates={setCandidates} setSelectedCandidate={setSelectedCandidate}/>
              <CandidateDetails />
            </>
            } />
            <Route path="/" element={
              <>
              <Dashboard candidates={candidates} setCandidates={setCandidates} setSelectedCandidate={setSelectedCandidate}/>
            </>
            } />
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Router>
        {selectedCandidate && (
            <CandidateDetails candidate={selectedCandidate} />
          )}
      </div>
    </Container>
  );
}

export default App;
