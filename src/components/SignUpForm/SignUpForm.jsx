import {Component} from 'react';
import { signUp } from '../../utilities/users-service';
import './SignUpForm.css';

export default class SignUpForm extends Component{
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = {...this.state}
          delete formData.confirm;
          delete formData.error;

          const user = await signUp(formData);
          this.props.setUser(user);
          this.props.navigate('/events');
        } catch {
          // An error occurred!
          this.setState({error: 'Sign Up Failed - Try Again!'});
        }
    }
    
    render(){
        const disable = this.state.password !== this.state.confirm;
        return (
          <>
            <h1> Sign up! </h1>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                  <label>Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                  <label>Email</label>
                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                  <label>Password</label>
                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                  <label>Confirm</label>
                  <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                  <button type="submit" disabled={disable}>SIGN UP</button>
                  <p onClick={()=> this.props.setForm('login')}>Log In Instead</p>
                </form>
              <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
          </>
        );
    }
};