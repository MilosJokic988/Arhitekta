import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page"> {/* Dodajemo ovaj kontejner sa pozadinom */}
      <div className="about-container container py-5 fade-in">
        <h2 className="text-center mb-4">Meet Boban Jokić</h2>

        <div className="about-header d-flex flex-column flex-md-row align-items-center mb-5 fade-in">
          <img
            src="./images/boban.jpg"
            alt="Boban Jokić"
            className="about-image rounded shadow"
          />
          <div className="ms-md-4 mt-3 mt-md-0">
            <h4 className="text-primary">Architect. Visionary. Innovator.</h4>
            <p>
              With over 20 years of experience, Boban blends art and architecture
              to shape the future of design.
            </p>
          </div>
        </div>

        <section className="mb-4 fade-in">
          <h5>🧱 Early Passion & Education</h5>
          <p>
            From a young age, Boban was captivated by buildings and the way they shape our world.
            He earned his degree in architecture from one of the most respected institutions.
          </p>
        </section>

        <section className="mb-4 fade-in">
          <h5>🏗️ Professional Journey</h5>
          <p>
            Boban has delivered projects for individuals, corporations, and institutions—merging
            function and form with precision.
          </p>
        </section>

        <section className="mb-4 fade-in">
          <h5>🌍 Philosophy</h5>
          <p>
            “Every space has a story to tell.” With empathy and cultural awareness, Boban brings
            this philosophy to life in every design.
          </p>
        </section>

        <section className="mb-4 fade-in">
          <h5>♻️ Sustainability</h5>
          <p>
            Eco-conscious design is at the core of Boban's work—where materials, energy, and environment
            coexist harmoniously.
          </p>
        </section>

        <section className="mb-4 fade-in">
          <h5>🏆 Legacy</h5>
          <p>
            His work continues to inspire and elevate architecture by leaving a meaningful, lasting footprint.
          </p>
        </section>
      </div>
    </div>
  );
}

export default About;
