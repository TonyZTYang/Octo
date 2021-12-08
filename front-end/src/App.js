import "./app.css"

import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./components/sidebar.js"
import Container from "react-bootstrap/Container"
import Authentication from "./components/authentication";
import React, { useState } from "react"
import Hello from "./components/hello"

/*
TODO:
    USERS MUST LOGIN BEFORE USING THINGS
*/

class Content extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container id="container_content" >
                {this.props.content}
            </Container>
        )
    }
}

function isLoggedIn() {

    return false;
}

function App() {

    const [currentContent, setContent] = useState(() => {return("")});

    return (
        <Container fluid id="container_body">
            <SideBar setContent={setContent}/>
            <Content content={currentContent} />
        </Container>
    );
}

export default App;