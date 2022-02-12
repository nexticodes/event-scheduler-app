import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser, navigate, setForm }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate('/events');
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <>
      <h1 className='bangers-title'>Login</h1>
      <div className="form-container" onSubmit={handleSubmit}>
        <form autoComplete="off" >
          <label>Email</label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">LOG IN</button>
          <p onClick={()=> setForm('signup')}>Sign Up Instead</p>
        </form>
        <p className="error-message">&nbsp;{error}</p>
      </div>
    </>
  );
}