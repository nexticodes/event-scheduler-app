import './OrderHistoryPage.css';
import {checkToken} from './../../utilities/users-service';

const OrderHistoryPage = () => {
    const handleCheckToken = async () => {
        const expDate = await checkToken();
        console.log(expDate);
    }
    return(
        <>
            <h1>OrderHistoryPage</h1>
            <button onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    )
};

export default OrderHistoryPage;