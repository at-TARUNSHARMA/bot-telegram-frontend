import React, { useState } from 'react';
import { updateSettings } from '../services/api';

function Settings() {
  const [apiKey, setApiKey] = useState('');

  const handleUpdate = () => {
    updateSettings({ apiKey }).then(response => {
      console.log('Settings updated:', response.data);
    });
  };

  return (
    <div>
      <h1>Settings</h1>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
        placeholder="Enter API Key"
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Settings;
