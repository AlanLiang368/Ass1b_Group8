import React from "react";
import SubmissionForm from "../components/SubmissionForm.js";
import {SERVER_URL} from "../config";
import {useNavigate} from 'react-router-dom';

const SubmitArticle = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    const res = await fetch(SERVER_URL + '/api/articles', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (res.status === 201) {
      alert('Create successfully!');
      navigate('/SEPractice');
    } else {
      alert("Create fail!");
    }
  }
  return (
    <div>
      <h2>Submit Article</h2>
      <p>This will be a form to allow submitters to submit an article for possible inclusion in our SEED repo.</p>
      <SubmissionForm submit={handleSubmit}/>
    </div>
  );
}

export default SubmitArticle;