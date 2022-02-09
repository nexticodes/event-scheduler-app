import { useState } from 'react';
import './DeleteButton.css';

const DeleteButton = () => {
    const [showConfirmation,setShowConfirmation] = useState(false);
    return (
        <>
            <div className='delete-button-container'>
            {!showConfirmation ? 
                <button onClick={()=> setShowConfirmation(true)}>DELETE</button>
                :
                <>
                <button className='confirmation-button' onClick={() => setShowConfirmation(false)}>NO</button>
                <p>SURE?</p>
                <button className='confirmation-button'>YES</button>
            </>
            }
            </div>
        </>
    );
};

export default DeleteButton;