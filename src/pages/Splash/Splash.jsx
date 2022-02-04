import './Splash.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import CreatorContainer from '../../components/CreatorContainer/CreatorContainer';
import About from '../../components/About/About'

const Splash = () => {
    return (
        <>
            <div className='splash-container'>
                <div className='splash-title-container'>
                    <h1 className='title'>EVENT SCHEDULER APP</h1>
                    <hr />
                    <h3 className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nihil vitae obcaecati explicabo cum repudiandae, commodi sint dignissimos assumenda praesentium labore cumque ullam tenetur nobis perspiciatis consequuntur odit veritatis dolores!</h3>
                    <Link to='/authpage'><button>GET STARTED HERE</button></Link>
                </div>
                <hr />
                <About />
                <hr />
                <CreatorContainer />
            </div>
        </>
    )
}

export default Splash;