import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AppRoutes from './routes';
import { useAuthStore } from './stores/authStore';

// TODO: Initialize Firebase Auth
// TODO: Setup Socket.io connection for real-time updates
// TODO: Initialize React Query for API data fetching

function App() {
  // TODO: Add authentication check
  // const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;