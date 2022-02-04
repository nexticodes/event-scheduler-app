import './Splash.css';
import {useState} from 'react';
import CreatorContainer from '../../components/CreatorContainer/CreatorContainer';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
        <div className='splash-container'>
            <div className='splash-title-container'>
                <h1 className='title'>EVENT SCHEDULER APP</h1>
                <hr />
                <h3 className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil vitae obcaecati explicabo cum repudiandae, commodi sint dignissimos assumenda praesentium labore cumque ullam tenetur nobis perspiciatis consequuntur odit veritatis dolores!</h3>
                <Link to='/authpage'><button>GET STARTED HERE</button></Link>
            </div>
            <hr />
            <div>
                <h1>ABOUT THE APP</h1>
                Details about the app go here.
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta debitis sequi sapiente deleniti recusandae nemo, esse eos dolores labore. In placeat dicta ad minima fugit temporibus praesentium quibusdam quia!
                </div>
            </div>
            <hr />
            <CreatorContainer />
            <Footer/>
        </div>
    )
}

export default Splash;