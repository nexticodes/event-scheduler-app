import './ProfileBox.css';

const ProfileBox = ({user}) => {
    return (
        <div className="profile-box-container">
            <div className='avatar-wrapper'>
                <h1>{user.name[0].toUpperCase()}</h1>
            </div>
            <div className='avatar-desc'>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default ProfileBox;