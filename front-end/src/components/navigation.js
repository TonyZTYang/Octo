import { Nav } from "react-bootstrap";

function Items() {
    return (
        <Nav.Item>
            
        </Nav.Item>
    );
}

function NavBar() {
    return (
        <Nav>
            <Items />
        </Nav>
    );
}

export const NavItems = Items;
export default NavBar;