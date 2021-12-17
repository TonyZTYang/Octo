import "./css/project.css"

import React from "react";

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import { Row, Col, Grid } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { DateTime } from 'react-datetime-bootstrap';
import Button from 'react-bootstrap/Button';

class ProjectStart extends React.Component {
    render() {
        return (
            <Container>
                <div id="projectContainer">
                    
                    <h1>Project Manager Starting Page</h1>
                    <ColoredLine color="lightgray" />

                </div>

            </Container>
        );
        
    }
}


const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);


function ProjectBeg() {
    return <ProjectStart/>;
}

export default ProjectBeg;