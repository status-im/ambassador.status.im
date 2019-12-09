import React from 'react';
import contentHash from 'content-hash';
import ipfsClient from 'ipfs-http-client';
import cljs from '@yellowdig/cljs-tools'
import StatusAmbassadorBadge from '../../embarkArtifacts/contracts/StatusAmbassadorBadge';

const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });


class BadgeToken extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            loading: true,
            error: null
        }      
    }  
    

	componentDidMount() {
		this.loadToken();
	}

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.tokenId !== this.props.tokenId) {
            this.loadToken();
		}
    }

    async loadToken(){
        const token = {};
        try{
            token.tokenId = this.props.tokenId;
            token.contenthash = await StatusAmbassadorBadge.methods.contenthash(token.tokenId).call();
            token.ipfsLink = contentHash.decode(token.contenthash.replace('e301', 'e30101'));
            token.content = cljs.edn.decode((await ipfs.get("/ipfs/"+token.ipfsLink))[0].content.toString('utf8'));
            token.imageData = (await ipfs.get("/ipfs/"+contentHash.decode(token.content.meta.image)))[0].content
            if(this.props.loadOwner){
                token.ownerOf = await StatusAmbassadorBadge.methods.ownerOf(token.tokenId).call();
            }
        }catch(e){
            this.setState({error: e })
        }finally {
            this.setState({token, loading: false })
        }

    }

    render() {
        const { token, error, loading } = this.state;
        if(loading){
            return(<React.Fragment>Loading #{this.props.tokenId}</React.Fragment>)
        }
        if(error){
            return(<React.Fragment>Error loading #{this.props.tokenId}: {JSON.stringify(error.message)}.</React.Fragment>)
        }
        return (
        <div className="badgeToken">
            <ul>
                <li>#{token.tokenId}</li>
                <li>{token.content.meta.text}</li>
                <li><img width={"100px"} height={"100px"} src={"data:image/svg+xml;base64,"+btoa(token.imageData) }/></li>
                {token.ownerOf && <li>Owner: {token.ownerOf}</li>}
            </ul>
        </div>
        )
    }

}

export default BadgeToken;