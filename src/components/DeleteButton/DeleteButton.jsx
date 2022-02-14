import { useState } from 'react';
import './DeleteButton.css';

const DeleteButton = ({handleDelete, mode, handleLeaveEvent}) => {
    const [showConfirmation,setShowConfirmation] = useState(false);

    function handleConfirm(){
        mode === 'delete' ? handleDelete() : handleLeaveEvent();
    }
    return (
        <>
            <div className='delete-button-container'>
            {!showConfirmation ? 
                <button onClick={()=> setShowConfirmation(true)}>{mode === 'delete' ? 'DELETE' : 'LEAVE EVENT'}</button>
                :
                <>
                <button className='confirmation-button' onClick={() => setShowConfirmation(false)}>NO</button>
                <div>
                    <h1 style={{width: '60%', margin: '0 auto', fontFamily: 'Bangers', textShadow: '0px 5px 5px white'}}>SURE?</h1>
                    {mode === 'leave' && 
                        <p style={{width: '60%', margin: '0 auto'}}>Leaving will give you +1 Flake point and NO REFUNDS!</p>            
                    }
                </div>
                <button onClick={handleConfirm} className='confirmation-button'>YES</button>
            </>
            }
            </div>
        </>
    );
};

export default DeleteButton;