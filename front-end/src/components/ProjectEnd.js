import "./css/project.css"

import React from "react";
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

//class for ending project
class ProjectE extends React.Component {
    render() {
        return (
            <Container>
                <div id="projectContainer">
                    
                    <h1>Project Manager - End Project</h1>
                    <ColoredLine color="lightgray" />
                    <Col md id ="endBox">
                        {/* form for choosing project to end */}
                        <Form>
                        {/* dropdown for selecting profile */}
                        <FloatingLabel controlId="floatingSelectGrid" label="Profile Name">
                        <Form.Select aria-label="Profile">
                            <option value="1">Profile 1</option>
                            <option value="2">Profile 2</option>
                            <option value="3">Profile 3</option>
                            <option value="4">Profile 4</option>
                            <option value="5">Profile 5</option>
                            <option value="6">Profile 6</option>
                            <option value="7">Profile 7</option>
                            <option value="8">Profile 8</option>
                            <option value="9">Profile 9</option>
                            <option value="10">Profile 10</option>
                        </Form.Select>
                        </FloatingLabel>
                        <Button variant="primary" type="submit" className="mt-2">
                         End
                        </Button>
                        </Form>
                    </Col>
                </div>

            </Container>
        );
        
    }
}

//horizontal ruler for header
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

//return project E to be used in sidebar
function ProjectEnd() {
    return <ProjectE/>;
}

export default ProjectEnd;