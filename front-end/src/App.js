import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/navigation.js"
import Authentication from "./components/authentication";

/*
TODO:
    USERS MUST LOGIN BEFORE USING THINGS
*/

function isLoggedIn() {

    return false;
}

function App() {
    return (
        <div className="App">
            <NavBar />
        </div>
    );
}

export default App;