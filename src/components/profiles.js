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

            <li className="contributor-list">
                {profileItem !== null
                    ?
                        <img src={require('../images/ambassadors/' + profileItem.photo)} className="contributor-profile" alt={profileItem.name} />
                    : ''}
            </li>
        );
    }

}

export default Profiles;