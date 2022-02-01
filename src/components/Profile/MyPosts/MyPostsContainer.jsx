import { addPostActionCreater } from '../../../redux/profile-reducer';
import Myposts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreater(newPostBody));
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts); 

export default MyPostsContainer;