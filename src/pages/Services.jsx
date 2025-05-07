import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: "Residential Architecture",
      description: "We design contemporary residential buildings that cater to modern living, with functionality and aesthetics in mind.",
    },
    {
      title: "Commercial Architecture",
      description: "Our commercial projects focus on maximizing space efficiency and creating business environments that foster creativity and productivity.",
    },
    {
      title: "Restoration & Conservation",
      description: "We specialize in restoring and conserving historic buildings, preserving their cultural heritage while adapting them for modern use.",
    },
    {
      title: "Urban Design",
      description: "Our urban design projects focus on creating sustainable and well-planned public spaces that promote community engagement and connectivity.",
    },
    {
      title: "Interior Design",
      description: "Our interior design service transforms spaces into functional, comfortable, and aesthetically pleasing environments that reflect the client’s vision.",
    },
    {
      title: "Landscape Architecture",
      description: "We create beautiful outdoor spaces, from private gardens to public parks, that integrate seamlessly with the surrounding environment.",
    },
    {
      title: "Project Management",
      description: "We offer comprehensive project management services, ensuring projects are delivered on time, within budget, and according to design specifications.",
    },
    {
      title: "Sustainable Design",
      description: "We focus on eco-friendly and sustainable design practices, creating buildings and spaces that minimize environmental impact.",
    },
    {
      title: "Construction Supervision",
      description: "Our experienced team provides construction supervision to ensure the quality and integrity of the project from start to finish.",
    },
    {
      title: "3D Visualization",
      description: "We offer cutting-edge 3D rendering and visualization services that bring architectural concepts to life before construction begins.",
    },
    {
      title: "Smart Home Integration",
      description: "We integrate smart technologies into our architectural designs, enabling modern living with automation, security, and energy efficiency.",
    },
    {
      title: "Architectural Consulting",
      description: "Our consulting services help clients navigate complex projects by offering expert guidance on design, planning, and regulations.",
    },
  ];
  

  return (
    <div className="services-container">
      <h2 className="text-center my-5">Our Services</h2>
      <div className="services-cards">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
