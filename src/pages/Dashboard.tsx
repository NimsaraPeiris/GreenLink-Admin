import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// TODO: Replace with real data from API
const mockData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 }
];

import { LatLngTuple } from 'leaflet';

const position: LatLngTuple = [51.505, -0.09];

function Dashboard() {
  // TODO: Fetch data using React Query
  const [stats] = useState({
    activeContainers: 1235,
    deliveriesInProgress: 56,
    pendingIssues: 3,
    totalEarnings: 'LKR1,265,460'
  });

  return (
    <>
      <Helmet>
        <title>Dashboard - GreenLink</title>
      </Helmet>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Active Containers</h3>
            <p className="text-2xl font-bold">{stats.activeContainers}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Deliveries in Progress</h3>
            <p className="text-2xl font-bold">{stats.deliveriesInProgress}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Pending Issues</h3>
            <p className="text-2xl font-bold">{stats.pendingIssues}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500">Total Earnings (Monthly)</h3>
            <p className="text-2xl font-bold">{stats.totalEarnings}</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow mb-8">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Container Locations</h3>
            </div>
            {/* <MapContainer center={position} zoom={8}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} />
            </MapContainer> */}
          </div>

        {/* Alerts Section */}
        <div className="bg-white p-4 rounded-lg shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Live Alerts</h2>
          <div className="space-y-2">
            <div className="flex items-center text-red-600">
              <span className="mr-2">⚠️</span>
              <p>Temperature issue detected in Container #A123</p>
            </div>
            <div className="flex items-center text-orange-600">
              <span className="mr-2">⚠️</span>
              <p>Delivery delay for Shipment #B456</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;