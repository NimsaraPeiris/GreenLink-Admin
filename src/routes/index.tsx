import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import UserManagement from '../pages/UserManagement';
import ShipmentMonitoring from '../pages/ShipmentMonitoring';
import ReportAnalytics from '../pages/ReportAnalytics';
import BlockchainLogs from '../pages/BlockchainLogs';
import Settings from '../pages/Settings';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<UserManagement />} />
      <Route path="/shipments" element={<ShipmentMonitoring />} />
      <Route path="/reports" element={<ReportAnalytics />} />
      <Route path="/blockchain" element={<BlockchainLogs />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default AppRoutes;