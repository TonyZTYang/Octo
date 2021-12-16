import "./css/sidebar.css"

import React from "react";

import Container from "react-bootstrap/Container"//Side bar uses bootstrap container: Our application is structured around the sidebar, 
import Button from "react-bootstrap/Button"// so every function should be able to be accessed by clicking the navbar
import Stack from "react-bootstrap/Stack"
import Image from "react-bootstrap/Image"
import Icon from "./icon.png"
// This section imports all the functions of the site
import Dashboard from "./Dashboard"
import Upload from "./Upload"
import Download from "./Download"

class SideBar extends React.Component {
//The constructor set the default state
    static instance = null;

    constructor(props) {
        super(props);

        this.state = {
            currentButton: null
        };

        this.setContent = props.setContent.bind();

        SideBar.instance = this;
    }

    changePage(content) {
        return content;
    }
// Each menu item is a function 
// Only supports functions not classes
    render() {
        return (
            <Container id="container_nav_bar">
                <Stack gap={2} id="stack_menu">
                    <Image src={Icon} rounded id="icon"/>
                    <MenuItem icon="dashboard" pageName="Dashboard" content={Dashboard}/>
                    <MenuItem icon="upload" pageName="Upload" content={Upload}/>
                    <MenuItem icon="download" pageName="Download" content={Download}/>
                </Stack>

            </Container>
        );
    }
}
// Controls the actions of the buttons
class MenuItem extends React.Component {

    onClick() {
        SideBar.instance.setContent(this.props.content);
        SideBar.instance.setState({
            currentButton: this
        });
    }

    render() {
        if(SideBar.instance.state.currentButton === this) // This allows the buttons to look different when selecting with mouse
            return (
                <Button className="menu_item selected" onClick={() => {this.onClick()}}>
                    {this.props.pageName}
                </Button>
            );
        else // Default behavior
            return (
                <Button className="menu_item unselected" onClick={() => {this.onClick()}}>
                    {this.props.pageName}
                </Button>
            );
    }
}

export default SideBar;