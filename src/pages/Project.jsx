import React from 'react';
import '../stylesheets/project.css';
import developer_img from '../../public/images/project-man-img.png';
import devoperImg from '/images/developer_img.svg';

const Project = () => {
  return (
    <div className='size container-fluid'>
      <div className='row project-intro'>
        <div className="col-md-8 project-info">
          <h3>Projects</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facere molestiae praesentium nihil perferendis provident totam, aperiam similique harum, nobis voluptates eligendi blanditiis voluptatum ullam unde beatae. Doloribus, neque! Aperiam.</p>
          <button><a href='#projects'>My Projects</a></button>
        </div>
        <div className="col-md-4 project-icon">
          <img src={developer_img} width={300} />
        </div>
        
      </div>
    </div>
  )
}

export default Project