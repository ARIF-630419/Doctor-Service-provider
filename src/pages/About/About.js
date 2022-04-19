import React from 'react';
import picture from '../../img/Picture.JPG';

const About = () => {
    return (
        <div className=' m-4 p-5 text-center'>
            <div >
                <h2>Md.Ariful Islam</h2>
                <img src={picture} alt="..." />
            </div>
            <div className='my-5'>
                <h2>Carrier Objective</h2>
                <p className='fs-3'>An internship opportunity that will allow me to utilize my problem-solving skills and
                    attention to detail to further develop my abilities in the field of computer science.</p>

            </div>
        </div>


    );
};

export default About;