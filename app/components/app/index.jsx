import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import Styles from './styles.css';

class App extends React.Component {

    render() {

        return (<div>
            {this.props.children}
        </div>)
    }

    toggleLogin() {

    }
}


let mapStateToProps = function (state) {
    return {
        
    }
}

let mapDispatchToProps = function (dispatch) {
    return {
        dispatch
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)