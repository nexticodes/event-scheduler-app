import './NavBar.css';
import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import SignUpForm from '../SignUpForm/SignUpForm';

const NavBar = ({user, setUser}) => {
    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
    return (
        <nav>
            <Link to="/">Home</Link>
            <div>
                &nbsp; | &nbsp; 
            </div>
            { user ?
                <>
                    <span>Welcome {user.name}</span>
                    &nbsp; | &nbsp;
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <>
                    <Link to="/auth">Sign In</Link>
                </>
            }
        </nav>
    )
}

export default NavBar;