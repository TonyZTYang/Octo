import React from "react";
import ReactDOM from 'react-dom';
import './css/Download.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
class Download extends React.Component {
    constructor(prop) {
      super(prop)
      
      const defaultFileType = "json"; 
      this.fileNames = {
          json: "sites.json",
        csv: "sites.csv",
        text: "sites.txt"
      }    
      this.site = {
        fileType: defaultFileType,
        fileDownloadUrl: null,
        status: "",
          data: [
            { site: "Arizona",        points: 11 },
            { site: "Florida",        points: 29 },
            { site: "Iowa",           points:  6 },
            { site: "Michigan",       points: 16 },
            { site: "North Carolina", points: 15 },
            { site: "Ohio",           points: 18 },
            { site: "Pennsylvania",   points: 20 },
            { site: "Wisconsin",      points: 10 },
        ]
      }

      this.state = {
          a: Math.floor(Math.random() * 100000)
      }

        this.changeFileType = this.changeFileType.bind(this);
        this.download = this.download.bind(this);
        this.upload = this.upload.bind(this);
        this.openFile = this.openFile.bind(this);
        this.onProjChange = this.onProjChange.bind(this);
    }
    
    changeFileType (event) {
      const value = event.target.value;
        this.setState({fileType: value});
    }

    download (event) {
      event.preventDefault();
        // Prepare the file
      let output;
      if (this.site.fileType === "json") {
          output = JSON.stringify({site: this.site.data}, 
            null, 4);
      } else if (this.site.fileType === "csv"){
        // Prepare data:
        let contents = [];
        contents.push (["site", "points"]);
        this.site.data.forEach(row => {
            contents.push([row.site, row.points])
        });
        output = this.makeCSV(contents);
      } else if (this.site.fileType === "text"){
        // Prepare data:
        output = '';
        this.site.data.forEach(row => {
            output += `${row.site}: ${row.points}\n`
        });
      }
      // Download it
      const blob = new Blob([output]);
      const fileDownloadUrl = URL.createObjectURL(blob);
      this.setState ({fileDownloadUrl: fileDownloadUrl}, 
        () => {
          this.dofileDownload.click(); 
          URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
          this.setState({fileDownloadUrl: ""})
      })    
    }
  
    /**
     * Function returns the content as a CSV string
     * See https://stackoverflow.com/a/20623188/64904
     * Parameter content:
     *   [
     *.     [header1, header2],
     *.     [data1, data2]
     *.     ...
     *.  ]
     * NB Does not support Date items
     */
    makeCSV (content) {
        let csv = '';
      content.forEach(value => {
          value.forEach((item, i) => {
          let innerValue = item === null ? '' : item.toString();
          let result = innerValue.replace(/"/g, '""');
          if (result.search(/("|,|\n)/g) >= 0) {
            result = '"' + result + '"'
          }
          if (i > 0) {csv += ','}
          csv += result;
        })
          csv += '\n';
        })
      return csv
    }
    
    upload() {
        
      this.dofileUpload.click()
    }
    
    /**
     * Process the file within the React app. We're NOT uploading it to the server!
     */
    openFile(evt) {
        let status = []; // Status output
        const fileObj = evt.target.files[0];
        const reader = new FileReader();
            
        let fileloaded = e => {
          // e.target.result is the file's content as text
          const fileContents = e.target.result;
          status.push(`File name: "${fileObj.name}". Length: ${fileContents.length} bytes.`);
          // Show first 80 characters of the file
          const first80char = fileContents.substring(0,80);
          status.push (`First 80 characters of the file:\n${first80char}`)
          this.setState ({status: status.join("\n")})
        }
        
        // Mainline of the method
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);  
    }

    onProjChange() {
        this.setState({
            a: Math.floor(Math.random() * 100000)
        });
    }

    render() {
      return (
        
        <div id = 'Download'>
          <h2>Project</h2>
        
          <form>
            <span className="mr">Project Site:</span>
            <select name="ProjectSite"
              onChange={this.onProjChange}
              className="mr"
            >
              <option value="178635">New York</option>
              <option value="34256">Shanghai</option>
              <option value="18762">Abu Dhabi</option>
            </select> Number of Sites : {this.state.a}

          </form> 
          
          <form>
            <span className="mr">File type:</span>
            <select name="fileType"
              onChange={this.changeFileType}
              value={this.state.fileType}
              className="mr"
            >
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="text">Text</option>
            </select>
            
            <button type="button" class="btn btn-outline-dark" onClick={this.download}>
              Download the file!
            </button>
            
            <a className="hidden"
               download={this.fileNames[this.state.fileType]}
               href={this.state.fileDownloadUrl}
               ref={e=>this.dofileDownload = e}
            >download it</a>
            
            
          </form>
          <pre className="status">{this.site.status}</pre>
        </div>
        )
    }
  }

export default Download