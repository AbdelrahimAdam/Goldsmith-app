import React from 'react';

// Define the type for the props the component will receive
interface DesktopSidebarProps {
  onLogout: () => void; // Declare onLogout prop
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ onLogout }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar content */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default DesktopSidebar;

