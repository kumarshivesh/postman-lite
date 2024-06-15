import React from 'react';
import DatabaseTest from './components/DatabaseTest';
import RequestForm from './components/RequestForm';

export default function Home() {
  return (
    <div>
    <h1>Postman Lite</h1>
    <RequestForm />
    <DatabaseTest />
  </div>
  );
}
