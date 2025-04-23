// src/components/MobileNavLink.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  label: string;
  onClick?: () => void;
}

const MobileNavLink: React.FC<Props> = ({ to, label, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-white text-lg font-medium px-2 py-1 hover:text-yellow-400 transition"
    >
      {label}
    </Link>
  );
};

export default MobileNavLink;

