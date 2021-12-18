import "./app.css"

import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./components/sidebar.js"
import Container from "react-bootstrap/Container"
import Authentication from "./components/authentication";
import React, { useState } from "react"
// import axios from "axios"

/*
TODO:
    USERS MUST LOGIN BEFORE USING THINGS
*/

class Content extends React.Component {

    render() {
        return (
            <Container id="container_content">
                {this.props.content}
            </Container>
        )
    }
}


function App() {

    const [currentContent, setContent] = useState(() => {return("")});
    const [signedIn, setSignedIn] = useState(false);
    
    if (!signedIn)
        return <Authentication signedIn={signedIn} setSignedIn={setSignedIn} />
    else {
        return (
            <Container fluid id="container_body">
                <SideBar setContent={setContent}/>
                <Content content={currentContent} />
            </Container>
        );}
}

export default App;
