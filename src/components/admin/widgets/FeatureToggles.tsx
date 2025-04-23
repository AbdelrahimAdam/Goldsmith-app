// src/components/admin/widgets/FeatureToggles.tsx

import React, { useState } from 'react';

interface FeatureToggle {
  id: string;
  name: string;
  isEnabled: boolean;
}

const FeatureToggles: React.FC = () => {
  // Sample feature toggles
  const [featureToggles, setFeatureToggles] = useState<FeatureToggle[]>([
    { id: '1', name: 'Dark Mode', isEnabled: true },
    { id: '2', name: 'Beta Features', isEnabled: false },
    { id: '3', name: 'New Dashboard', isEnabled: true },
  ]);

  const toggleFeature = (id: string) => {
    setFeatureToggles((prevToggles) =>
      prevToggles.map((toggle) =>
        toggle.id === id ? { ...toggle, isEnabled: !toggle.isEnabled } : toggle
      )
    );
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-lg font-semibold text-yellow-300 mb-4">Feature Toggles</h2>
      <div className="space-y-4">
        {featureToggles.map((toggle) => (
          <div key={toggle.id} className="flex items-center justify-between">
            <span className="text-gray-200">{toggle.name}</span>
            <button
              onClick={() => toggleFeature(toggle.id)}
              className={`px-4 py-2 rounded-lg transition ${
                toggle.isEnabled ? 'bg-green-500' : 'bg-red-500'
              } text-white`}
            >
              {toggle.isEnabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureToggles;

