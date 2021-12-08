import "./css/sidebar.css"

import Container from "react-bootstrap/Container"
import React from "react";
import Button from "react-bootstrap/Button"
import Hello from "./hello"

class SideBar extends React.Component {

    static instance = null;

    constructor(props) {
        super(props);

        this.state = {
            prevPage: null,
            currentPage: null // TODO: start page will be dash board
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

    render() {
        return (<Button className="button_nav_menu" onClick={() => {SideBar.instance.setContent(this.props.content)}}>{this.props.pageName}</Button>);
    }
}

export default SideBar;