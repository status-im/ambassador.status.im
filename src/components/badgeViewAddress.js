import React from 'react';
import StatusAmbassadorBadge from '../../embarkArtifacts/contracts/StatusAmbassadorBadge';
import { FormControl, Input, InputLabel, Button } from '@material-ui/core';
import BadgeToken from './badgeToken';

class BadgeViewAddress extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: {
                viewAddress: "",
            },
            result: null,
            error: null,
            loading: false
        }      
    }  
    
    async loadAddress(e){ 
        //TODO: pagination
        e.preventDefault();
        const {input} = this.state;
        const result = {};
        try{
            await this.setState({loading:true,  error: null});
            result.balance = await StatusAmbassadorBadge.methods.balanceOf(input.viewAddress).call();
            const array = new Array(result.balance);
            for (let index = 0; index < array.length; index++) {
                const r = {};
                r.tokenOwner = input.viewAddress;
                r.tokenIndex = index;
                r.tokenId = await StatusAmbassadorBadge.methods.tokenOfOwnerByIndex(input.viewAddress, index).call(); 
                array[index] = r;
            }
            result.tokens = array;
            this.setState({result: result});
        }catch(e) {
            this.setState({result: result, error: e});
        } finally {
            await this.setState({loading:false});
        }
    }

    formChanged(field, e){
        e.preventDefault();
        const input = Object.assign({}, this.state.input)
        input[field] = e.target.value; 
        this.setState({ input });
    }
    
    tokenList(tokens) {
        return (<ul>{tokens.map(token => {
            return(<li><BadgeToken tokenId={token.tokenId}/></li>)
        })}</ul>)
    }

    render() {
        const {loading, error, input, result} = this.state;
        return (
        <React.Fragment>
            <h3> View Address</h3>
            <div id="form">
                {error && <div>Error: {JSON.stringify(error)}</div>}
                <form>
                    <FormControl>
                        <InputLabel>Address:</InputLabel>           
                        <Input
                                type="text"
                                value={input.viewAddress}
                                placeholder="0"
                                onChange={(e) => this.formChanged("viewAddress",e) } />
                    </FormControl>
                    <Button bsStyle="primary" onClick={(e) => this.loadAddress(e)}>Load</Button>
                </form>
                {loading && <div>Loading: {input.viewAddress}</div>}
                {result && <div>
                    {result.balance > 0 ? <div>{this.tokenList(result.tokens)}</div> : <div>No tokens :(</div>}
                </div> }
            </div>


        </React.Fragment>
        )
    }

}

export default BadgeViewAddress;