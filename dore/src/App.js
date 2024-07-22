
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import DashboardDark from './pages/dasboarddark';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/dashboarddark" element={<DashboardDark />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
