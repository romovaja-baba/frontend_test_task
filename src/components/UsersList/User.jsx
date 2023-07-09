import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "../../redux/store"

const User = ({ user }) => {
    const activeUser = useSelector(state => state.currentUser)
    const isActive = activeUser?.id === user.id

    const dispatch = useDispatch()

    const onUserClick = () => dispatch(setCurrentUser(user))

    return (
        <div className={`user-container ${isActive && "user--selected"}`} onClick={onUserClick}>
            <img
                src={user.picture || `${process.env.REACT_APP_HOST}/default-pp.png`}
                alt="" height={"20px"} width={"20px"} />
            <div className="user--name">{user.firstName} {user.lastName}</div>
        </div>
    )
}

export default User
