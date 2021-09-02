import { Component } from "react";
import AppNavigation from "./AppNavigation";
import AppFooter from "./AppFooter";

class Layout extends Component {
    render() {
        return (
            <>
                <AppNavigation />
                <header className="App-header">
                    {this.props.children}
                </header>
                <AppFooter />
            </>
        )
    }
}

export default Layout