import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Nav.jsx';
import UserProfile from './components/UserProfile.jsx';
import ZipCode from './components/Zip-code.jsx'
import './index.css'


class App extends React.Component {
    constructor(props) {
        super(props);

    // bind to this all functions being handed down

    }

    componentDidMount() {
        this.forceUpdate(); //rerenders page when components state or props change
    }

    render() {
        return (
            <div>
                    <div>
                        <NavBar />
                        <img className="logo-body" src={require('./PLUCK-logo-02.png')} />
                        {/* <UserProfile /> */}
                        <ZipCode />
                    </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));