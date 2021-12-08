import "./css/sidebar.css"

import React from "react";

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

class SideBar extends React.Component {

    static instance = null;

    constructor(props) {
        super(props);

        this.state = {
            prevPage: null,
            currentPage: null // TODO: start page will be dashboard
        }

        this.setContent = props.setContent.bind();
        SideBar.instance = this;
    }

    changePage(content) {
        return content;
    }

    render() {
        return (
            <Container id="container_nav_bar">
            </Container>
        );
    }
}

class MenuItem extends React.Component {

    static setContent;

    constructor(props) {
        super(props);
    }

    render() {
        return (<Button className="button_nav_menu" onClick={() => {SideBar.instance.setContent(this.props.content)}}>{this.props.pageName}</Button>);
    }
}

export default SideBar;