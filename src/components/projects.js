
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { Container, Row, Col ,Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import colorSharp2 from "../assets/img/color-sharp2.png";

import { ProjectCard } from "./ProjectCard";

export const Projects =() => {

    const projects = [
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg1,
    },
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg2,
    },
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg3,
    },
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg1,
    },
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg1,
    },
    {
        title: "Business startup",
        description:" Design and development",
        imgUrl: projImg1,
    },
    ]
    return(
        <section className ="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>In React, the syntax is used to define the column layout within a grid system, specifically in the context of the react-bootstrap library.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab one</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab three</Nav.Link>
                    </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return(
                                           <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                    <Tab.Pane event key="second">Lorem Ipsum</Tab.Pane>
                    <Tab.Pane event key="third">Lorem Ipsum</Tab.Pane>                

                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}