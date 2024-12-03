import React, { useEffect, useState } from 'react';

const Home = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  // API Route to fetch data from the server
  // 'https://imitate.co.in:5501/api/leaverequests'


  return (
    <div className="container mt-5">
      <div className="row">
        {/* Start data mapping Code here  */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Name: {}</h5>
                <p className="card-text">Leave Type: {}</p>
                <p className="card-text">From: {}</p>
                <p className="card-text">To: {}</p>
                <p className="card-text">Remark: {}</p>
                <p className="card-text">Status: {}</p>
              </div>
            </div>
          </div>
          {/* End */}
      </div>
    </div>
  );
};

export default Home;