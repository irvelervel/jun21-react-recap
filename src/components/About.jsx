import { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import FetchResults from "./FetchResults";

const About = () => {

    const [selectedChoice, setSelectedChoice] = useState('users')

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    {/* <Jumbotron className="text-dark">
                        <h1>About Page</h1>
                        <p>
                            Welcome to Strive School!
                        </p>
                        <p>
                            <Button variant="primary">Go home</Button>
                        </p>
                    </Jumbotron> */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select" value={selectedChoice} onChange={(e) => setSelectedChoice(e.target.value)}>
                            <option>users</option>
                            <option>todos</option>
                            <option>albums</option>
                            <option>posts</option>
                        </Form.Control>
                    </Form.Group>
                    <FetchResults selectedChoice={selectedChoice} />
                    {/* <FetchResults /> */}
                </Col>
            </Row>
        </Container>
    )
}

export default About