import './ProfileDashboard.css';
import { GiTwoCoins } from 'react-icons/gi';

const ProfileDashboard = ({ user }) => {
	const { coins, numEventsLifetime, numFlakesLifetime } = user;
	return (
		<div className="profile-dashboard-container">
			<div className="profile-avatar">
				<div className="avatar-wrapper">
					<h1>{user.name[0].toUpperCase()}</h1>
				</div>
				<div className="avatar-desc">
					<p>{user.email}</p>
				</div>
			</div>
			<div className="profile-status">
				<div>
					<h1>{coins}</h1>
					<GiTwoCoins size={48} color={'gold'} />
				</div>
				<hr />
				<div>
					<div>
						<h1>{numEventsLifetime}</h1>
						<p>
							Events
							<br />
							Joined
						</p>
					</div>
					<div>
						<h1>{numFlakesLifetime}</h1>
						<p>
							Events
							<br />
							Flaked
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileDashboard;
