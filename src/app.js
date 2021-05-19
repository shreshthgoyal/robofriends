import React from 'react';
import Cardlist from './cardlist';
// import { robots } from './robots';
import Searchbox from './searchbox';
import 'tachyons';
// import { render } from '@testing-library/react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => {
                return data.json();
            })
            .then(user => {
                this.setState({ robots: user })
            });
    }

    search = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filteredrobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading..</h1>
        }
        else {
            return (
                <div className="tc">
                    <h1 className="f1">ROBOFRIENDS</h1>
                    <Searchbox searchChange={this.search} />
                    <Cardlist robots={filteredrobots} />
                </div>
            );
        }
    }
}
export default App;
