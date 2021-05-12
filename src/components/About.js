import React from 'react';
import './About.css';
import charlespic from './images/charlespic.jpg';

 function About() {
    return (
        <div className="About">   
           <img className="CharlesPic" src={charlespic} alt="Charles" />
           <h1 className="HeaderText">Who We Are</h1>
           <p className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero autem
                nemo labore repellat eveniet esse quasi quis tempore qui nihil.
                 In facilis dignissimos itaque animi optio magni quos et aut. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Magnam quisquam placeat dolorum
                 , velit voluptas aperiam repellat odio nesciunt? Aut voluptates repudiandae natus 
                 magni iusto tempora eum exercitationem reiciendis assumenda labore?
                 </p>
        </div>
    )
}
export default About;