import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>ABOUT THE APP</h1>
      Details about the app go here.
      <div className="about-info">
        <content className="about-content txt-align-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta
          debitis sequi sapiente deleniti recusandae nemo, esse eos dolores
          labore. In placeat dicta ad minima fugit temporibus praesentium
          quibusdam quia!
        </content>
      </div>
      <hr />
      <div className="about-info">
        <content className="about-content txt-align-right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta
          debitis sequi sapiente deleniti recusandae nemo, esse eos dolores
          labore. In placeat dicta ad minima fugit temporibus praesentium
          quibusdam quia!
        </content>
      </div>
      <hr />
      <div className="about-info">
        <content className="about-content txt-align-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo soluta
          debitis sequi sapiente deleniti recusandae nemo, esse eos dolores
          labore. In placeat dicta ad minima fugit temporibus praesentium
          quibusdam quia!
        </content>
      </div>
    </div>
  );
};

export default About;
