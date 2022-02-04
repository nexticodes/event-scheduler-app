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
            <Link to="/orders">OrderHistory</Link>
            &nbsp; | &nbsp; 
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp; 
            { user ?
                <>
                    <span>Welcome {user.name}</span>
                    &nbsp; | &nbsp;
                    <Link to="" onClick={handleLogOut}>Log Out</Link>
                </>
                :
                <>
                    &nbsp; | &nbsp;
                    <Link to="/signup">Log In / Sign Up</Link>
                </>
            }
        </nav>
    )
}

export default NavBar;