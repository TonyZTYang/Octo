import "./css/project.css"

import React from "react";
import Form from 'react-bootstrap/Form'
import {Col} from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';

//class for deleting project
class ProjectD extends React.Component {
    render() {
        return (
            <Container>
                <div id="projectContainer">
                    
                    <h1>Project Manager - Delete Project</h1>
                    <ColoredLine color="lightgray" />
                    <Col md >
                        {/* form for choosing profile to delete */}
                        <Form id ="deleteBox">
                        {/* dropdown for selecting profile */}
                        <FloatingLabel controlId="floatingSelectGrid" label="Project Name">
                        <Form.Select aria-label="Profile">
                            <option value="1">Project 1</option>
                            <option value="2">Project 2</option>
                            <option value="3">Project 3</option>
                        </Form.Select>
                        </FloatingLabel>
                        <Button variant="primary" type="submit" className="mt-2">
                         Delete
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

//return project D to be used in sidebar
function ProjectDel() {
    return <ProjectD/>;
}

export default ProjectDel;