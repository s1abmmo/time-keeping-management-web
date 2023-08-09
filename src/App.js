import logo from './logo.svg';
import './App.css';
import './output.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import VerifyPage from './Pages/VerifyPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/verify" Component={VerifyPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
