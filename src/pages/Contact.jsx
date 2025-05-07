import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaBehance } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Kontakt</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group controlId="name" className="mb-3">
              <Form.Label>Ime</Form.Label>
              <Form.Control
                type="text"
                placeholder="Vaše ime"
                autoComplete="name" // Dodan autocomplete atribut
                required // Polje postavljeno kao obavezno
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Email adresa</Form.Label>
              <Form.Control
                type="email"
                placeholder="Vaš email"
                autoComplete="email" // Dodan autocomplete atribut
                required
              />
            </Form.Group>

            <Form.Group controlId="message" className="mb-3">
              <Form.Label>Poruka</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Vaša poruka"
                required
              />
            </Form.Group>
            <Button variant="dark" type="submit">Pošalji</Button>
          </Form>
        </Col>

        <Col md={6}>
          <h5 className="mt-4 mt-md-0">Kontakt informacije</h5>
          <p><FaPhone className="me-2" /> +381 64 123 4567</p>
          <p><FaEnvelope className="me-2" /> boban.jokic@example.com</p>
          <p><FaMapMarkerAlt className="me-2" /> Beograd, Srbija</p>

          <h5 className="mt-4">Društvene mreže</h5>
          <p>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="me-3" size={24} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="me-3" size={24} /></a>
            <a href="https://behance.net/" target="_blank" rel="noopener noreferrer"><FaBehance size={24} /></a>
          </p>

          <div className="mt-4">
          <iframe
  title="Mapa kancelarije"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.829783755787!2d20.45727331553386!3d44.815403079098846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7ab21e4f72ff%3A0x74ff479b6f8931f3!2sSvetogorska+5%2C+Beograd!5e0!3m2!1sen!2srs!4v1615373620922!5m2!1sen!2srs"
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
></iframe>

          </div>
          <div style={{ height: '100px' }}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
