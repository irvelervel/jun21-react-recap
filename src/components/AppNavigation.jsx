import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

const AppNavigation = ({ history, location, match }) => (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            {/* Link is a redirect component that you can use to wrap an image, a div, etc. */}
            <Link to="/">
                <div className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</div>
            </Link>
            <Link to="/about">
                <div className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</div>
            </Link>
            <div style={{ cursor: 'pointer' }} className={location.pathname === '/contact-us' ? 'nav-link active' : 'nav-link'} onClick={() => history.push('/contact-us')}>Contact us!</div>
            {/* 
            <Link to="/contact-us">
                <div className="nav-link">Contact us!</div>
            </Link> */
            }
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
)

export default withRouter(AppNavigation)

// three ways of passing to a component history, location and match:
// 1) declaring a route using the 'component' prop
// 2) declaring a route using the 'render' prop but manually spreading over the props the render function is receiving
// 3) wrapping the export of the component with 'withRouter'