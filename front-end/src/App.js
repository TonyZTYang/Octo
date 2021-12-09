<<<<<<< HEAD
import "./app.css"

import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from "./components/sidebar.js"
import Container from "react-bootstrap/Container"
import Authentication from "./components/authentication";
import React, { useState } from "react"

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
=======
import logo from './logo.svg';
import './App.css';
import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileIO from './components/FileIO'
import Download from './components/Download'
import Upload from './components/Upload'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Button>  Test Button </Button>
    //     <p>          
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
       
    //   </header>
    // </div>
    <div>
      <div> 
          <FileIO/>
      </div>
      <div>
        <Download/>
      </div>
      <div>
        <Upload/>
      </div>
    </div>
    

  );
>>>>>>> a12f110e7b0e7367a50e80d63cba0900ebe84f55
}

export default App;
