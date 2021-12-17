import "./css/sidebar.css"

import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import Icon from "./icon.png";

import Collapse from "react-bootstrap/Collapse"

import Dashboard from "./Dashboard";
import {Upload, Download} from "./FileIO"

class SideBar extends React.Component {

    static instance = null;

    constructor(props) {
        super(props);

        this.state = {
            currentButton: null
        };

        this.setContent = props.setContent.bind(this);
        SideBar.instance = this;
    }

    render() {
        return (
            <Container id="container_nav_bar">
                <Stack gap={2} id="stack_menu">
                    <Image src={Icon} rounded id="icon"/>
                    <MenuItem icon="dashboard" pageName="Dashboard" content={Dashboard}/>
                    <MenuItem icon="upload" pageName="Upload" content={Upload}/>
                    <MenuItem icon="download" pageName="Download" content={Download}/>
                    <DropButton pageName="Project">
                        <MenuItem pageName="Create"/>
                    </DropButton>
                </Stack>

            </Container>
        );
    }
}

class DropButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: false
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            toggled: !this.state.toggled
        });
    }

    render() {
        return (
            <Container id="container_dropdown_button">
                <Stack gap={2} id="stack_menu">
                    <Button className="menu_item unselected" onClick={this.onClick}> {this.props.pageName} </Button>
                    <Collapse in={this.state.toggled}>
                        <div id="container_dropdown_item">
                            {this.props.children}
                        </div>
                    </Collapse>
                 </Stack>               
            </Container>
        );
    }
}

class MenuItem extends React.Component {

    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        SideBar.instance.setContent(this.props.content);
        SideBar.instance.setState({
            currentButton: this
        });
    }

    render() {
        if(SideBar.instance.state.currentButton === this)
            return (
                <Button className="menu_item selected" onClick={() => {this.onClick()}}>
                    {this.props.pageName}
                </Button>
            );
        else 
            return (
                <Button className="menu_item unselected" onClick={() => {this.onClick()}}>
                    {this.props.pageName}
                </Button>
            );
    }
}

export default SideBar;