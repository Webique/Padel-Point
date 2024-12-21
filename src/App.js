import React, { useState } from "react"; // Single import for React and useState
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import jakaroo from "./assets/jakaroo.jpg";
import baloot from "./assets/baloot.jpg";
import logo from "./assets/logo.jpg";
import background from "./assets/background.jpeg";
import playstation from "./assets/playstation.jpg";
import otherGames from "./assets/other_games.jpg";
import "./App.css";
import court1 from "./assets/court1.jpg";
import court2 from "./assets/court2.jpg";
import court3 from "./assets/court3.jpg";
import court4 from "./assets/court4.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add useState for menu toggle

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) { // Close menu for small screens
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar
  bg="dark"
  variant="dark"
  expand="md"
  sticky="top"
  className="shadow"
  style={{
    height: "80px",
    backgroundColor: "#2C2C2C",
  }}
>
  <Container>
    {/* Logo */}
    <Navbar.Brand
  href="#"
  className="position-relative"
  style={{
    marginLeft: "-75px", // Move the logo closer to the left
  }}
>
  <img
    src={logo}
    alt="Padel Point Logo"
    style={{
      height: "100%",
      maxHeight: "120px", // Slightly larger logo
      objectFit: "contain",
      marginTop: "-28px", // Move the logo higher
    }}
  />
</Navbar.Brand>


    {/* Hamburger Toggle */}
    <Navbar.Toggle
  aria-controls="basic-navbar-nav"
  style={{
    border: "none",
    color: "#fff",
    fontSize: "1.9rem", // Increase font size for larger icon
    padding: "10px", // Add padding for better spacing
    marginTop: "-40px", // Move the toggle higher
    marginRight: "-50px", // Push the toggle to the right
  }}
  onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state
>
  <span className="navbar-toggler-icon"></span>
</Navbar.Toggle>


    {/* Collapsible Navigation Menu */}
    <Navbar.Collapse
      id="basic-navbar-nav" in={isMenuOpen}
      style={{
        backgroundColor: isMenuOpen ? "rgba(44, 44, 44, 0.9)" : "transparent",
        borderRadius: "10px",
        padding: isMenuOpen ? "10px" : "0px",
        transition: "all 0.3s ease",
      }}
    >
      <Nav className="ms-auto">
        {[
          { href: "#about", text: "About" },
          { href: "#our-courts", text: "Our Courts" },
          { href: "#pricing", text: "Pricing" },
          { href: "#opening-hours", text: "Opening Hours" },
          { href: "#gaming-room", text: "Gaming Room" },
          { href: "#location", text: "Location" },
          { href: "#policies", text: "Policies" },
          { href: "#footer", text: "Contact Us" },
        ].map((link, idx) => (
          <Nav.Link
            key={idx}
            href={link.href}
            className="text-white"
            style={{
              fontSize: isMenuOpen ? "1.2rem" : "1rem", // Larger font when menu is open
              fontWeight: isMenuOpen ? "bold" : "normal", // Bold text when menu is open
              margin: isMenuOpen ? "10px 0" : "0px", // Add spacing when menu is open
              marginTop: isMenuOpen ? "0" : "-35px", // Push text higher for laptops
              fontFamily: isMenuOpen
                ? "'Poppins', sans-serif"
                : "'Arial', sans-serif", // Modern font when open, default when closed
              textShadow: isMenuOpen
                ? "1px 1px 2px rgba(0, 0, 0, 0.4)"
                : "none", // Subtle shadow when open
              
              transition: "all 0.3s ease", // Smooth transition
            }}
            onClick={handleNavLinkClick} // Add this to close the menu
          >
            {link.text}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>




      {/* Hero Section */}
      <div
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
        }}
      >
        <div>
          <h1
            className="display-4 fw-bold"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "3.5rem",
              textShadow: "2px 2px 6px rgba(0, 0, 0, 0.6)",
              color: "#EAEAEA", // Subtle off-white color
            }}
          >
            Welcome to Padel Point
          </h1>
          {/* Book Now Button */}
          <a
            href="https://malaebapp.com/Padel-Point-Jeddah"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#003366", // Professional dark navy blue
              color: "#ffffff", // White text
              padding: "15px 30px", // Button padding
              fontSize: "1.2rem", // Font size matching heading
              fontFamily: "'Poppins', sans-serif", // Same font as heading
              fontWeight: "bold",
              borderRadius: "5px", // Rounded corners
              textDecoration: "none", // No underline
              marginTop: "20px", // Space above button
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
              transition: "background-color 0.3s, transform 0.2s", // Smooth hover effects
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#002244")} // Darker navy blue on hover
            onMouseOut={(e) => (e.target.style.backgroundColor = "#003366")} // Reset color
          >
            Book Now
          </a>
        </div>
      </div>

      {/* About Us Section */}
      <Container
        id="about"
        className="py-5"
        style={{
          marginTop: "50px",
          background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#4a4a4a", // Professional dark gray for heading
          }}
        >
          About Us
        </h2>
        <p
          className="text-center mx-auto"
          style={{
            maxWidth: "800px",
            fontSize: "1.2rem",
            lineHeight: "1.8",
            color: "#5e5e5e", // Medium gray for content
          }}
        >
          Discover premium padel courts, tournaments, and training sessions designed to elevate your game.
          Join us to experience the fastest-growing sport in the world! At Padel Point, we are dedicated to
          providing an exceptional experience for players of all levels in a state-of-the-art environment.
        </p>
      </Container>

      {/* Our Courts Section */}
<Container
  id="our-courts"
  className="py-5"
  style={{
    marginTop: "20px",
    background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
  }}
>
  <h2
    className="text-center mb-4"
    style={{
      fontFamily: "'Poppins', sans-serif", // Match heading font
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#343a40", // Professional dark gray
    }}
  >
    Our Courts
  </h2>
  <Row className="g-4 justify-content-center">
    {[
      { img: court1, title: "Court 1" },
      { img: court2, title: "Court 2" },
      { img: court3, title: "Court 3" },
      { img: court4, title: "Entrance" },
    ].map((court, idx) => (
      <Col key={idx} md={3} sm={6} xs={12}>
        <Card
          className="h-100 text-center shadow border-0"
          style={{
            background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
            borderRadius: "15px", // Rounded corners
          }}
        >
          <Card.Img
            variant="top"
            src={court.img}
            style={{
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px", // Rounded image corners
              height: "150px",
              objectFit: "cover", // Ensure image fills the area without distortion
            }}
          />
          <Card.Body>
            <h5
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "1.5rem",
                color: "#003366", // Professional navy blue
              }}
            >
              {court.title}
            </h5>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* Pricing Section */}
      <Container
        id="pricing"
        className="py-5"
        style={{
          marginTop: "20px",
          background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#343a40", // Professional dark gray
          }}
        >
          Pricing
        </h2>
        <Row className="justify-content-center">
          {[
            { time: "60 Minutes", price: "130 SR" },
            { time: "90 Minutes", price: "185 SR" },
            { time: "120 Minutes", price: "240 SR" },
          ].map((tier, idx) => (
            <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
              <Card
                className="h-100 text-center shadow border-0"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #f8f9fa)", // Subtle gradient
                  borderRadius: "15px", // Smooth corners
                  padding: "20px 15px", // Ensure symmetrical padding
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px", // Fixed height for symmetry
                }}
              >
                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                  <h5
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "600",
                      fontSize: "1.8rem",
                      color: "#003366", // Professional navy blue
                      marginBottom: "10px", // Consistent spacing
                    }}
                  >
                    {tier.time}
                  </h5>
                  <p
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#495057", // Subtle gray for pricing
                      marginBottom: "0", // No extra bottom spacing
                    }}
                  >
                    {tier.price}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Opening Hours Section */}
<Container
  id="opening-hours"
  className="py-5"
  style={{
    marginTop: "20px",
    background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
  }}
>
  <h2
    className="text-center mb-4"
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: "#343a40", // Professional dark gray
    }}
  >
    Opening Hours
  </h2>
  <Row className="justify-content-center">
    {[
      { days: "Sunday - Wednesday", hours: "3:00 PM - 3:00 AM" },
      { days: "Thursday - Saturday", hours: "4:00 PM - 4:00 AM" },
    ].map((time, idx) => (
      <Col key={idx} md={4} sm={6} xs={12} className="mb-4">
        <Card
          className="h-100 text-center shadow border-0"
          style={{
            background: "linear-gradient(to bottom, #ffffff, #f8f9fa)", // Subtle gradient
            borderRadius: "15px", // Smooth corners
            padding: "20px 15px", // Ensure symmetrical padding
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "150px", // Fixed height for symmetry
          }}
        >
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
            <h5
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "600",
                fontSize: "1.8rem",
                color: "#003366", // Professional navy blue
                marginBottom: "10px", // Consistent spacing
              }}
            >
              {time.days}
            </h5>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#495057", // Subtle gray for hours
                marginBottom: "0", // No extra bottom spacing
              }}
            >
              {time.hours}
            </p>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>


      {/* Gaming Room Section */}
      <Container
        id="gaming-room"
        className="py-5"
        style={{
          marginTop: "20px",
          background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Light shadow for depth
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif", // Match heading font
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#343a40", // Professional dark gray
          }}
        >
          Gaming Room
        </h2>
        <Row className="g-4 justify-content-center">
          {[
            { img: jakaroo, title: "Jakaroo" },
            { img: baloot, title: "Baloot" },
            { img: playstation, title: "PlayStation" },
            { img: otherGames, title: "Other Games" },
          ].map((game, idx) => (
            <Col key={idx} md={3} sm={6} xs={12}>
              <Card
                className="h-100 text-center shadow border-0"
                style={{
                  background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
                  borderRadius: "15px", // Rounded corners
                }}
              >
                <Card.Img
                  variant="top"
                  src={game.img}
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px", // Rounded image corners
                    height: "150px",
                    objectFit: "cover", // Ensure image fills the area without distortion
                  }}
                />
                <Card.Body>
                  <h5
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      color: "#003366", // Professional navy blue
                    }}
                  >
                    {game.title}
                  </h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Location Section */}
      <Container id="location" className="py-5">
        <h2
          className="text-center mb-4"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#343a40", // Professional dark gray
          }}
        >
          Our Location
        </h2>
        <div
          className="map-container"
          style={{
            overflow: "hidden",
            height: "300px",
            cursor: "pointer",
            borderRadius: "10px", // Smooth corners
          }}
        >
          <iframe
            className="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387.2659222869016!2d39.0935061!3d21.7557388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c163053b847bdf%3A0x10df9a3d61e06c3!2sPadel%20Point!5e0!3m2!1sen!2ssa!4v1697909922142!5m2!1sen!2ssa"
            allowFullScreen=""
            loading="lazy"
            style={{
              border: "none", // Removes any visible border
              borderRadius: "10px", // Matches container's corners
            }}
            title="Padel Point Location"
          ></iframe>
        </div>
      </Container>

{/* Replacement and Refund Policy Section */}
<Container
  id="policies"
  className="py-4" // Reduced padding
  style={{
    marginTop: "20px",
    marginBottom: "30px", // Adds space between the container and footer
    background: "linear-gradient(to right, #fdf8f3, #f6f1eb)", // Soft neutral beige gradient
    borderRadius: "10px", // Rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    padding: "15px 30px", // Slightly reduced padding
  }}
>
  <h2
    style={{
      fontFamily: "'Poppins', sans-serif",
      fontSize: "2.5rem", // Same font size as other headings
      fontWeight: "bold",
      color: "#343a40", // Professional dark gray
      textAlign: "center",
    }}
  >
    Replacement and Refund Policy
  </h2>
  <ul
    style={{
      listStyleType: "disc", // Bullet points
      textAlign: "left", // Align text to the left for readability
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.2rem", // Same font size as other text content
      color: "#6c757d", // Subtle gray text
      lineHeight: "1.8",
      marginTop: "20px", // Space above list
      paddingLeft: "20px", // Proper indentation for bullets
      maxWidth: "800px", // Consistent width
      marginLeft: "auto", // Center align the list container
      marginRight: "auto",
    }}
  >
    <li style={{ marginBottom: "10px" }}>
      In case you want to cancel your reservation, you must notify us at least 2 hours before the scheduled reservation time to receive a refund.
    </li>
    <li style={{ marginBottom: "10px" }}>
      If the client does not arrive within 20 minutes of the scheduled reservation time, the reservation will be cancelled and the payment will not be refunded.
    </li>
    <li style={{ marginBottom: "10px" }}>
      Rescheduling the reservation to another day is allowed without a refund.
    </li>
    <li style={{ marginBottom: "10px" }}>
      There will be no refund if the client does not show up.
    </li>
  </ul>
</Container>




      {/* Footer */}
      <div
        id="footer"
        className="footer text-center text-white py-4"
        style={{
          backgroundColor: "#2C2C2C", // Professional gray footer background
          color: "#ffffff", // White text for contrast
        }}
      >
        <Container>
          <div className="mb-3">
            <img
              src={logo}
              alt="Padel Point Logo"
              style={{ height: "140px",maxHeight: "300px", // Match the header logo size
                 objectFit: "contain" }}
            />
          </div>

          {/* Contact Us Details */}
          <div className="mb-4">
            <p style={{ margin: "0", fontSize: "1.1rem" }}>
              <strong>Phone:</strong> +966 546 807 100
            </p>
            <p style={{ margin: "0", fontSize: "1.1rem" }}>
              <strong>Email:</strong> contact@padelpoint.com
            </p>
            {/* WhatsApp Group Link */}
      <p style={{ margin: "0", fontSize: "1.1rem", marginTop: "10px" }}>
        <strong>Join Our WhatsApp Group:</strong>{" "}
        <a
          href="https://chat.whatsapp.com/IB5wR4jDbH38zvdtY5XLBB"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25D366", // WhatsApp green color
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Click Here
        </a>
      </p>
    </div>

          

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/padel.point.sa/#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.5rem",
              }}
            >
              <i className="fab fa-instagram"></i>
            </a>

            {/* WhatsApp */}
            <a
              href="https://api.whatsapp.com/send/?phone=966546807100&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.5rem",
              }}
            >
              <i className="fab fa-whatsapp"></i>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@padel.point.sa"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1.5rem",
              }}
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </Container>
        <p className="mt-3" style={{ margin: "0", fontSize: "0.9rem" }}>
          © 2024 Padel Point. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
