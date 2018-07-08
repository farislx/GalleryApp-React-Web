import React from 'react';

export default class Modal extends React.Component {

    render() {

        return (
            <div id="mycustom_modal" className="custom_modal">

                <div className="custom_modal-content">
                    <div className="custom_modal-header">
                        <span className="custom_modal_close" onClick={this.props.onClose}>&times;</span>
                        <h2>{this.props.title}</h2>
                    </div>
                    <div className="custom_modal-body">
                        {this.props.children}
                    </div>
                    {/* <div className="custom_modal-footer">
                        
                    </div> */}
                </div>

            </div>)

    }
}