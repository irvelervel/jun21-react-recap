import { Component } from "react";

class FetchResults extends Component {

    state = {
        data: []
    }

    fetchData = async () => {
        const URL = 'https://jsonplaceholder.typicode.com/'
        try {
            let response = await fetch(URL + (this.props.selectedChoice || ''))
            if (response.ok) {
                let data = await response.json()
                this.setState({
                    data
                })
            } else {
                console.log('AWW SNAP, we got an error!')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    // SAME RESULT IN A FUNCTIONAL COMPONENT
    // useEffect(() => {
    //     fetchData()
    // }, [selectedChoice])

    componentDidUpdate(prevProps) {
        // if we're coming here for a state change, don't execute the fetch again! -> infinite loop
        if (prevProps.selectedChoice !== this.props.selectedChoice) {
            this.fetchData()
        }
    }

    render() {
        return (
            <>
                <h1>FETCH RESULTS for {this.props.selectedChoice || ''}</h1>
                <ul>
                    {
                        this.state.data.slice(0, 3).map(d => (
                            <li key={d.id}>
                                {JSON.stringify(d).slice(0, 50)}
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default FetchResults