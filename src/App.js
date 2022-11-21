
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CreateNote from './pages/CreateNote';
import { BrowserRouter as Router, Route, Routes, Switch, Link} from 'react-router-dom'
import Header from './components/Header';
import AuthContext from './context/AuthContext';
import {useContext} from 'react'


function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-note" element={<CreateNote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
