import React from 'react';

export default class Form extends React.Component {

    render() {

        return <form onSubmit={this.onSubmit.bind(this)}>{this.props.children}</form>
        
    }

    onSubmit(e) {

        e.preventDefault();

        if(this.props.onSubmit)
            this.props.onSubmit();
    }
}