import "./css/sidebar.css"

import React from "react";

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

import Hello from "./hello"

class SideBar extends React.Component {

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

    render() {
        return (
            <Container id="container_nav_bar">
                <MenuItem pageName="Hello" content={Hello}/>
            </Container>
        );
    }
}

class MenuItem extends React.Component {

    static setContent;

    constructor(props) {
        super(props);
    }

    onClick() {
        SideBar.instance.setContent(this.props.content);
        SideBar.instance.setState({
            currentButton: this
        });
    }

    render() {
        if(SideBar.instance.state.currentButton === this)
            return (<Button className="selected" onClick={() => {this.onClick()}}>{this.props.pageName}</Button>);
        else
            return (<Button className="unselected" onClick={() => {this.onClick()}}>{this.props.pageName}</Button>);
    }
}

export default SideBar;