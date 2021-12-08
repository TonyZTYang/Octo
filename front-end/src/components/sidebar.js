import "./css/sidebar.css"

import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import React from "react";
import Button from "react-bootstrap/Button"

class SideBar extends React.Component {

    constructor(props) {
        super(props);

        this.setContent = props.setContent.bind();
    }

    render() {
        const test = () => {
            return (
                <div>
                    <h1>
                        test h1
                    </h1>
                    <h2>
                        test h2
                    </h2>
                </div>
            );
        }

        return (
            <Container id="container_navbar">
                <Button onClick={() => {this.setContent(test)}}>test</Button>
            </Container>
        );
    }
}

export default SideBar;