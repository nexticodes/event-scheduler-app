import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';

const AuthPage = ({setUser}) => {
    const [form, setForm] = useState('');
    return (
        <>
            <div className="auth-container">
                { form === '' ? 
                    <>
                        <h1>Get Started!</h1>
                        <h2>What would you like to do?</h2>
                        <button onClick={() => setForm('login')}>Log In with Existing Account</button>
                        <button onClick={() => setForm('signup')}>Sign Up for A New Account</button> 
                    </> : 
                    (form === 'login') ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser} /> 
                }
            </div>   
        </>
    )
}

export default AuthPage;