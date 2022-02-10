import NewEventForm from '../NewEventForm/NewEventForm';
import './Modal.css';

const Modal = ({ modalType, handleModal, setEvents, setSelectedEvent }) => {
    return (
        <>
            <div onClick={() => handleModal('',false)} className='backdrop'>
            </div>
            <div className='modal-container'>
                <h3 id='modal-x' onClick={() => handleModal('',false)}>X</h3>
                <div className='modal-body'>
                    {modalType === 'event' && <NewEventForm 
                    setSelectedEvent={setSelectedEvent}
                    setEvents={setEvents} handleModal={handleModal} />}
                </div>
            </div>
        </>
    );
};

export default Modal