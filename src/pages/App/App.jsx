import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {getUser} from './../../utilities/users-service';
import Splash from '../Splash/Splash';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthPage from '../AuthPage/AuthPage';
import EventsPage from '../EventsPage/EventsPage';


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
        <NavBar setUser={setUser} user={user} /> 
        <Routes>
          {/* Routes will go here. */}
          <Route path="/" element={<Splash />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} user={user} />} />
          { user &&  <Route path="/events" element={<EventsPage />} />}
        </Routes>
        <Footer/>
    </main>
  );
}

export default App;
