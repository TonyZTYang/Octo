import "./css/photoediting.css"

import React from "react";

import Container from "react-bootstrap/Container";
import red from '../icons/red.png';
import yellow from '../icons/yellow.png';

import green from '../icons/green.png';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

function Editing() {
    return (
        <Container>
    
           <h1>Photo Editing</h1>
           <ColoredLine color="lightgray" />
            
            <img src={red} width = "800" height = "500" alt="red detection points" />
            <img src={yellow} id="changeDetection" width = "800" height = "500" alt="yellow detection points" />
            <img src={green} id="changeDetection" width = "800" height = "500" alt="green detection points" />

        </Container>
    

    );


}


export default Editing;




