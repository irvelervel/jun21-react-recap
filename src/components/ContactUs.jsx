import { Component } from "react";
import { Button, Container, Col, Row, Form, Spinner } from "react-bootstrap";

class ContactUs extends Component {

    state = {
        isLoading: false,
        email: ''
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        console.log('sending...')
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.props.history.push('/')
        }, 1500)

        let response = await fetch('YOUR_URL_HERE', {
            method: 'POST',
            body: JSON.stringify({ name: 'Stefano' }),
            headers: {
                Authorization: 'Bearer ' + process.env.REACT_APP_SUPER_SECRET_KEY,
                'Content-Type': 'application/json'
            }
        })
        if (response.ok) {
            alert('form sent correctly')
        } else {
            alert('form NOT sent correctly')
        }

        // ENVIRONMENT VARIABLES
        // if you develop your application locally, you can put a .env file in the root folder of your project

    }

    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" onChange={(e) => this.setState({ email: e.target.value })} value={this.state.email} placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Example multiple select</Form.Label>
                                <Form.Control as="select" multiple>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button disabled={this.state.isLoading} type="submit" variant="primary">
                                {this.state.isLoading && <Spinner animation="border" variant="light" style={{ width: '20px', height: '20px' }} />}
                                <span className="ml-1">{this.state.isLoading ? 'Sending...' : 'Send Form!'}</span>
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContactUs