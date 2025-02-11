import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/wastefood.jpeg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/swiggy.png";
import chatify from "../../Assets/Projects/food delivery.png";
import suicide from "../../Assets/Projects/portfolio.png";
import bitsOfCode from "../../Assets/Projects/task.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Food Delivery App"
              description="Food Delivery App built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Features include real-time order tracking, secure authentication, a user-friendly interface for browsing restaurants, adding items to the cart, and seamless online payments. Admin panel for managing restaurants, menu items, and orders efficiently."
              ghLink="https://github.com/ayushnighoskar/FoodDeliveryApp.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Task Management With User Authentication"
              description="Task Management App with User Authentication built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). Features include secure user authentication (JWT/session-based), task creation, editing, and deletion, real-time task updates, priority management, due date reminders, and a user-friendly dashboard. Supports role-based access, ensuring personalized task management and efficient workflow tracking."
              ghLink="https://github.com/Vijayarajvijay/Task-Manager-FE.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Swiggy Clone"
              description="Swiggy Clone built with the MERN stack (MongoDB, Express.js, React.js, and Node.js). Features include real-time food ordering, restaurant listings, advanced search and filtering, cart management, secure authentication, and seamless online payments. Integrated with a user-friendly UI for customers, restaurant owners, and delivery partners, along with an admin panel for efficient order and menu management"
              ghLink="https://github.com/tkssharma/swiggy-clone-full-stack.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="WASTE FOOD MANAGEMENT SYSTEM"
              description="• This project helps to handle the leftover food that is collected from weddings and events. We collaborated with a non-profit organization, which will use the WFMs and distribute the excess food to those in need.Using the extra food gathered at weddings, parties, and events, the project's successful conclusion would feed the underprivileged and needy."
              ghLink="https://github.com/SrinuTaddi18/portfolio.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

           <Col md={4} className="project-card">
             <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Portfolio Website"
              description="A personal portfolio website built using React.js to showcase projects, skills, and achievements in a visually engaging and interactive way. It features a responsive design, smooth navigation, and optimized performance for a seamless user experience. The website includes dedicated sections for project highlights, an about me page, and a contact form with social media integration. Deployed on GitHub Pages, it ensures easy accessibility and continuous updates."
              ghLink="https://github.com/SrinuTaddi18/portfolio.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>  */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
