import "./css/FileIO.css"

import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import axios from "axios"

import {ColoredLine, ProjectSelect, DeviceSelect, Summary} from "./Components"


class UploadClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: null,
            devices: null,
            currentProject: null,
            currentDevice: null
        }
    }

    componentDidMount() {
        axios.get('/hello')
        .then(res => {this.setState({projects: res["data"]["projects"]})})
        .catch(err => {console.log(err)});

        axios.get('/devices')
        .then(res => {this.setState({devices: res["data"]["devices"]})})
        .catch(err => {console.log(err)});
    }

    render() {
        return (
            <Container id="container_download">

                <h1> Upload </h1>
                <ColoredLine color="lightgray"/>

                <Row>
                    <Col>
                        <Container id="container_selections">
                            <Stack gap={3}>
                                <ProjectSelect context={this} projects={this.state.projects}/>
                                <DeviceSelect context={this} devices={this.state.devices}/>

                                <Stack gap={1}>
                                    <Button className="actionButton">Choose file</Button>
                                    <Button className="actionButton">Upload</Button>
                                </Stack>
                            </Stack>
                        </Container>
                    </Col>
                    <Col>
                        <Summary >
                        </Summary>
                    </Col>
                </Row>


            </Container>
        );
    }
}

class DownloadClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: null,
            devices: null,
            currentProject: null,
            currentDevice: null
        }
    }

    componentDidMount() {
        axios.get('/hello')
        .then(res => {this.setState({projects: res["data"]["projects"]})})
        .catch(err => {console.log(err)});

        axios.get('/devices')
        .then(res => {this.setState({devices: res["data"]["devices"]})})
        .catch(err => {console.log(err)});
    }

    render() {
        return (
            <Container id="container_download">

                <h1> Download </h1>
                <ColoredLine color="lightgray"/>

                <Row>
                    <Col>
                        <Container id="container_selections">
                            <Stack gap={3}>
                                <ProjectSelect context={this} projects={this.state.projects}/>
                                <DeviceSelect context={this} devices={this.state.devices}/>

                                <Button className="actionButton">Download</Button>
                            </Stack>
                        </Container>
                    </Col>
                    <Col>
                        <Summary >
                            <h2>
                                {this.state.currentProject === null ? "" : "Points detected: " + this.state.currentProject["points"]}
                            </h2>
                            <h2>
                                {this.state.currentProject === null ? "" : "Expected size: " + this.state.currentProject["eSize"]}
                            </h2>
                        </Summary>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export const Upload = () => {return <UploadClass/>}
export const Download = () => {return <DownloadClass/>}