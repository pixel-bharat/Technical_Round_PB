import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
  // write the data required for the form
  });

// write the missing function here and also call for each input box

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

    // On submit handleSubmit
    // Route to submit form data to the server via body of POST request
    // https://klcmart.in:5000/api/jobapplications


    // Write the function to send data to the server HandleSubmit
    // Request method: POST
    // Request body: formData
    // Request headers: { 'Content-Type': 'application/json' }
    // On success: Alert 'Form submitted successfully'
    // On failure: Alert 'Form submission failed'
    // The server responds with the submitted data in the response body Console the response as result
    // The server responds with status code 200 for successful form submission 
   

  return (
    <form  className="container mt-5">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" className="form-control" name="name" value={formData.name}  required />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" className="form-control" name="email" value={formData.email}  required />
      </div>
      <div className="form-group">
        <label>Contact:</label>
        <input type="text" className="form-control" name="contact" value={formData.contact}  required />
      </div>
      <div className="form-group">
        <label>Position:</label>
        <input type="text" className="form-control" name="position" value={formData.position}  required />
      </div>
      <div className="form-group">
        <label>Message:</label>
        <textarea className="form-control" name="message" value={formData.message}  required />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" className="form-control" name="date" value={formData.date}  required />
      </div>
      <div className="form-group">
        <label>Resume:</label>
        <input type="file" className="form-control-file" name="resume" onChange={handleFileChange} required />
      </div>
      <br>
      </br>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;