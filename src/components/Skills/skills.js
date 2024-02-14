import React from 'react';
import './skills.css';
import wd from '../../wd.png';
import soft from '../../soft.jpg';
import ui from '../../ui.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillsTitle">What I do </span>
        <span className="skillDescription">A software developer is a professional responsible for designing, 
        developing and maintaining software applications. Here's a detailed description of the 
        responsibilities, skills, and qualifications typically associated with this role:
       </span>
      <div className="skillBars">
        <div className="skillBars">
          <img src={wd} alt="wd" className="wd"/>
          <div className="skillText">
            <h1>Web Development</h1>
            <p>This is the demo of web Development</p>
          </div>
          </div>
          <div className="skillBars">
          <img src={soft}alt="sf" height="450px" width="650px"className="skillBarImg"/>
          <div className="skillText">
            <h1>Software Development</h1>
            <p>This is the demo of software Development</p>
          </div>
          </div>
          <div className="skillBars">
          <img src={ui}alt="ui"height="450px"width="650px" className="skillBarImg"/>
          <div className="skillText">
            <h1>UI/UX Design</h1>
            <p>This is a demo text , you can write your content here.</p>
          </div>
          </div>

      </div>

        
    </section>
  )
}

export default Skills
