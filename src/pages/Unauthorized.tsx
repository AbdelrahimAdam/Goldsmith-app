import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => (
  <div className="flex items-center justify-center min-h-screen bg-red-50 text-red-600 text-center 
px-4">
    <div>
      <h1 className="text-4xl font-bold mb-4">403 – Unauthorized</h1>
      <p className="mb-6 text-lg">You don’t have access to this page.</p>
      <Link to="/" className="text-yellow-600 hover:underline font-semibold">
        Go back to Home
      </Link>
    </div>
  </div>
);

export default Unauthorized;

