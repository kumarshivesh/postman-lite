"use client";

import React, { useState } from 'react';
import axios from 'axios';
import styles from './RequestForm.module.css';

const RequestForm = () => {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('');
  const [requestBody, setRequestBody] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse(null);
    setError(null);
    try {
      const requestData = (method === 'PUT' || method === 'POST') ? JSON.parse(requestBody) : undefined;
      console.log('Sending request:', { method, url, requestData });

      const res = await axios({
        method,
        url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: requestData,
      });

      console.log('Received response:', res.data);
      setResponse(res.data);

      // Store the request and response
      await axios.post('/api/store-request', {
        method,
        url,
        requestBody: requestBody || '', // Ensure requestBody is always a string
        responseBody: res.data,
      });
    } catch (err) {
      console.error('Request error:', err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label>
            Method:
            <select value={method} onChange={(e) => setMethod(e.target.value)}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </label>
        </div>
        <div className={styles['form-group']}>
          <label>
            URL:
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </label>
        </div>
        {(method === 'POST' || method === 'PUT') && (
          <div className={styles['form-group']}>
            <label>
              Request Body:
              <textarea
                value={requestBody}
                onChange={(e) => setRequestBody(e.target.value)}
              ></textarea>
            </label>
          </div>
        )}
        <div className={styles['form-group']}>
          <button type="submit" className={styles.button}>Send Request</button>
        </div>
      </form>
      {error && <div className={styles.error}>Error: {error}</div>}
      {response && (
        <div className={styles.response}>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default RequestForm;
