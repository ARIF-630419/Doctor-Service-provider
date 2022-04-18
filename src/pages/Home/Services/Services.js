import React from 'react';
import service1 from '../../../img/service1.png'
import service2 from '../../../img/service2.png'
import service3 from '../../../img/service3.png'
import service4 from '../../../img/service4.png'
import service5 from '../../../img/service5.png'
import service6 from '../../../img/service6.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { id: 1, name: "physical therapist ", description: "The physical therapist that helps you to recover from your knee injury", price: 1000, img: service1 },
        { id: 2, name: "speech therapist ", description: "The speech therapist that works with you to make sure you can swallow food safely after a stroke", price: 1500, img: service2 },
        { id: 3, name: "  emergency department ", description: " The emergency department that stabilizes you in the event of an accident or serious illness", price: 1800, img: service3 },
        { id: 4, name: " imaging facility", description: "The imaging facility that does your mammograms, X-rays, and magnetic resonance imaging (MRI) scans", price: 2000, img: service4 },
        { id: 5, name: "outpatient surgery clinic ", description: "The outpatient surgery clinic where you had your colonoscopy done", price: 2500, img: service5 },
        { id: 6, name: "specialty laboratory ", description: "The specialty laboratory that does your DNA test", price: 1700, img: service6 },
    ]
    return (
        <div className='container mt-5'>
            <h2 className=' text-primary text-center'>Our Service</h2>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;