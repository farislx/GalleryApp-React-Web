import React from 'react';

export default class Card extends React.Component {

    render() {

        return (<div className="card">

            <div className="card-header">

                <span>{this.props.title}</span>

            </div>

            <div className="card-block">{this.props.children}</div>

        </div>)
    }
}