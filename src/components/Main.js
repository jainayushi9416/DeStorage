import React, { Component } from 'react';
import { convertBytes } from './helpers';
import moment from 'moment'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid mt-5 text-center">
        <div className="row">
          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '1024px' }}>
            <div className="content">
              <p>&nbsp;</p>
              <div className="card mb-3 mx-auto bg-dark" style={{ maxWidth: '512px' }}>
                <h2 className="text-white text-monospace bg-dark"><b><ins>Decentralized File Storage </ins></b></h2>
                  <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
                      <div className="form-group">
                        <br></br>
                          <input
                            id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="About File..."
                            required />
                      </div>
                    <input type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>
                    <button type="submit" className="btn-primary btn-block"><b>Upload</b></button>
                  </form>
              </div>


              <p>&nbsp;</p>
              
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;



//https://ipfs.infura.io/ipfs/QmXGswKQ6ayz7DvsztenM3mfJ1T5JgTTHJ8BqzxWSBNJQs
//WORKSPACE
//COHERENT-VEGETABLE
//npm start 
//truffle migrate --reset 
//"QmRUUGtv8w8vvBHrdKzJ8W6sXazm3vyqZUMACUvDFkU5jG"