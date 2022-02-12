import './ProfileDashboard.css';
import {GiTwoCoins} from 'react-icons/gi';

const ProfileDashboard = () => {
    return (
        <div className='profile-dashboard-container'>
            <div><h1>10</h1><GiTwoCoins size={48} color={'gold'} /></div>
            <hr />
            <div>
                <content>
                    <h1>6</h1>
                    <p>Events<br/>Joined</p>
                </content>
                <content>
                    <h1>6</h1>
                    <p>Events<br/>Flaked</p>
                </content>
            </div>
        </div>
    );
}

export default ProfileDashboard;