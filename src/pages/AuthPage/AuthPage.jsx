import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Footer from '../../components/Footer/Footer';
import './AuthPage.css';

const AuthPage = ({setUser}) => {
    const [form, setForm] = useState('');
    const navigate = useNavigate();
    return (
        <>
            <div className="auth-container">
                { form === '' ? 
                    <>
                        <h1 className='bangers-title'>WELCOME ABOARD!</h1>
                        <h2>What would you like to do?</h2>
                        <button onClick={() => setForm('login')}>Log In with Existing Account</button>
                        <button onClick={() => setForm('signup')}>Sign Up for A New Account</button> 
                    </> : 
                    (form === 'login') ? <LoginForm setForm={setForm} navigate={navigate} setUser={setUser}/> : <SignUpForm setForm={setForm} navigate={navigate} setUser={setUser} /> 
                }
            </div>
            <Footer/>
        </>
    )
}

export default AuthPage;