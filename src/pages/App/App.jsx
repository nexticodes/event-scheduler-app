import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {getUser} from './../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import Splash from '../Splash/Splash';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
        <NavBar setUser={setUser} user={user} /> 
        <Routes>
          {/* Routes will go here. */}
          <Route path="/" element={<Splash />} />
        </Routes>
    </main>
  );
}

export default App;
