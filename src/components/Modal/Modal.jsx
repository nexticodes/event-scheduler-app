import NewEventForm from '../NewEventForm/NewEventForm';
import './Modal.css';

const Modal = ({setModalVisible}) => {
    return (
        <>
            <div className='backdrop'>
            </div>
            <div className='modal-container'>
                <h1 id='modal-x' onClick={() => setModalVisible(false)}>X</h1>
                <div className='modal-header'>

                </div>
                <div className='modal-body'>
                    <NewEventForm/>
                    <button onClick={() => setModalVisible(false)}>Close</button>
                </div>
            </div>
        </>
    );
};

export default Modal