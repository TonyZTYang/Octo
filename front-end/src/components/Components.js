import "./css/components.css"

import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton"
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Stack"
import Collapse from "react-bootstrap/Collapse"

class ProjectMenuItem extends React.Component {
    constructor(props) {
        super(props);

        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        this.props.context.setState({
            currentProject: this.props.item
        });
    }

    render() {
        return <Dropdown.Item as="button" onClick={this.clicked}>{this.props.item["name"]}</Dropdown.Item>;
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

export const ProjectSelect = (props) => {
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

export const DeviceSelect = (props) => {
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

export const Summary = (props) => {
    return (
        <Container id="container_summary">
            <h1>Summary</h1>
            {props.children}
        </Container>
    );
};


export const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

