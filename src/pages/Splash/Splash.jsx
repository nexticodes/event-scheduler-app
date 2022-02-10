import './Splash.css';
import { Link } from 'react-router-dom';
import CreatorContainer from '../../components/CreatorContainer/CreatorContainer';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

const Splash = () => {
    return (
        <>
            <div className='splash-container'>
                <div className='splash-title-container'>
                    <h1 className='title'>EVENT SCHEDULER APP</h1>
                    <hr />
                    <h3 className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil vitae obcaecati explicabo cum repudiandae, commodi sint dignissimos assumenda praesentium labore cumque ullam tenetur nobis perspiciatis consequuntur odit veritatis dolores!</h3>
                    <button className='link-button'><Link to='/auth'>GET STARTED HERE</Link></button>
                </div>
                <About />
                <hr />
                <CreatorContainer />
            </div>
            <Footer/>
        </>
    )
}

export default Splash;