import React, { Fragment,  useState, useEffect} from 'react';
import contentHash from 'content-hash';
import EmbarkJS from '../../embarkArtifacts/embarkjs';
import StatusAmbassadorBadge from '../../embarkArtifacts/contracts/StatusAmbassadorBadge';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';
const divStyle = {
    alignItems: "left"
};


async function ipfsAdd(data) {
    const formData  = new FormData();
    formData.append("", data);
    const response = await fetch("https://ipfs.infura.io:5001/api/v0/add", {
        method: 'post',
        body: formData
    });
    if (response.status === 200) {
        return (await response.json()).Hash;
    } else {
        throw new Error("Bad response status from ipfs.infura.io: " + response.status)
    }
}


function createDescription(text, image) {
    return `{meta {
    :text  "${text}"
    :image "${image}"
}}`;
}


class BadgeAdminUI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                destination: "",
                text: "",
                image: null
            },
            result: null,
            error: null
        }      
    }  
    

    formChanged(field, e){
        e.preventDefault();
        const input = Object.assign({}, this.state.input)
        input[field] = e.target.value; 
        this.setState({ input });
    }

    fileChanged(field, e){
        const input = Object.assign({}, this.state.input)
        input[field] = e.target.files[0]; 
        this.setState({ input });
    }

    async register(e) {
        const {input} = this.state;
        e.preventDefault();
        const result = {};
        try{
            result.imageHash = await ipfsAdd(input.image);
            
            result.description = createDescription(input.text, contentHash.fromIpfs(result.imageHash));
            result.badgeHash = await ipfsAdd(result.description);
            result.badgefinalHash = "0x"+contentHash.fromIpfs(result.badgeHash).replace('e30101', 'e301');
            result.txResult = await StatusAmbassadorBadge.methods.generateToken(input.destination, result.badgefinalHash).send();
            result.transactionHash = result.txResult.transactionHash
            result.tokenId = result.txResult.events.Transfer.returnValues['tokenId'];
            this.setState({result: result, error: null});
        }catch(e) {
            this.setState({result: result, error: e});
        }

        
    }

    result_render(result) {
        if(result != null) return (
        <div>
            {result.tokenId != null && <p>Token Number: {result.tokenId}</p>}
            {result.transactionHash != null && <p>Transaction Hash: {result.transactionHash}</p>}
            {result.badgeHash != null && <p>Token Metadata: <a href={"https://ipfs.infura.io/ipfs/"+result.badgeHash}>{result.badgeHash}</a></p>}
            {result.imageHash != null && <p>Token Image: <a href={"https://ipfs.infura.io/ipfs/"+result.imageHash}>{result.imageHash}</a></p>}
        </div>
        )
    }

    render() {
        const {input, result, error} = this.state;
        return (
          <React.Fragment>
                {error != null && <div>Error: {JSON.stringify(error)}</div>}
                {this.result_render(result)}
                <h3> Create Badge</h3>
                <div id="form" style={divStyle}>
                    <form>
                        <FormControl>
                            <InputLabel>Destination:</InputLabel>           
                            <Input
                                    type="text"
                                    value={input.destination}
                                    placeholder="0x0000000000000000000000000000000000000000" required
                                    onChange={(e) => this.formChanged("destination",e) } />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Text:</InputLabel> 
                            <Input
                                    type="text"
                                    value={input.text}
                                    placeholder="Cool Ambassador 2020"
                                    onChange={(e) => this.formChanged("text",e) } />
                        </FormControl>
                        <FormControl>
                            <InputLabel>Image:</InputLabel> 
                            <input
                                    accept="image/svg"
                                    id="raised-button-thumbnail"
                                    onChange={(e) => this.fileChanged("image",e)}
                                    type="file"
                                />
                            <Button bsStyle="primary" onClick={(e) => this.register(e)}>Submit</Button>
                        </FormControl>
                    </form>
                </div>
          </React.Fragment>
        );
      }
    }

export default BadgeAdminUI;