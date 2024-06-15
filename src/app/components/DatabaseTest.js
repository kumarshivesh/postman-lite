"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DatabaseTest = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/test-connection');
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchData, 5000); // Refresh data every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/requests/${id}`);
      fetchData();
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Database Test</h1>
      {data ? (
        <div>
          {data.success && data.data.map((request) => (
            <div key={request.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <pre style={{ margin: 0 }}>{JSON.stringify(request, null, 2)}</pre>
              <button
                onClick={() => handleDelete(request.id)}
                style={{
                  padding: '0.5rem 1rem',
                  border: 'none',
                  backgroundColor: '#ff0000',
                  color: 'white',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  marginLeft: '1rem',
                  fontWeight: 'bolder',
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DatabaseTest;
