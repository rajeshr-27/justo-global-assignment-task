import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import CreateLink from './components/CreateLink';
import KickOutUser from './components/KickOutUser';
import GetTime from './components/GetTime';
import UserAccessLink from './components/UserAccessLink';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/create-link" element={<CreateLink />} />
            <Route path="/kick-out-user" element={<KickOutUser />} />
            <Route path="/get-time" element={<GetTime />} />
            <Route path="/:code" element={<UserAccessLink />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
