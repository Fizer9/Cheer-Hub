import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStatreToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerCoponent = withRouter(ProfileContainer)

export default connect (mapStatreToProps, {getUserProfile}) (WithUrlDataContainerCoponent)