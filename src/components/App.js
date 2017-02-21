import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
class App extends React.Component {
    constructor(props){
        super(props);
    } // constructor
    render() {
        return (
            <h1>BUTTS</h1>
        ); // return
    } // render
}
ReactDOM.render(
    <App />,
    document.getElementById('react-container')
)
