import React from 'react';
import '../stylesheets/home.css';
import { Couresel, Wave } from '../components';
import devoperImg from '/images/developer_img.svg';
import devoperImgSvg from '/images/developer.webp';
import 'animate.css';


const Home = () => {
  return (
    <div>
      <div className="introduction flex-center">
        <div className='intro-container'>
          <h3 className='intro-title animate__animated animate__fadeInLeft'><span className='intro-span'>M</span>UDUGBESI</h3>
          <div className='intro-content animate__animated animate__bounceInDown'>
            <p className='fs-4 '>FrontEnd Developer</p>
            <button className='btn btn-primary fs-7'><a href='#myTechStack'>My Tech Stack</a></button>
          </div>
        </div>
      </div>
      <Couresel />
      <Wave />
      <div className='js-section container'>
        <div className='row mt-5 justify-content-start js-intro'>
          <div className='col-md-4 animate__animated animate__fadeInLeft'>
            <h2>Yes you are right</h2>
            <p>I am a javaScript Buff!</p>
          </div>
        </div>
        <div className='row mt-5 justify-content-center mb-5 js-img' >
          <div className='col-md-4'>
            <img src={devoperImg} width={300} />
          </div>
        </div>
        <div className='row mt-5 justify-content-end mb-5 js-description'>
          <div className='col-md-6'>
            <blockquote cite='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics'>
              <p>JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved.</p>
              <footer className='text-end'>- MDN</footer>
            </blockquote>
          </div>
        </div>
      </div>


      <div className='container-sm mb-5 rounded-2' id='myTechStack'>
        <h3 className='font-bold mt-5 text-center'>My Development Stack</h3>
        <div className='text-center'>
          <img src={devoperImgSvg} alt='developer_img' className='img' />
        </div>

        <div className="row mb-5 text-center">
          <div className="col-md-4 ">
            <h3>Front-End</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascipt</li>
              <li>React</li>
              <li>Redux</li>
              <li>Typescript</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>UI/Styling</h3>
            <ul>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>Semantic UI</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Backend</h3>
            <ul>
              <li>Node</li>
              <li>Express</li>
              <li>SQL DB</li>
              <li>Mongo DB</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='about-me'>
          <h3>who is MUdugbesi </h3>
        <div className='about-me-info'>
          <p><pre>{JSON.stringify({
            name: 'Marvelous Udugbesi',
            country: 'Nigeria',
            age: null,
            gender: 'Male',
          }, null, 3)}</pre></p>
        </div>
      </div>
    </div>
  )
}

export default Home;