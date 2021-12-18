import "./css/authentication.css"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import React, { useState } from "react";

class Field extends React.Component {

    static UNCHANGED = 0; 
    static VALID = 1;
    static INVALID = 2;

    state = {
        value: "",
        validated: Field.UNCHANGED
    }

    onValueChanged(e) {
        this.setState({
            value: e.currentTarget.value,
            validated: this.props.validation(e.currentTarget.value) ? Field.VALID : Field.INVALID
        });
    }

    render() {

        if(this.state.validated === Field.UNCHANGED) {
            return (
                <div hidden={this.props.hidden ? true : false}>
                <FloatingLabel controlId={ "label" + this.props.hint.replace(" ", "") } label={ this.props.hint } className="mb-3">
                    <Form.Control required type={ this.props.type } validity={ Field.UNCHANGED } placeholder={ this.props.hint } onChange={ (e) => this.onValueChanged(e) }/>
                </FloatingLabel>
                </div>
            );
        } else if(this.state.validated === Field.VALID)
            return (
                <div hidden={this.props.hidden ? true : false}>
                <FloatingLabel controlId={ "label" + this.props.hint.replace(" ", "") } label={ this.props.hint } className="mb-3">
                    <Form.Control required type={ this.props.type } validity={ Field.VALID } placeholder={ this.props.hint } onChange={ (e) => this.onValueChanged(e) } isValid />
                </FloatingLabel>
                </div>
            );
        else if(this.state.validated === Field.INVALID)
            return (
                <div hidden={this.props.hidden ? true : false}>
                <FloatingLabel controlId={ "label" + this.props.hint.replace(" ", "") } label={ this.props.hint } className="mb-3">
                    <Form.Control required type={ this.props.type } validity={ Field.INVALID } placeholder={ this.props.hint } onChange={ (e) => this.onValueChanged(e) } isInvalid />
                </FloatingLabel>
                </div>
            );
    }
}

function Authentication(props) {

    const [isLoggingIn, setLoggingIn] = useState(true);
    const {signedIn, setSignedIn} = props
    const loggingin = () => setLoggingIn(!isLoggingIn)
    const signin = () =>{
        setTimeout(() => {
            setSignedIn(true);
        }, 2000);
        
    }

    function handleSubmit(e) {
        // const labelPhone = "labelPhoneNumber";
        const labelName = "labelName";
        const labelInviteCode ="labelInvitationCode";
        // const labelPass = "labelPassword";

        const data = {};

        const form = e.currentTarget;

        let valid = true;

        for(let i = 0; i < form.length - 2; i++) {
            if(isLoggingIn) {
                if(form[i].id === labelName || form[i].id === labelInviteCode)
                    continue;
            }
            if(parseInt(form[i].attributes.validity.value) === Field.INVALID || parseInt(form[i].attributes.validity.value) === Field.UNCHANGED) {
                valid = false;
                break;
            }

            data[form[i].id] = form[i].value;
        }

        if(!valid) {
            e.preventDefault();
            e.stopPropagation();
        }

        // TODO: LOGIN OR REGISTER PROCESS
        
    }

    return (
        <Container id="container_authentication">
            <Form noValidate onSubmit={ handleSubmit }>
                {/* TODO: add icon */}
                <Field type="text" hint="Phone Number" validation={ (value) => { return value !== ""  && !isNaN(value) } } />
                <Field type="text" hint="Name" validation={ (value) => { return value !== "" } } hidden={isLoggingIn} />
                <Field id="field_password" type="password" hint="Password" validation={ (value) => { return value !== "" } } />
                <Field type="text" hint="Invitation Code" validation={ (value) => { return value !== "" } } hidden={isLoggingIn} />
                <Button id="button_submit" type="Submit" onClick={signin}>{isLoggingIn ? "Login" : "Register"}</Button>
                <Button id="button_switch_process" onClick={loggingin}>{isLoggingIn ? "Don't have an account?" : "Already have an account?"}</Button>
            </Form>
        </Container>
   );
}

export default Authentication;