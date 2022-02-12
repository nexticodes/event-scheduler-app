import './Splash.css';

import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

const Splash = () => {
    return (
        <>
            <div className='splash-container'>
                <div className='splash-title-container'>
                    <h1 className='title'>AIGHT <span style={{color: 'gold'}}>BET</span></h1>
                    <hr />
                    <h3 className='sub-title'>Don't Just Plan It,<br/> <span style={{color: 'gold'}}>Do It!</span></h3>
                    <hr />
                </div>
                <About />
            </div>
            <Footer/>
        </>
    )
}

export default Splash;