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
<<<<<<< HEAD
            <NavBar /> 
=======
>>>>>>> 236217c7887c7aea6d0c234024ea43eaca56606b
            <Authentication />
        </div>
    );
}

export default App;