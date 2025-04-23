// src/components/LayoutHeader.tsx
import React from 'react';

interface LayoutHeaderProps {
  title: string;
}

const LayoutHeader: React.FC<LayoutHeaderProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h1>
    </div>
  );
};

export default LayoutHeader;

