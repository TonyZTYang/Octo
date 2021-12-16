import "./css/FileIO.css"

import React from "react";

import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
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

                <Row>
                    <Col>
                        <Container id="container_selections">
                            <Stack gap={3}>
                                <ProjectSelect/>
                                <DeviceSelect/>
                            </Stack>
                        </Container>
                    </Col>
                    <Col>
                        <Summary >
                            <h1>
                                test
                            </h1>
                            <h2>
                                testing
                            </h2>
                        </Summary>
                    </Col>
                </Row>

                <Button className="actionButton" onClick={this.upload}>Upload</Button>

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

                <Row>
                    <Col>
                        <Container id="container_selections">
                            <Stack gap={3}>
                                <ProjectSelect/>
                                <DeviceSelect/>
                            </Stack>
                        </Container>
                    </Col>
                    <Col>
                        <Summary >
                            <h1>
                                test
                            </h1>
                            <h2>
                                testing
                            </h2>
                        </Summary>
                    </Col>
                </Row>

                <Button className="actionButton" onClick={this.download}>Download</Button>


            </Container>
        );
    }
}

class DropMenu extends React.Component {

    render() {
        return (
            <DropdownButton id="dropdown-item-button" size={100} title={this.props.title}>
                {this.props.children}
            </DropdownButton>
        );
    }
}

const ProjectSelect = () => {
    return (
        <Container id="container_project">
            <h1>Select Project</h1>
            <DropMenu title="project"/>
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
        <Container id="container_device">
            <h1>Select Device</h1>
            <DropMenu title="device"/>
            {
                // TODO: BACKEND CALL AND UPDATE DROPBMENU
            }
        </Container>
    );
};

const Summary = (props) => {
    return (
        <Container id="container_summary">
            <h1>Summary</h1>
            {props.children}
        </Container>
    );
};

function Upload() {
    return <UploadClass />
}

function Download() {
    return <DownloadClass />
}

export default null;
export {Upload, Download};