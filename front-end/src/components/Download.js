import React from "react";
<<<<<<< HEAD
=======
import ReactDOM from 'react-dom';
import './css/Download.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
class Download extends React.Component {
    constructor(prop) {
      super(prop)
      
      const defaultFileType = "json"; 
      this.fileNames = {
          json: "sites.json",
        csv: "sites.csv",
        text: "sites.txt"
      }    
      this.site = {
        fileType: defaultFileType,
        fileDownloadUrl: null,
        status: "",
          data: [
            { site: "Arizona",        points: 11 },
            { site: "Florida",        points: 29 },
            { site: "Iowa",           points:  6 },
            { site: "Michigan",       points: 16 },
            { site: "North Carolina", points: 15 },
            { site: "Ohio",           points: 18 },
            { site: "Pennsylvania",   points: 20 },
            { site: "Wisconsin",      points: 10 },
        ]
      }
>>>>>>> b3c320e77476e6d9370a23890c4b0a2e764f82ac

import Container from "react-bootstrap/Container";

class DownloadClass extends React.Component {
    render() {
        return (
            <Container id="container_download">

            </Container>
        );
    }
}

function Download() {
    return <DownloadClass />;
}

export default Download;