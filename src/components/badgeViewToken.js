import React from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import BadgeToken from './badgeToken';

class BadgeViewToken extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                tokenId: "0",
                image: null
            },
            error: null
        }      
    }  
    

    formChanged(field, e){
        e.preventDefault();
        const input = Object.assign({}, this.state.input)
        input[field] = e.target.value; 
        this.setState({ input });
    }

    render() {
        const {input} = this.state;
        return (
        <React.Fragment>
            <h3> View Token</h3>
            <div id="form">
                <form>
                    <FormControl>
                        <InputLabel>Token Number:</InputLabel>           
                        <Input
                                type="text"
                                value={input.tokenId}
                                placeholder="0"
                                onChange={(e) => this.formChanged("tokenId",e) } />
                    </FormControl>
                </form>
                <div>
                    <BadgeToken tokenId={input.tokenId} loadOwner={true}/>
                </div>
            </div>
        </React.Fragment>
        )
    }

}

export default BadgeViewToken;