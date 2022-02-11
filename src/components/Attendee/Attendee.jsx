import './Attendee.css';

const Attendee = ({a, i}) => {
    const {name} = a;
    return (
        <>
            <div className='attendee-container' style={{backgroundColor: (i % 2) ? 'whitesmoke' : 'smoke'}}>
                <p>{name}</p>
            </div>
        </>
    )
}

export default Attendee;