import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CandidateForm = ({candidates, setCandidates, setSelectedCandidate}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');
    const [details, setDetails] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setSelectedCandidate("");
    }, [])



    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('https://60d5a2c2943aa60017768b01.mockapi.io/candidate', {
                name,
                age,
                position,
                details,
            })
            .then((response) => {
                console.log('Candidate added:', response.data);
                // setCandidates(response.data)
                candidates.push(response.data);
                setCandidates(candidates)
                setName("");
                setAge("");
                setPosition("");
                setDetails("");

                navigate('/candidate/new'); // Redirect to the dashboard
            })
            .catch((error) => {
                console.error('Error adding candidate:', error);
            });
    };

    return (
        <div>
            <div className="right-section">
            <h2>Add New Candidate</h2>
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
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    );
};

export default CandidateForm;
