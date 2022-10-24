import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Profile from './pages/Profile';
import EmployeeList from './pages/EmployeeList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/employee-list" element={<EmployeeList />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
