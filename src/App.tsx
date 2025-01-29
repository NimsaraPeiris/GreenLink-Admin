import { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ChartBarIcon, UsersIcon, TruckIcon, ExclamationCircleIcon, Cog6ToothIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline';

// Fix for default marker icon
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

function App() {
  const [activeTab] = useState('Dashboard');

  const stats = [
    { title: 'Total Active Containers', value: '1,235' },
    { title: 'Deliveries in Progress', value: '56' },
    { title: 'Pending Issues', value: '3' },
    { title: 'Total Earnings (Monthly)', value: 'LKR1,265,460' },
  ];

  const alerts = [
    { type: 'error', message: 'Temperature issue detected in Container #A123' },
    { type: 'warning', message: 'Delivery delay for Shipment #B456' },
  ];

  const sidebarItems = [
    { name: 'Dashboard', icon: ChartBarIcon, active: true },
    { name: 'User Management', icon: UsersIcon },
    { name: 'Shipment Monitoring', icon: TruckIcon },
    { name: 'Report Analytics', icon: DocumentChartBarIcon },
    { name: 'Blockchain Logs', icon: ExclamationCircleIcon },
    { name: 'Settings', icon: Cog6ToothIcon },
  ];

  const position: [number, number] = [7.8731, 80.7718]; // Center of Sri Lanka

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-greenlink">GreenLink</h1>
        </div>
        <nav className="mt-4">
          {sidebarItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={`flex items-center px-4 py-3 text-gray-700 ${
                item.active ? 'bg-green-50 text-greenlink border-r-4 border-greenlink' : 'hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Dashboard Overview</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div key={stat.title} className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-sm text-gray-500 mb-2">{stat.title}</h3>
                <p className="text-2xl font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Container Locations</h3>
            </div>
            <MapContainer center={position} zoom={8}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} />
            </MapContainer>
          </div>

          {/* Alerts Section */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Live Alerts</h3>
            </div>
            <div className="p-4">
              {alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 mb-2 rounded ${
                    alert.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-yellow-50 text-yellow-700'
                  }`}
                >
                  <ExclamationCircleIcon className="w-5 h-5 mr-2" />
                  {alert.message}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;