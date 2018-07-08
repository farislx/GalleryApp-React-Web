import React from 'react';
import uuid from 'node-uuid';

export default class Row extends React.Component {

    render() {

        return <div className="row">{this.props.children}</div>
    }
}