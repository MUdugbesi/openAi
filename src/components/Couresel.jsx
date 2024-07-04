import React from 'react';
import '../stylesheets/couresel.css';
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaReact, FaJsSquare } from 'react-icons/fa';
// import { SiTailwindcss } from "react-icons/si";
import { BiLogoTailwindCss } from "react-icons/bi";

const Couresel = () => {
  const icons = [<FaJava color='orange' />, <FaReact color='cyan' />, <FaHtml5 color='red' />, <FaCss3 color='blue' />, <FaBootstrap color='purple' />, <BiLogoTailwindCss color='#00b4d8'/>, <FaJsSquare color='yellow'/>]
  return (
    <div className='couresel-container position-relative d-flex align-items-center justify-content-center'>
      <h1 className='position-absolute top-0 start-0 end-0 text-center mt-5'>
        Technologies I use
      </h1>
      <div className='gallery'>
        {icons.map((icon, i) => {
          return (
            <span style={{'--i' : (i + 1)}} key={i}>
              {icon}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Couresel