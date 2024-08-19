import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/users">Manage Users</Link></li>
        <li><Link to="/settings">Bot Settings</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
