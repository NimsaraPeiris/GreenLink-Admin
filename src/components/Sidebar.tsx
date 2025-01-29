import { ChartBarIcon, UsersIcon, TruckIcon, ExclamationCircleIcon, Cog6ToothIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const sidebarItems = [
  { name: 'Dashboard', icon: ChartBarIcon, path: '/' },
  { name: 'User Management', icon: UsersIcon, path: '/users' },
  { name: 'Shipment Monitoring', icon: TruckIcon, path: '/shipments' },
  { name: 'Report Analytics', icon: DocumentChartBarIcon, path: '/reports' },
  { name: 'Blockchain Logs', icon: ExclamationCircleIcon, path: '/blockchain' },
  { name: 'Settings', icon: Cog6ToothIcon, path: '/settings' },
];

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-greenlink">GreenLink</h1>
      </div>
      <nav className="mt-4">
        {sidebarItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 text-gray-700 ${
                isActive ? 'bg-green-50 text-greenlink border-r-4 border-greenlink' : 'hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="w-6 h-6 mr-3" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;