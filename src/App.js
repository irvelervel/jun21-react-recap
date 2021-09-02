import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingContent from './components/LandingContent'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Layout from './components/Layout'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route path="/" exact component={LandingContent} /> */}
        <Switch>
          {/* the switch is rendering just one route at a time */}
          {/* it is pretty handy also for providing a fallback case */}
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Layout>
                <LandingContent {...routerProps} subTitle="Homepage" />
              </Layout>
            )}
          />
          <Route
            path="/contact-us"
            exact
            render={(routerProps) => (
              <Layout>
                <ContactUs {...routerProps} />
              </Layout>
            )}
          />
          <Route
            path="/about"
            exact
            render={() => (
              <Layout>
                <About />
              </Layout>
            )}
          />
          <Route render={() => <h1 className="text-danger">404 - NOT FOUND</h1>} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
