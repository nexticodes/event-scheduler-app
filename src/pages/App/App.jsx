import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import {getUser} from './../../utilities/users-service';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
        <NavBar setUser={setUser} user={user} /> 
        {user ? 
          <>
              <Routes>
                {/* Routes will go here. */}
                <Route path="/orders/new" element={<NewOrderPage />} />
                <Route path="/orders" element={<OrderHistoryPage />} />
                <Route path="/signup" element={<AuthPage setUser={setUser} />} />
              </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
        }
    </main>
  );
}

export default App;
