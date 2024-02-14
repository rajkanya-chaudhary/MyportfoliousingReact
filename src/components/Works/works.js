import React from 'react';
import './works.css';
import dpd1 from '../../dpd1.jpg';
import soft from '../../soft.jpg';
import sd1 from '../../sd1.jpg';

const works = () => {
  return (
    <div>
      <section id='works'>
        <h2 className='workstitle'>My Portfolio</h2>
        <span className='worksDesc'>Welcome to my portfolio! As a recent graduate eager 
        to embark on a fulfilling career journey in [mention your field or industry of interest], 
        I've put together this portfolio to showcase my skills, projects, and potential contributions.
        to embark on a fulfilling career journey in [mention your field or industry of interest], 
        I've put together this portfolio to showcase my skills, projects, and potential contributions.
        </span>
        <div className='worksImgs'>
          <img src={dpd1} alt="dpd1" height="50px" width="50px"className="worksImg"/>
          <img src={soft} alt="dpd1" height="50px" width="50px"className="worksImg"/>
          <img src={sd1} alt="dpd1"height="50px" width="50px"className="worksImg"/>

        </div>
      </section>
    </div>
  )
  }


export default works
