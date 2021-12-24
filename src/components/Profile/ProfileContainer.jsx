import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { getUserProfile } from '../../redux/profile-reducer'
import Profile from './Profile'
import { Redirect } from 'react-router-dom';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStatreToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerCoponent = withRouter(ProfileContainer)

export default connect (mapStatreToProps, {getUserProfile}) (WithUrlDataContainerCoponent)