import "./css/project.css"

import React from "react";

import Container from "react-bootstrap/Container";
import Form from 'react-bootstrap/Form'
import { Row, Col, Grid } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { DateTime } from 'react-datetime-bootstrap';
import Button from 'react-bootstrap/Button';

class Project extends React.Component {
    render() {
        return (
            <Container>
                <div id="projectContainer">
                    
                    <h1 > Project Manager </h1>
                    
                    <ColoredLine color="lightgray" />
                    <h2>Create a Project</h2>
                    <Form>
                    <Row className="g-2">
                    <Col md>
                        {/* input for the full name */}
                        <FloatingLabel controlId="floatingInputGrid" label="Full Name">
                        <Form.Control type="text" placeholder="Full Name" />
                        </FloatingLabel>
                    </Col>
                    <Col md>
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
                    </Col>
                    </Row>
                    <Row> 
                    {/* Input Date and Time for Deadline of Project */}
                    <Col id="ddlBox" xs="{12}">
                     <h2>Deadline: </h2>
                     <div id="dateTime">
                        <h4>Date</h4>
                        <DateTime pickerOptions={{format:"LL"}} value="2021-10-01"/>
                        <br></br>
                        <h4>Time</h4>
                        <DateTime pickerOptions={{format:"LTS"}}/>
                    </div>
                     </Col>
                    {/* Checkboxes to Choose Personnel  */}
                    <h2>Personnel: </h2>
                    <Col id="personnelBox">
                    <Form.Check
                        inline
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Gao Jiaqi"
                    />
                    <Form.Check
                        inline
                        type="checkbox"
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Li Yunru"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Liu Xueying"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Tirtha Satya"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Xu Bohai"
                    />
                       <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Xu Yue"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhang Tong"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhu Hua"
                    />
                    </Col>
                    <Col id="personnelBox">

                       <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Yang Zetong"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zheng Fengge"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhou Wen"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhou Yong"
                    />
                       <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhou Yingying"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhou Ziyi"
                    />
                    <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhu Zilin"
                    />
                      <Form.Check
                        type="checkbox"
                        inline
                        id="autoSizingCheck"
                        className="mb-2"
                        label="Zhu Qixi"
                    />
                     </Col>
                   
                     </Row>
                     <Row>
                     <Button variant="primary" type="submit" className="mt-2">
                        Submit
                    </Button>
                     </Row>
                    </Form>

                    
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


function ProjectManagement() {
    return <Project/>;
}

export default ProjectManagement;