import styles from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://i1.sndcdn.com/artworks-vv68F64hlnO8Seqr-hgYb8w-t500x500.jpg', followed: false, fullName: 'Igor', status: 'I am looking for a Job', location: { city: 'Omsk', country: 'Russia' } },
            { id: 2, photoUrl: 'https://i1.sndcdn.com/artworks-vv68F64hlnO8Seqr-hgYb8w-t500x500.jpg', followed: true, fullName: 'Dmitry', status: 'Sleep', location: { city: 'Moscow', country: 'Russia' } },
            { id: 3, photoUrl: 'https://i1.sndcdn.com/artworks-vv68F64hlnO8Seqr-hgYb8w-t500x500.jpg', followed: true, fullName: 'Kostya', status: 'Studing', location: { city: 'Kiev', country: 'Ukrain' } }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <div><img src={u.photoUrl} alt="" /></div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>)
        }
    </div>
}

export default Users;