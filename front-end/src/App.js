import logo from './logo.svg';
import './App.css';
import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import FileIO from './components/FileIO'
import Download from './components/Download'
import Upload from './components/Upload'
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Button>  Test Button </Button>
    //     <p>          
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
       
    //   </header>
    // </div>
    <div>
      <div> 
          <FileIO/>
      </div>
      <div>
        <Download/>
      </div>
      <div>
        <Upload/>
      </div>
    </div>
    

  );
}

export default App;
