import { useState } from 'react';
import NewEventForm from '../NewEventForm/NewEventForm';
import './Modal.css';

const Modal = ({modalType, handleModal, setEvents}) => {
    const [choice, setChoice] = useState('');
    return (
        <>
            <div onClick={() => handleModal('',false)} className='backdrop'>
            </div>
            <div className='modal-container'>
                <h3 id='modal-x' onClick={() => handleModal('',false)}>X</h3>
                <div className='modal-body'>
                    <NewEventForm setEvents={setEvents} handleModal={handleModal} />
                </div>
            </div>
        </>
    );
};

export default Modal