import React, { useState } from 'react';
import './Projects.css';
import { Modal, Button } from 'react-bootstrap';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Modern Residential Complex",
      image: "/images/city1.jpg",
      description: "A modern residential building with large glass surfaces, a minimalist approach, and functional spaces.",
      year: "2023",
      location: "New Belgrade, Serbia",
      materials: "Concrete, Glass, Steel",
      link: "#"
    },
    {
      title: "Restoration of Historical Building",
      image: "/images/historic.jpg",
      description: "Restoration of a historical building while preserving cultural values and architectural details.",
      year: "2022",
      location: "Novi Sad, Serbia",
      materials: "Brick, Stone, Wood",
      link: "#"
    },
    {
      title: "Commercial Building in the City Center",
      image: "/images/building.jpg",
      description: "A modern office building in the urban center, focusing on efficient commercial spaces.",
      year: "2024",
      location: "Belgrade Downtown",
      materials: "Glass, Steel, Composite Panels",
      link: "#"
    },
    {
      title: "Luxury Villa with Swimming Pool",
      image: "/images/house.jpg",
      description: "A luxury villa with a spacious yard and swimming pool, designed according to the latest architectural trends.",
      year: "2021",
      location: "Dedinje, Belgrade",
      materials: "Wood, Stone, Glass",
      link: "#"
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="text-center my-5 fade-in">Featured Projects by Boban</h2>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card fade-in">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="text-center mb-3">
              <Button variant="outline-primary" onClick={() => setSelectedProject(project)}>View More</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-section fade-in mt-5">
        <h4 className="text-center">Stay Updated</h4>
        <p className="text-center mb-4">Subscribe to get updates about Boban's latest architectural projects and insights.</p>
        <form className="d-flex justify-content-center flex-wrap gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="form-control w-50" 
            required 
          />
          <Button type="submit" variant="primary">Subscribe</Button>
        </form>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal show={true} onHide={() => setSelectedProject(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: '8px' }} />
            <p className="mt-3">{selectedProject.description}</p>
            <hr />
            <p><strong>Year:</strong> {selectedProject.year}</p>
            <p><strong>Location:</strong> {selectedProject.location}</p>
            <p><strong>Materials:</strong> {selectedProject.materials}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedProject(null)}>
              Close
            </Button>
            <Button variant="primary" href={selectedProject.link} target="_blank">
              Visit Website
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}

export default Projects;
