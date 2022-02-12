import "./About.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-info">
        <div className="about-content">
          <h3>A new way of getting your friends to commit to the plans you verbally set last week! <br/> Or yesterday! <br/> OR WHENEVER IT DOESN'T MATTER!</h3>
        </div>
      </div>
      <hr />
      <div className="about-info">
        <div className="about-content">
          <h3>Planning and committing made simple!</h3>
          <p>Invite your friends to your event through the app, and they will most likely commit to it!</p>
        </div>
      </div>
      <hr />
      <div className="about-info">
        <div className="about-content">
          <h1>"HOW" you say?!</h1>
          <button className='link-button'><Link to='/auth'>GET STARTED HERE</Link></button>
        </div>
      </div>
    </div>
  );
};

export default About;
