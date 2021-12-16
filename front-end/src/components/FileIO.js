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

        this.upload = this.upload.bind(this);
    }

    upload() {
        // TODO: UPLOAD A FILE
    }

    render() {
        return (
            <Container id="container_download">

                <ProjectSelect/>
                <DeviceSelect/>
                <Summary/>

                <ControlButtons action="Upload" doAction={this.upload} />

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

        this.download = this.download.bind(this);
    }

    download() {
        // TODO: DOWNLOAD A FILE
    }

    render() {
        return (
            <Container id="container_download">

                <ProjectSelect/>
                <DeviceSelect/>
                <Summary/>

                <ControlButtons action="Download" doAction={this.download}/>

            </Container>
        );
    }
}

const ProjectSelect = () => {
    return (
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
    );
};

const DeviceSelect = () => {
    return (
        <Container id="container_project">
            <h1>Select Device</h1>
            {
                // TODO: BACKEND CALL AND UPDATE DROPBMENU
            }
        </Container>
    );
};

const Summary = () => {
    return (
        <Container id="container_project">
            <h1>Summary</h1>
            {
                // TODO: GET SUMMARY FROM BACKEND CALL RESULT
            }
        </Container>
    );
};


class ControlButtons extends React.Component {

    render() {
        return (
            <Container id="container_buttons">
                <Stack gap={2}>
                    <Button onClick={() => {this.props.doAction()}}>{this.props.action}</Button>
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