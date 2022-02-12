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

            { user ?
                <>
                    <Link to="/events"><span>Welcome {user.name}</span></Link>
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <>
                    <Link to="/">Home</Link>
                    <Link to="/auth">Sign In</Link>
                </>
            }
        </nav>
    )
}

export default NavBar;