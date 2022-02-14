import './Attendee.css';
import {RiVipCrownFill} from 'react-icons/ri'

const Attendee = ({a, i, host, user}) => {
    const {name} = a;
    return (
        <>
            <div className='attendee-container' style={{backgroundColor: (i % 2) ? 'whitesmoke' : 'smoke'}}>
                <p>{user === a._id ? 'YOU': name}  {a._id === host && <RiVipCrownFill size={24} color={'gold'}/>}</p> 
            </div>
        </>
    )
}

export default Attendee;