import "./css/FileIO.css"

import React from "react";

import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button"
import Collapse from "react-bootstrap/Collapse"
import Stack from "react-bootstrap/Stack"

class UploadClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    render() {
        return (
            <Container id="container_download">

                <ProjectSelect context={this} step={1}/>
                <DeviceSelect context={this} step={2}/>
                <Summary context={this} step={3}/>

                <ControlButtons context={this} action="Upload" steps={3} />

            </Container>
        )
    }
}

class DownloadClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    render() {
        return (
            <Container id="container_download">

                <ProjectSelect context={this} step={1}/>
                <DeviceSelect context={this} step={2}/>
                <Summary context={this} step={3}/>

                <ControlButtons context={this} action="Download" steps={3}/>

            </Container>
        );
    }
}

const ProjectSelect = (props) => {
    return (
        <Collapse in={props.context.state.step === props.step}>
            <Container id="container_project">
                <h1>Select Project</h1>
                {
                    /*
                        TODO: BACKEND CALL AND UPDATE DROPMENU 
                        "id": "",
                        "name": "",
                        "no points": "",
                        "expected size": ""
                    */
                }
            </Container>
        </Collapse>
    );
};

const DeviceSelect = (props) => {
    return (
        <Collapse in={props.context.state.step === props.step}>
            <Container id="container_project">
                <h1>Select Device</h1>
                {
                    // TODO: BACKEND CALL AND UPDATE DROPBMENU
                }
            </Container>
        </Collapse>
    );
};


const Summary = (props) => {
    return (
        <Collapse in={props.context.state.step === props.step}>
            <Container id="container_project">
                <h1>Summary</h1>
                {
                    // TODO: GET SUMMARY FROM BACKEND CALL RESULT
                }
            </Container>
        </Collapse>
    );
};


class ControlButtons extends React.Component {

    next() {
        if(this.props.context.state.step == 3)
            return;
        
        this.props.context.setState({
            step: this.props.context.state.step += 1
        });
    }

    prev() {
        this.props.context.setState({
            step: this.props.context.state.step -= 1
        });
    }

    render() {
        console.log(this.props.context.state.step);
        return (
            <Container id="container_buttons">
                <Stack gap={2}>
                    <Button onClick={() => {this.next()}}>{this.props.context.state.step === this.props.steps ? this.props.action : "Continue"}</Button>
                    <Collapse in={!(this.props.context.state.step === 1)}>
                        <Button onClick={() => {this.prev()}}>Go back</Button>
                    </Collapse>
                </Stack>
            </Container>
        );
    }

}

function Upload() {
    return <UploadClass />
}

function Download() {
    return <DownloadClass />
}

export default null;
export {Upload, Download};