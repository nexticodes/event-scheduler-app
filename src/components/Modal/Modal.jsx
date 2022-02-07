import { useState } from 'react';
import NewEventForm from '../NewEventForm/NewEventForm';
import './Modal.css';

const Modal = ({setModalVisible}) => {
    const [choice, setChoice] = useState('');
    return (
        <>
            <div onClick={() => setModalVisible(false)} className='backdrop'>
            </div>
            <div className='modal-container'>
                <h3 id='modal-x' onClick={() => setModalVisible(false)}>X</h3>
                <div className='modal-body'>
                    <NewEventForm/>
                </div>
            </div>
        </>
    );
};

export default Modal