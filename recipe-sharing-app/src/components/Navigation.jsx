import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '1rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/add" style={{ marginRight: '1rem' }}>Add Recipe</Link>
      <Link to="/favorites" style={{ marginRight: '1rem' }}>My Favorites</Link>
      <Link to="/recommendations">Recommendations</Link>
    </nav>
  );
};

export default Navigation;
