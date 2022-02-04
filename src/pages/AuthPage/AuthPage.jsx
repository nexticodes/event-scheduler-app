import './AuthPage.css';
import {useState} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';


const AuthPage = ({setUser}) => {
    const [display, setDisplay] = useState('login');
    return(
        <main>
            <h1>What would you like to do?</h1>
            <div>
                <button onClick={() => setDisplay('login')}>Log In</button>
                <button onClick={() => setDisplay('signup')}>Sign Up</button>
            </div>
            { display === 'login' ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser}/>}
            
        </main>
    )
};

export default AuthPage;