import "./css/FileIO.css"

import React from "react";

import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import axios from "axios"
import Dropdown from "react-bootstrap/Dropdown";

import {ProjectSelect, DeviceSelect, Summary} from "./Components"


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
                                {this.state.currentProject === null ? "" : "Number of points: " + this.state.currentProject["points"]}
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


/*
class ProjectMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.id = props.item["id"];
        this.name = props.item["name"];
        this.points = props.item["points"];
        this.size = props.item["eSize"];

        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.props.context.setState({
            currentProject: this.props.item
        });
    }

    render() {
        return <Dropdown.Item as="button" onClick={this.clicked}>{this.name}</Dropdown.Item>;
    }
}

class DeviceMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.name = props.item["name"];
        this.link = props.item["link"];

        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.props.context.setState({
            currentDevice: this.props.item
        });
    }

    render() {
        return <Dropdown.Item as="button" onClick={this.clicked}>{this.name}</Dropdown.Item>
    }
}

const ProjectSelect = (props) => {
    let items = null;

    if(props.projects != null)
        if(props.projects.length > 0)
            items = props.projects;

    if(items === null)
        return (
            <Container id="container_project">
                <h1>Select Project</h1>
                <DropdownButton title="project">
                </DropdownButton>
            </Container>
        );
    else {
        return (
            <Container id="container_project">
                <h1>Select Project</h1>
                <DropdownButton title={props.context.state.currentProject === null ? "project" : props.context.state.currentProject["name"]}>
                    {
                        items.map(v => {
                            return(
                                <ProjectMenuItem context={props.context} key={v["id"]} item={v}/>
                            );
                        })
                    }
                </DropdownButton>
            </Container>
        );
    }
}

const DeviceSelect = (props) => {
    let items = null;

    if(props.devices != null)
        if(props.devices.length > 0)
            items = props.devices;

    if(items === null)
        return (
            <Container id="container_project">
                <h1>Select Device</h1>
                <DropdownButton id="dropdown-item-button" title="device">
                </DropdownButton>
            </Container>
        );
    else {
        return (
            <Container id="container_project">
                <h1>Select Device</h1>
                <DropdownButton id="dropdown-item-button" title={props.context.state.currentDevice === null ? "device" : props.context.state.currentDevice["name"]}>
                    {
                        items.map((v,i) => {
                            return(
                                <DeviceMenuItem context={props.context} key={i} item={v}/>
                            );
                        })
                    }
                </DropdownButton>
            </Container>
        );
    }
};

const Summary = (props) => {
    return (
        <Container id="container_summary">
            <h1>Summary</h1>
            {props.children}
        </Container>
    );
};
*/

export const Upload = () => {return <UploadClass/>}
export const Download = () => {return <DownloadClass/>}