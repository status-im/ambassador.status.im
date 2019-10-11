import React, { Component } from 'react';


class Profiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profileItem: null,
        }
    }

    handleRemoveContentButton(event) {
        if (this.props.didHandleRemove) {
            this.props.didHandleRemove(this.props.profile)
        }
    }

    setProfileStateOnProps() {
        const { profile } = this.props
        this.setState({
            profileItem: profile
        })
    }

    componentDidMount() {
        this.setProfileStateOnProps()
    }

    componentDidUpdate(prevProps, prevState, snapshop) {
        if (this.props !== prevProps) {
            this.setProfileStateOnProps()
        }
    }

    render() {
        const { profileItem } = this.state
        return (

            <li className="contributor">
                {profileItem !== null
                    ?
                        <div>
                            <img src={require('../images/ambassadors/' + profileItem.photo)} className="contributor-profile" alt={profileItem.name} />
                            <div className="contributor-info">
                                <img src={require('../images/ambassadors/' + profileItem.photo)} className="contributor-profile" alt={profileItem.name} />
                                <b>{profileItem.name}</b>
                                <span></span>
                                <ul>
                                <li><a href={profileItem.status} target="_blank" rel="noopener noreferrer"><img src={require('../images/status.svg')} className="" alt="Status" /></a></li>
                                <li><a href={profileItem.twitter} target="_blank" rel="noopener noreferrer"><img src={require('../images/twitter.svg')} className="" alt="Twitter" /></a></li>
                                </ul>
                            </div>
                        </div>

                    : ''}
            </li>
        );
    }

}

export default Profiles;