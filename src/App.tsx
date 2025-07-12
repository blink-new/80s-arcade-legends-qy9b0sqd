
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <Dashboard />
      </div>
    </AuthProvider>
  );
}

export default App;