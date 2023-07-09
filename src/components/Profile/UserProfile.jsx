import { useSelector } from "react-redux"
import UserEditInfo from "./UserEditInfo"

import "../../css/UserProfile.css"

const UserProfile = () => {
    const user = useSelector(state => state.currentUser)
    if (!user) return null

    return (
        <div className="profile-container">
            <div className="profile--title">
                <div className="profile--title--text">{user.firstName} {user.lastName}</div>
            </div>
            <div className="profile--content">
                <div className="profile--content--picture">
                    <img src={user.picture || `${process.env.REACT_APP_HOST}/gray_default.svg`}
                        alt="" height={"130px"} width={"130px"} />
                </div>
                <UserEditInfo key={user.id} user={user} />
            </div>
        </div>
    )
}

export default UserProfile