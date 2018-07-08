import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import ActionBuilder from '../../../utils/actionCreator';
import Input from '../../../components/presentational/input';
import Form from '../../../components/presentational/form';
import Row from '../../../components/presentational/row';
import ForgotPassword from '../forgotPassword';
import { showValidations, toastWarinig, clearValidation } from '../../../utils';
import validate from 'validate.js';
import Styles from './style.css';

class Login extends React.Component {
    responseFacebook(response) {
        props.dispatch(ActionBuilder("AUTH", "LOGIN_SUBMIT"));
      }
    render() {

        return (<div data-reactroot="" className="app flex-row align-items-center">

            <div className="container">

                

                <div className="row justify-content-center">

                    <div className="col-md-8">

                        <div className="card-group mb-0">

                            <div className="card p-2">

                                <div className="card-block">

                                    <p className="text-muted">Sign In to your account</p>
                                       
                                        <Row>
                                        <FacebookLogin
                                                                                    className="btn btn-primary px-2 btn-green pull-right"
                                                                                    appId="2098628250385744"
                                                                                    autoLoad={true}
                                                                                    fields="name,email,picture"
                                                                                    callback={this.onLoginSubmit.bind(this)}
                                                                                    />
                                        </Row>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>)

    }

    onLoginSubmit(e) {
        if (e.accessToken) {

            clearValidation();
            this.props.dispatch(ActionBuilder("AUTH", "LOGIN_SUBMIT"));

        } 
    }
}

let mapStateToProps = function (state) {

    return {

        data: state.auth.login.get("data").toObject()
    }
}

let mapDispatchToProps = function (dispatch) {

    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)