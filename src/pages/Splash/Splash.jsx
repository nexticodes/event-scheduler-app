import './Splash.css';

import CreatorContainer from '../../components/CreatorContainer/CreatorContainer';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

const Splash = () => {
    return (
        <>
            <div className='splash-container'>
                <div className='splash-title-container'>
                    <h1 className='title'>AIGHT BET</h1>
                    <hr />
                    <h3 className='sub-title'>Don't Just Plan It,<br/> Do It!</h3>
                    <hr />
                    <br />
                    <br />
                </div>
                <About />
                <hr />
            </div>
            <Footer/>
        </>
    )
}

export default Splash;