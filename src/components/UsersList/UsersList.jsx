import User from "./User"
import "../../css/UsersList.css"

const UsersList = ({ users, onUserClick }) => {
    return (
        <div className="list-container">
            {users.map(user => <User key={user.id} user={user} onUserClick={onUserClick}/>)}
        </div>
    )
}

export default UsersList