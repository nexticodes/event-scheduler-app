import './ProfileDashboard.css';
import {GiTwoCoins} from 'react-icons/gi';

const ProfileDashboard = ({user}) => {
    const {coins, numEventsLifetime, numFlakesLifetime} = user;
    return (
        <div className='profile-dashboard-container'>
            <div><h1>{coins}</h1><GiTwoCoins size={48} color={'gold'} /></div>
            <hr />
            <div>
                <content>
                    <h1>{numEventsLifetime}</h1>
                    <p>Events<br/>Joined</p>
                </content>
                <content>
                    <h1>{numFlakesLifetime}</h1>
                    <p>Events<br/>Flaked</p>
                </content>
            </div>
        </div>
    );
}

export default ProfileDashboard;