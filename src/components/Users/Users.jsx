import * as axios from 'axios';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/user.png';

let Users = (props) => {

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        });


    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div><img src={ u.photos.small != null ? u.photos.small : userPhoto } alt="" /></div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </div>)
        }
    </div>
}

export default Users;