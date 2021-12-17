import "./css/dashboard.css"

import React from "react";

import Container from "react-bootstrap/Container";
import ProgressBar from 'react-bootstrap/ProgressBar'
import DoughnutChart from './DoughnutChart'
import ListGroup from 'react-bootstrap/ListGroup'
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"

import axios from "axios"

import {ProjectSelect} from "./Components"

class DashboardClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProject: null,
            projects: null
        }
    }
    
    componentDidMount() {
        axios.get('/hello')
        .then(res => this.setState({projects: res["data"]["projects"]}))
        .catch(err => console.log(err));
    }

    render() {
        if(this.state.currentProject === null) {
            return (
                <Container id="container_project">
                    <ProjectSelect context={this} projects={this.state.projects} />
                </Container>
            );
        } else 
            return (
                <Container>

                    <Stack gap={3}>
                    
                        <div>
                            <h1 > Dashboard - {this.state.currentProject["name"]}</h1>
                            
                            <ColoredLine color="lightgray" />
                        </div>


                        <div>
                            <h2> Progress Tracker - {"Deadline: " + this.state.currentProject["deadline"]}</h2>
                            <ProgressBar now={this.state.currentProject["progress"]} /> 
                            <h3> Number of points detected: {this.state.currentProject["points"]}</h3>
                        </div>

                        <div>
                            <h2> Team </h2>
                            <ListGroup as="ol" numbered>
                                {
                                    this.state.currentProject["team"].map(v => {
                                        return <ListGroup.Item as="li">{v}</ListGroup.Item>
                                    })
                                }
                            </ListGroup>
                        </div>

                    </Stack>

                    <Button id="button_change" onClick={() => {this.setState({currentProject: null})}}>Change Projects</Button>

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

function Dashboard() {
    return <DashboardClass />;
}

export default Dashboard;