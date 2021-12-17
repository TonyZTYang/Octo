import "./css/dashboard.css"

import React from "react";

import Container from "react-bootstrap/Container";
import ProgressBar from 'react-bootstrap/ProgressBar'
import DoughnutChart from './DoughnutChart'
import ListGroup from 'react-bootstrap/ListGroup'

class Dash extends React.Component {
    render() {
        return (
            <Container>
                <h1 > Dashboard </h1>
                
                <ColoredLine color="lightgray" />

                <h2> Progress Tracker </h2>
                <ProgressBar now={45} />

                <h2> Team </h2>
                
                <ListGroup as="ol" numbered>
                    <ListGroup.Item as="li">Jia Song</ListGroup.Item>
                    <ListGroup.Item as="li">Li Yunru</ListGroup.Item>
                    <ListGroup.Item as="li">Xu Bohai</ListGroup.Item>
                    <ListGroup.Item as="li">Zheng Fengge</ListGroup.Item>
                    <ListGroup.Item as="li">Zhou Wen</ListGroup.Item>
                </ListGroup>
                

                <DoughnutChart/>
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
    return <Dash />;
}

export default Dashboard;