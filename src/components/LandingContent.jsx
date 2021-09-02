import { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";

class LandingContent extends Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md={6}>
                        <h2>Welcome!</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt?
                        </p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default LandingContent