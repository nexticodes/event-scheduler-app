import NewEventForm from '../NewEventForm/NewEventForm';
import EventDetails from '../EventDetails/EventDetails';
import './Modal.css';

const Modal = ({ modalType, handleModal, setEvents }) => {
    return (
        <>
            <div onClick={() => handleModal('',false)} className='backdrop'>
            </div>
            <div className='modal-container'>
                <h3 id='modal-x' onClick={() => handleModal('',false)}>X</h3>
                <div className='modal-body'>
                    {modalType === 'event' && <NewEventForm setEvents={setEvents} handleModal={handleModal} />}
                </div>
            </div>
        </>
    );
};

export default Modal