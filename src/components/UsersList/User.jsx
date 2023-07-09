const User = ({ user, onUserClick }) => {
    return (
        <div className="user-container" onClick={() => onUserClick(user)}>
            <img src={user.picture || "http://localhost:3000/default-pp.png"} alt="" height={"20px"} width={"20px"} />
            <div className="user--name">{user.firstName} {user.lastName}</div>
        </div>
    )
}

export default User