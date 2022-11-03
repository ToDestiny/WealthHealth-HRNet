import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Error from './pages/Error';
import Profile from './pages/Profile';
import EmployeeList from './pages/EmployeeList';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Navigate replace to="/profile" />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
