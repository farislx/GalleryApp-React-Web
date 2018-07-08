import React from 'react';
import { connect } from 'react-redux';
import Card from '../../../components/presentational/card';
import Row from '../../../components/presentational/row';
import Dropdown from '../../../components/presentational/dropdown';
import Input from '../../../components/presentational/input';
import FormGroup from '../../../components/presentational/formGroup';
import SubmitButton from '../../../components/presentational/button';
import Form from '../../../components/presentational/form';
import ActionBuilder from '../../../utils/actionCreator';
import Modal from '../../../components/presentational/modal';

export default class ForgotPassword extends React.Component {

    render() {

        return (

            <Modal title={"Forgot Password"} onClose={this.onClose.bind(this)}>

                   <Form onSubmit={this.onSubmit.bind(this)}>

                            <Row>

                                <FormGroup label="User Name" size={"medium"}>

                                    <Input className="form-control tlnt-input-one" name="ForgotUserName" onChange={this.props.onChange} placeholder="Enter name" value={this.props.data.ForgotUserName} />

                                </FormGroup>

                                <FormGroup label="Mobile Number" size={"medium"}>

                                    <Input className="form-control tlnt-input-one" name="ForgotMobileNumber" onChange={this.props.onChange} placeholder="Enter Mobile Number" value={this.props.data.ForgotMobileNumber} />

                                </FormGroup>

                              

                            </Row>

                            <Row>

                                <FormGroup>

                                    <div className="button_wrapper">

                                        <SubmitButton action={"submit"}>

                                            <i className="fa fa-pencil" aria-hidden="true"></i>  Submit

                                         </SubmitButton>    

                                    </div>

                                </FormGroup>

                            </Row>

                        </Form>


            </Modal>
        )
    }

    onClose() {
        
         this.props.onChange("showForgotPassword", !this.props.data.showForgotPassword);
    }

    onSubmit() {

        this.props.dispatch(ActionBuilder("AUTH", "FORGOTPASSWORD_SUBMISSION"));
    }

}